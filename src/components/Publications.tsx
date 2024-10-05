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
  brief?: string;
};

const Publications: React.FC = () => {
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
    const data = await fetch("https://api.hashnode.com/v1/me/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `b26ae415-c964-44f1-956b-564677d1ff95`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const result = await data.json();
    const post = result.data.user.publication.posts;

    return post;
  };
  const [pages] = useAtom(page);
  const { data, status } = useQuery<ArticleType[]>(["page", pages], fetchData, {
    keepPreviousData: true,
  });

  return (
    <section className="flex flex-col px-6 pb-20">
      <section
        className="flex justify-start items-center lg:w-5/12 w-72"
        id="publications"
      >
        <h1 className="lg:text-2xl text-xl">
          <span className="text-primary">#</span> My Blog
        </h1>
        <figure className="pl-4">
          <img src={stroke} alt="line" className="lg:w-20 w-32" />
        </figure>
      </section>
      <p className="lg:w-6/12 w-full md:w-11/12 text-sm text-justify pb-10 pt-5 leading-7">
        I write because I enjoy sharing what I've learned with others, and in
        some ways, expressing the learned concepts helps the knowledge stick. A
        number of my Hashnode articles have helped early developers in the dev
        community and this is what is most important to me.
      </p>
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
          <div className="grid md:grid-cols-2 grid-col-1 lg:grid-cols-3 lg:gap-5 gap-6 place-items-center w-full">
            {data?.map((articles: ArticleType) => (
              <article
                key={articles.id}
                className="items-center text-justify cursor-pointer hover:shadow-2xl shadow-lg"
              >
                <figure className="border w-80">
                  <Link
                    to={`https://forjessicasake.hashnode.dev/${articles.slug}`}
                    target="blank"
                  >
                    <img
                      src={articles.coverImage}
                      alt="blog post cover"
                      className=" w-80 h-36 object-fill"
                    />
                  </Link>
                </figure>

                <figcaption className="w-80">
                  <h2 className="font-bold h-20 flex items-center lg:text-sm text-sm border-t-0 border px-2 py-2 text-justify">
                    {articles.title}
                  </h2>
                  <p className="font-font h-32 text-xs border border-t-0 px-2 py-1 text-justify">
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
