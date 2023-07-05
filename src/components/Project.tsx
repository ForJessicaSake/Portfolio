import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import stroke from "../assets/stroke.svg";
import Card from "../elements/Card";
import dockett from "../assets/dockett.png";
import bookmark from "../assets/bookmark.png";
import sunnyside from "../assets/sunnyside.png";
import Empower from "../assets/Empower.png";
import Lamoore from "../assets/Lamoore.png";
import inno from "../assets/inno.png";
import skdll from "../assets/Skdall.png";

const Project: React.FC = () => {
  useEffect(() => {
    AOS.init();
  });
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
      <section className="grid md:grid-cols-2 grid-col-1 lg:grid-cols-3 gap-6 lg:gap-5 place-items-center w-full text-xs">
        <Card
          image={Empower}
          title="Empower Her Community"
          about="A redesign of our community website using frontend technologies such as NextJs, Markdown, AOS, and Tailwind. I thoroughly enjoyed working on the project with the engineering team."
          link="https://empower-her-community.vercel.app/"
        />

        <Card
          image={inno}
          title="Innovotio"
          about="Innovotio is a tech business support organization that specializes in connecting tech talent across all levels of experience to organizations of all sizes to achieve their business goals. This projecy was developed using NextJs, Tailwind CSS, Firebase and Toastify."
          link="https://innovotio-website.vercel.app/"
        />
        <Card
          image={dockett}
          title="Sticky Note Web Application"
          about="Introducing Dockett, the ultimate note-taking app for anyone with a busy schedule! With Dockett, you can take down short notes quickly and easily, helping you stay organized and on top of your tasks at all times. Dockett was built using React, Firebase, Tailwind and Toastify."
          link="https://dockett.vercel.app/"
        />
        <Card
          image={bookmark}
          title="Bookmark: A Frontend Mentor Intermediate Challenge Project"
          about="I was putting my skills to the test on responsiveness, and I took up this frontend mentor project. I built this using Tailwind, TypeScript and React. I was able to type check props, hooks, and create a bunch of reusable components in my very first attempt."
          link="https://bookmark-landing-page-self.vercel.app/"
        />

        {/* <Card
          image={skdll}
          title="Sunny Side Agencies; A Frontend Mentor Junior Challenge Project"
          about="Tried out Jotai on this responsive and user-friendly site. It was developed using frontend technologies like TypeScript, React, and Tailwind. This project showcases my skills in using TypeScript for type checking, Jotai for managing client states and tailwind for the design."
          link="https://sunnyside-agencies.vercel.app/"
        /> */}
        <Card
          image={sunnyside}
          title="Sunny Side Agencies; A Frontend Mentor Junior Challenge Project"
          about="Tried out Jotai on this responsive and user-friendly site. It was developed using frontend technologies like TypeScript, React, and Tailwind. This project showcases my skills in using TypeScript for type checking, Jotai for managing client states and tailwind for the design."
          link="https://sunnyside-agencies.vercel.app/"
        />

        <Card
          image={Lamoore}
          title="Lamoore: An Ecommerce Webiste"
          about="Welcome to Lamoore, your go-to destination for fast, seamless, and enjoyable online shopping for all your clothing needs! We've built an amazing ecommerce website using the latest web technologies, including React, AOS library, and JSON API, to provide you with the best possible shopping experience."
          link="https://lamoore.vercel.app/"
        />
      </section>
    </section>
  );
};

export default Project;
