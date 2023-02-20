import stroke from "../assets/stroke.svg";
import EHC from "../assets/EHC.png";
import Pieces from "../assets/Pieces.png";
import Turing from "../assets/Turing.png";
import OpenReplay from "../assets/Openreplay.png";
import DevCareer from "../assets/devcareer.png";

import Card from "../elements/Card";
import ExperienceCard from "../elements/ExperienceCard";

const Experience = () => {
  return (
    <section className="flex flex-col px-6" id="experience">
      <section className="flex justify-start items-center lg:w-5/12 w-72 pb-10">
        <h1 className="text-2xl">
          <span className="text-primary">#</span>Experience
        </h1>
        <figure className="pl-4">
          <img src={stroke} alt="line" className="w-28" />
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
              cover=""
              snug=""
              skill="Technical Writing"
            />
          </div>
          <div className="pb-8">
            <ExperienceCard
              image={OpenReplay}
              title="Technical Writer"
              company="Open Replay:Freelance"
              date="December 2022 - Present"
              experience="I am currently crafting high-quality and informative articles that not only educate, but also engage and captivate our target audience. My extensive research, writing, and editing experience has enabled me to effectively communicate complex technical concepts in a simplified and easily understandable manner."
              cover=""
              snug=""
              skill="Technical Writing"
            />
          </div>
          <div className="pb-8">
            <ExperienceCard
              image={Pieces}
              title="Content Writer"
              company="Pieces:Freelance"
              date="October 2022 - February 2023"
              experience="I created engaging, informative, and high-quality technical articles. My extensive experience in research, writing, and editing has allowed me to effectively communicate complex technical information to our target audience in a simplified manner."
              cover=""
              snug=""
              skill="Technical Writing"
            />
          </div>
          <div className="pb-8">
            <ExperienceCard
              image={DevCareer}
              title="Frontend Engineer"
              company="DevCareer:Internship"
              date="September 2022 - December 2022"
              experience="During the course of my internship, I developed optimized, responsive websites and created technical documents, guides, and tutorials on various programming languages and frameworks."
              cover=""
              snug=""
              skill="Web development, Technical Writing"
            />
          </div>
          <div className="pb-8">
            <ExperienceCard
              image={EHC}
              title="Frontend Channel Manager"
              company="EmpowerHerCommunity:Full time"
              date="May 2022 - Present"
              experience="As a Frontend Slack Channel Manager, I  organize and led pair programming exercises for beginners and intermediates, providing valuable opportunities for skill development and growth using modern technologies like Slack, GitHub and Google workspaces. I closely monitor and track feedback and reviews from channel members, reporting any insights to the Community Manager."
              cover=""
              snug=""
              skill="Web development, Community Development"
            />
          </div>
          
          
     
      
       
   
        </section>
      </section>
  );
};

export default Experience;
