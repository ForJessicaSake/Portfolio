import quotes from "../assets/quotes.svg";
const Box = () => {
  return (
    <hgroup>
      <section className="flex justify-center relative">
        <figure className="absolute lg:left-52 left-10 lg:bottom-12 bottom-20">
          <img src={quotes} alt="quotes" className="lg:h-8 lg:w-8 w-7 h-7" />
        </figure>
        <h3 className="border border-dotted border-secondary lg:h-16 h-24 flex justify-center items-center lg:w-8/12 w-10/12 leading-8 lg:text-base text-xs px-1 lg:pl-0 pl-6">
             Cause everyone wants something from me now and I don't want to let em down.
        </h3>
        <figure className="absolute lg:right-52 right-12 lg:top-12 top-20">
          <img src={quotes} alt="quotes" className="lg:h-8 lg:w-8 w-7 h-7" />
        </figure>
      </section>
      <section className="flex justify-end lg:w-10/12 w-11/12">
        <h3 className="border border-t-0 border-dotted border-secondary h-11 flex justify-center items-center lg:w-2/12 w-5/12 lg:text-base text-xs px-1">
          - Billie Eilish
        </h3>
      </section>
    </hgroup>
  );
};

export default Box;
