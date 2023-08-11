import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import stroke from "../assets/stroke.svg";
import Card from "../elements/Card";
import dockett from "../assets/dockett.png";
import bookmark from "../assets/bookmark.png";
import sunnyside from "../assets/sunnyside.png";
import todo from "../assets/todo.png";
import Empower from "../assets/Empower.png";
import Lamoore from "../assets/Lamoore.png";
import inno from "../assets/inno.png";
import crypto from "../assets/art.png";
import goalTracker from "../assets/goalTracker2.png";

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
          about="A redesign of our community website using web technologies such as NextJs and NodeJs. I mastered Next while building and maintaining this project as the engineering lead."
          link="https://empower-her-community.vercel.app/"
        />
        <Card
          image={goalTracker}
          title="A goal Tracker Application"
          about="I Mastered Firebase and TypeScript while building this fullstack goal tracker application that allows you to track your goal progress. Well, it has everything you need if you are looking to track your long/short term goals."
          link="https://progress-pal.vercel.app/"
        />
        <Card
          image="/morent.png"
          title="The Best Platform for Car Rental"
          about="Exploring Supabase auth and database, I developed this car rental application that provides an easy way to rent a car at low prices with comfortable facilities."
          link="https://morent-rental.vercel.app/"
        />
           <Card
          image="/Ecommerce.png"
          title="Fasco Grocery Store"
          about="I Mastered Zustand state management library by building this React application that allows you to order groceries easily on the website."
          link="https://ecommerce.brimble.app/"
        />
        {/* <Card
          image={Lamoore}
          title="Lamoore: An Ecommerce Webiste"
          about="I mastered the use of Web APIs and React on this ecommerce store called Lamoore. It provides fast, seamless, and enjoyable online shopping for all your clothing needs!."
          link="https://lamoore.vercel.app/"
        /> */}
          <Card
          image={sunnyside}
          title="Sunny Side Agencies"
          about="Matering responsive designs, I jumped on a frontend mentor challenge and developed this responsive and user-friendly site."
          link="https://sunnyside-agencies.vercel.app/"
  />
                <Card
          image={dockett}
          title="Sticky Note Application"
          about="My first attempt with Firebase and React - Introducing Dockett, the ultimate note taking app for anyone with a busy schedule! With Dockett, you can take down short notes quickly and easily, helping you stay organized at all times "
          link="https://dockett.vercel.app/"
        />
     

        {/* <Card
          image={todo}
          title="A Task Productivity App"
          about="During Empower Her Community Pair programming exercise, my team of frontend developers developed a task productivity app that helps you keep track of daily tasks using React and Firebase."
          link="https://ehc-todoapp.web.app/"
        /> */}


      

        {/* 
        <Card
          image={crypto}
          title="Crypto Art: A Landing Page"
          about="I recently just heard about AOS and I didn't hesitate to try it out. This Digital marketplace landing page for crypto collectibles and NFTs was developed using Next.js, and AOS library"
          link="https://crypto-art-teal.vercel.app/"
        /> */}

        {/* <Card
          image={inno}
          title="Innovotio"
          about="By translating Figma designs to frontend codes, I developed this company site - Innovotio. A tech organization that provides qualified tech talents to hiring organizations and curate branded merchandise."
          link="https://innovotio-website.vercel.app/"
        /> */}
      </section>
    </section>
  );
};

export default Project;
