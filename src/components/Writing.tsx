import stroke from "../assets/stroke.svg";
import Pieces from "../assets/Pieces.png";
import Turing from "../assets/Turing.png";
import OpenReplay from "../assets/Openreplay.png";
import Smashing from "../assets/smashing.png";
import ExperienceCard from "../elements/ExperienceCard";

const WritingExperience: React.FC = () => {
  return (
    <section className="flex flex-col px-6 pb-6 cursor-pointer" id="experience">
      <section className="flex justify-start items-center lg:w-5/12 w-96 pb-10">
        <h1 className="lg:text-2xl md:text-xl text-lg">
          <span className="text-primary">#</span>Writing Experience
        </h1>
        <figure className="pl-4">
          <img src={stroke} alt="line" className="lg:w-28 w-16" />
        </figure>
      </section>

      <section className="flex flex-col">
      <div className="pb-8">
          <ExperienceCard
            image={ Smashing}
            title="Technical Writer"
            company="Smashing: Freelance"
            date="January 2023 - May 2023"
          />
        </div>
        <div className="pb-8">
          <ExperienceCard
            image={Turing}
            title="Guest Writer"
            company="Turing: Freelance"
            date="January 2023 - July 2023"
           
          />
        </div>
        <div className="pb-8">
          <ExperienceCard
            image={Pieces}
            title="Content Writer"
            company="Pieces: Freelance"
            date="October 2022 - March 2023"
          />
        </div>
        <div className="pb-8">
          <ExperienceCard
            image={OpenReplay}
            title="Technical Writer"
            company="Open Replay: Freelance"
            date="December 2022 - Present"
          />
        </div>
      </section>
    </section>
  );
};

export default WritingExperience;
