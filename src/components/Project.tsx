import stroke from "../assets/stroke.svg";
import Card from "../elements/Card";
import dockett from "../assets/dockett.png";
import Lamoore from "../assets/Lamoore.png";
import sunnyside from "../assets/sunnyside.png";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <section className="flex flex-col px-6 pb-20" id="project">
      <section className="flex justify-start items-center lg:w-5/12 w-72 pb-10">
        <h1 className="lg:text-2xl text-xl">
          <span className="text-primary ">#</span>Projects
        </h1>
        <figure className="pl-4">
          <img src={stroke} alt="line" className="w-36" />
        </figure>
      </section>
      <section className="grid grid-col-1 lg:grid-cols-3 gap-6 lg:gap-5 place-items-center w-full text-xs">
        <div
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-delay="20"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <Card
            image={dockett}
            title="Sticky Note Web Application"
            about="Introducing Dockett, the ultimate note-taking app for anyone with a busy schedule! With Dockett, you can take down short notes quickly and easily, helping you stay organized and on top of your tasks at all times. Our app is packed with powerful features and intuitive design, making it easy for anyone to use."
            link="https://dockett.vercel.app/"
          />
        </div>
        <Card
          image={sunnyside}
          title="Sunny Side Agencies; A Frontend Mentor Junior Challenge Project"
          about="A responsive and user-friendly site built with the latest frontend technologies such as TypeScript, React, Jotai, and TailwindCSS. This project showcases my skills in using TypeScript for typechecking, Jotai for managing client states and tailwindCSS for the design."
          link="https://sunnyside-agencies.vercel.app/"
        />
             <div
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-delay="20"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
        <Card
          image={Lamoore}
          title="Lamoore: Ecommerce clothing website"
          about="Lamoore, your go-to destination for fast, seamless, and enjoyable online shopping for all your clothing needs! We've built an amazing ecommerce website using the latest web technologies, including React, AOS library, and JSON API, to provide you with the best possible shopping experience."
          link="https://lamoore.vercel.app/"
        />
        </div>
      </section>
    </section>
  );
};

export default Project;
