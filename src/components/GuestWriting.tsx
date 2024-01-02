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

const GuestWriting: React.FC = () => {
  const articles = [
    {
      id: 2,
      publication: "Open Replay",
      link: "https://blog.openreplay.com/static-side-generation-vs-server-side-rendering",
      title: "Static Site Generation Vs Server Side Rendering",
      coverImage: "ssg.png",
      brief:
        "Today, where time is of the essence, the speed and visibility of your website can make or break your digital presence.",
    },

    {
      id: 1,
      publication: "Turing",
      link: "https://www.turing.com/kb/how-to-create-slider-in-js",
      title: "How to Create a Slider in JavaScript?",
      coverImage: "/slider.png",
      brief:
        "Are you fed up with your website’s unorganized content? Want to add some interactive elements that'll engage your visitors and make them come back for more?",
    },
    {
      id: 6,
      publication: "Pieces",
      link: "https://code.pieces.app/blog/everything-you-need-to-know-to-choose-a-modern-javascript-framework",
      title:
        "Everything You Need to Know to Choose a Modern JavaScript Framework",
      coverImage: "/framework.png",
      brief:
        "When starting a dev career, you probably had no idea where to begin. But, once you found something interesting, you decided to learn it. When it comes to choosing a framework, it’s the same hurdle.",
    },
    {
      id: 5,
      publication: "Smashing Magazine",
      link: "https://www.smashingmagazine.com/2023/05/safest-way-hide-api-keys-react/",
      title: "The Safest Way To Hide Your API Keys When Using React",
      coverImage: "/API.png",
      brief:
        "Want to make sure your API keys are safe and sound when working with React? I've got you covered!",
    },

    {
      id: 3,
      publication: "Turing",
      link: "https://www.turing.com/kb/check-type-of-objects-variables-in-typescript",
      title: "Typescript: How to Check Type of Objects & Variable",
      coverImage: "/types.png",
      brief:
        "When working with variables or objects of the union type, you may want to narrow these types down to do something more specific...",
    },
    {
      id: 4,
      publication: "Open Replay",
      link: "https://blog.openreplay.com/you-dont-need-a-state-management-library--use-ustate-plus-context/",
      title:
        "You Don't Need A State Management Library -- Use UseState Plus Context",
      coverImage: "/state.png",
      brief:
        "Think of state as the current value of a variable in a React application that changes over time when an action or event occurs.",
    },
  ];

  return (
    <section className="flex flex-col px-6 pb-20">
      <section
        className="flex justify-start items-center lg:w-5/12 w-72"
        id="publications"
      >
        <h1 className="lg:text-2xl text-xl">
          <span className="text-primary">#</span>Guest Writing
        </h1>
        <figure className="pl-4">
          <img src={stroke} alt="line" className="lg:w-20 w-24" />
        </figure>
      </section>
      <p className="lg:w-6/12 w-full md:w-11/12 text-sm text-justify pb-10 pt-5 leading-7">
        I've gained solid writing eperience while working for a variety of
        publications as a{" "}
        <span className="text-primary font-medium"> Technical Writer. </span>
        These opportunities have allowed me to gain practical experience in
        research while simultaneously honing my technical skills.
      </p>
      <section className="flex place-items-center w-full">
        <div className="grid md:grid-cols-2 grid-col-1 lg:grid-cols-3 lg:gap-5 gap-6 place-items-center w-full">
          {articles?.map((article) => (
            <article
              key={article.id}
              className="items-center text-justify hover:shadow-2xl shadow-lg"
            >
              <figure className="border w-80 cursor-pointer">
                <Link to={article.link} target="blank">
                  <img
                    src={article.coverImage}
                    alt="blog post cover"
                    className=" w-80 h-36 object-fill"
                  />
                </Link>
              </figure>

              <figcaption className="w-80">
                <h2 className="font-semibold h-20 flex items-center lg:text-sm text-sm border-t-0 border px-2 py-2 text-justify">
                  {article.publication} - {article.title}
                </h2>
                <p className="font-font h-32 text-xs border border-t-0 px-2 py-1 text-justify">
                  {article.brief}
                </p>
              </figcaption>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
};

export default GuestWriting;
