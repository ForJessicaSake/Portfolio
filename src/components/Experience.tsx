import stroke from "../assets/stroke.svg";
import EHC from "../assets/EHC.png";
import DevCareer from "../assets/devcareer.png";
import ExperienceCard from "../elements/ExperienceCard";

const Experience: React.FC = () => {
  return (
    <section className="flex flex-col px-6 cursor-pointer" id="experience">
      <section className="flex justify-start items-center lg:w-5/12 w-96 pb-10">
        <h1 className="lg:text-2xl md:text-xl text-lg">
          <span className="text-primary">#</span>Frontend Experience
        </h1>
        <figure className="pl-4" >
          <img src={stroke} alt="line" className="lg:w-28 w-16" />
        </figure>
      </section>

      <section className="flex flex-col">
        <div className="pb-8">
          <ExperienceCard
            image={EHC}
            title="Engineering Lead"
            company="EmpowerHerCommunity: Full time"
            date="February 2023 - Present"
            // experience="As the engineering lead,I am responsible for managing the engineering team and
            // maintaining the community website. I frequently organize pair programming exercises for
            // beginners and intermediates in the community frontend slack channel, providing
            // valuable opportunities for skill development and growth using modern technologies like
            // Slack, GitHub and Google workspaces"
          />
        </div>
        <div className="pb-8">
          <ExperienceCard
            image={DevCareer}
            title="Frontend Engineer"
            company="DevCareer: Internship"
            date="September 2022 - December 2022"
            // experience="During the course of my internship, I developed optimized, responsive websites and created technical documents, guides, and tutorials on various programming languages and frameworks."
          />
        </div>
      </section>
    </section>
  );
};

export default Experience;
