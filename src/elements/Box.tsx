import quotes from "../assets/quotes.svg"
const Box = () => {
  return (
    <hgroup>
      <section className="flex justify-center relative">
        <figure className="absolute lg:left-80 left-12 lg:bottom-12 bottom-12">
            <img src ={quotes} alt ="quotes" className=" w-7 h-7"/>
        </figure>
        <h3 className="border border-dotted border-secondary lg:h-14 h-16 flex justify-center items-center lg:w-6/12 w-10/12 leading-8 lg:text-base text-xs px-1 lg:pl-0 pl-6">
          I had a dream, I got everything I wanted.
        </h3>
        <figure className="absolute lg:right-80 right-11 lg:top-12 top-12">
            <img src ={quotes} alt ="quotes" className="lg:h-7 lg:w-7 w-7 h-7"/>
        </figure>
      </section>
      <section className="flex justify-end lg:w-9/12 w-11/12">
        <h3 className="border border-t-0 border-dotted border-secondary h-11 flex justify-center items-center lg:w-3/12 w-5/12 lg:text-base text-xs px-1">
         - Billie Eilish
        </h3>
      </section>
    </hgroup>
  );
};

export default Box;
