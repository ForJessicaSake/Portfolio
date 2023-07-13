import stroke from "../assets/stroke.svg";
import EHC from "../assets/EHC.png";
import Brimble from "../assets/Brimble .png";
import Innovotio from "../assets/innovotio.png";
import DevCareer from "../assets/devcareer.png";
import ExperienceCard from "../elements/ExperienceCard";

const Experience: React.FC = () => {
  return (
    <section className="flex flex-col px-6 cursor-pointer" id="experience">
      <section className="flex justify-start items-center lg:w-5/12 w-96 pb-10">
        <h1 className="lg:text-2xl md:text-xl text-lg">
          <span className="text-primary">#</span>Frontend Experience
        </h1>
        <figure className="pl-4">
          <img src={stroke} alt="line" className="lg:w-28 w-16" />
        </figure>
      </section>

      <section className="flex flex-col">
        <ExperienceCard
          image={Brimble}
          title="Frontend Developer"
          company="Brimble: Contract"
          date="April 2023 - Present"
        />
        <div className="py-8">
          <ExperienceCard
            image={Innovotio}
            title="Frontend Developer"
            company="Innovotio: Contract"
            date="April 2023 - present"
          />
        </div>

        <ExperienceCard
          image={DevCareer}
          title="Frontend Engineer"
          company="DevCareer: Internship"
          date="September 2022 - December 2022"
        />

        <div className="py-8">
          <ExperienceCard
            image={EHC}
            title="Engineering Lead"
            company="EmpowerHerCommunity: Full time"
            date="February 2023 - Present"
          />
        </div>
      </section>
    </section>
  );
};

export default Experience;
