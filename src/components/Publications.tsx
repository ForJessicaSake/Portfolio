import { page } from "../atoms/Atoms";
import { useQuery } from "react-query";
import { useAtom } from "jotai";
import stroke from "../assets/stroke.svg";
import { Link } from "react-router-dom";

type ArticleType = {
  id: number;
  coverImage: any;
  slug: any;
  title: string;
  brief: string;
};

const Publications:React.FC = () => {
  const variables = { page: 0 };
  const query = `
    query GetUserArticles($page: Int!) {
        user(username: "ForJessicasake") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                    coverImage
                }
            }
        }
    }
  `;

  const fetchData = async (): Promise<ArticleType[]> => {
    const data = await fetch("https://api.hashnode.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const result = await data.json();
    const post = result.data.user.publication.posts;
    console.log(post);

    return post; // Ensure to return the data from the function
  };
  const [pages] = useAtom(page);
  const { data, status } = useQuery<ArticleType[]>(["page", pages], fetchData, {
    keepPreviousData: true,
  });


  return (
    <section className="flex flex-col px-6 pb-20" id="publications">
      <section className="flex justify-start items-center lg:w-5/12 w-72 pb-10">
        <h1 className="lg:text-2xl text-xl">
          <span className="text-primary ">#</span>Publications
        </h1>
        <figure className="pl-4">
          <img src={stroke} alt="line" className="lg:w-20 w-32" />
        </figure>
      </section>
      <section className="flex place-items-center w-full">
        {status === "error" && (
          <p className="text-sm font-light text-center">
            Error in fetching data
          </p>
        )}
        {status === "loading" && (
          <p className="text-sm font-light text-center">...</p>
        )}
        {status === "success" && (
          <div className="grid grid-col-1 lg:grid-cols-3 lg:gap-5 gap-6 place-items-center w-full">
            {data?.map((articles: ArticleType) => (
              <article
                key={articles.id}
                className="items-center text-justify cursor-pointer hover:shadow-2xl shadow-lg"
              >
                <figure className="border w-80">
                  <Link
                    to={`https://forjessicasake.hashnode.dev/${articles.slug}`}
                  >
                    <img
                      src={articles.coverImage}
                      alt="blog post cover"
                      className=" w-80 h-36 object-fill"
                    />
                  </Link>
                </figure>

                <figcaption className="w-80">
                  <h2 className="font-bold h-14 items-center lg:text-sm text-sm border-t-0 border px-2 py-2 text-justify">
                    {articles.title}
                  </h2>
                  <p className="h-32 text-xs border border-t-0 px-2 py-1 text-justify">
                    {articles.brief}
                  </p>
                </figcaption>
              </article>
            ))}
          </div>
        )}
      </section>
    </section>
  );
};

export default Publications;
