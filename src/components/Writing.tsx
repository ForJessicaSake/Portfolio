import stroke from "../assets/stroke.svg";
import Pieces from "../assets/Pieces.png";
import Turing from "../assets/Turing.png";
import OpenReplay from "../assets/Openreplay.png";
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
            image={Turing}
            title="Guest Writer"
            company="Turing:Freelance"
            date="January 2023 - Present"
            experience="I am currently a guest writer at Turing, where I am writing comprehensive articles and gaining hands-on experience in research, as well as improving my technical writing skills."
            skill="Technical Writing, Web Development"
            article="https://www.turing.com/kb/how-to-create-slider-in-js"
          />
        </div>
        <div className="pb-8">
          <ExperienceCard
            image={OpenReplay}
            title="Technical Writer"
            company="Open Replay:Freelance"
            date="December 2022 - Present"
            experience="I am currently crafting high-quality and informative articles that not only educate, but also engage and captivate our target audience. My extensive research, writing, and editing experience has enabled me to effectively communicate complex technical concepts in a simplified and easily understandable manner."
            skill="Technical Writing, Web Development"
          />
        </div>
        <div className="pb-8">
          <ExperienceCard
            image={Pieces}
            title="Content Writer"
            company="Pieces:Freelance"
            date="October 2022 - March 2023"
            experience="As a content writer for Pieces, I had a blast creating technical articles that were both entertaining and informative. I made sure each piece spoke directly to our target audience by focusing on their specific needs and interests."
            skill="Technical Writing,  Web Development"
            article="https://code.pieces.app/blog/everything-you-need-to-know-to-choose-a-modern-javascript-framework"
          />
        </div>
      </section>
    </section>
  );
};

export default WritingExperience;
