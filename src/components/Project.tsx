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
import crypto from "../assets/art.png";
import goalTracker from "../assets/goalTracker2.png";
import Morent from "../assets/morent.png";

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
          about="A redesign of our community website using frontend technologies such as NextJs and NodeJs. I thoroughly enjoyed managing and maintaining this project as the engineering lead."
          link="https://empower-her-community.vercel.app/"
        />
        <Card
          image={goalTracker}
          title="A goal Tracker Application"
          about="I Mastered Firebase and TypeScript while building this fullstack goal tracker application that allows you to track your goal progress. Well, it has everything you need if you are lookin to track your long/short term goals."
          link="https://progress-pal.vercel.app/"
        />
        <Card
          image={Morent}
          title="The Best Platform for Car Rental"
          about="Exploring Supabase auth and database, I developed this car rental application that provides an easy way to rent a car at low prices with comfortable facilities."
          link="https://morent-rental.vercel.app/"
        />

        <Card
          image="/Ecommerce.png"
          title="Ecommerce: Fasco Grocery Store"
          about="I Mastered Zustand state management library by building this React application that allows you to order groceries easily on the website."
          link="https://ecommerce.brimble.app/"
        />

        <Card
          image={bookmark}
          title="Bookmark: Landing Page"
          about="I challenged myself with a Frontend Mentor project to master Tailwind CSS and improve my responsive web design skills. The result is visually appealing and fully responsive on various devices."
          link="https://bookmark-landing-page-self.vercel.app/"
        />
          {/* <Card
          image={inno}
          title="Innovotio"
          about="By translating Figma designs to frontend codes, I developed this company site - Innovotio. A tech organization that provides qualified tech talents to hiring organizations and curate branded merchandise."
          link="https://innovotio-website.vercel.app/"
        /> */}
        {/* <Card
          image={sunnyside}
          title="Sunny Side Agencies"
          about="I Tried out Jotai on this responsive and user-friendly site.  This project showcases my skills in using TypeScript for type checking and Jotai for managing client states"
          link="https://sunnyside-agencies.vercel.app/"
        /> */}

        <Card
          image={dockett}
          title="Sticky Note Application"
          about="My first attempt with Firebase and React - Introducing Dockett, the ultimate note taking app for anyone with a busy schedule! With Dockett, you can take down short notes quickly and easily, helping you stay organized at all times "
          link="https://dockett.vercel.app/"
        />

        {/* <Card
          image={Lamoore}
          title="Lamoore: An Ecommerce Webiste"
          about="Welcome to Lamoore, your go-to destination for fast, seamless, and enjoyable online shopping for all your clothing needs! We've built an amazing ecommerce website using the latest web technologies, including React, AOS library, and JSON API, to provide you with the best possible shopping experience."
          link="https://lamoore.vercel.app/"
        /> */}

        {/* <Card
          image={crypto}
          title="Crypto Art: A Landing Page"
          about="Digital marketplace landing page for crypto collectibles and NFTs. Buy, sell, and discover exclusive digital assets today. Developed using Next.js, AOS animation and TailwindCSS"
          link="https://crypto-art-teal.vercel.app/"
        /> */}
      </section>
    </section>
  );
};

export default Project;
