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
import crypto from "../assets/art.png";
import goalTracker from "../assets/goalTracker2.png";

const Project: React.FC = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <section className="flex flex-col px-6 pb-20" id="project">
      <section className="flex justify-start items-center lg:w-5/12 w-72">
        <h1 className="lg:text-2xl text-xl">
          <span className="text-primary ">#</span>Projects
        </h1>

        <figure className="pl-4">
          <img src={stroke} alt="line" className="w-36" />
        </figure>
      </section>
      <p className="lg:w-6/12 w-full md:w-11/12 text-sm text-justify pb-10 pt-5 leading-7">
        <span className="text-primary"> Skill Development</span> is very
        important to me, and I believe the best way to master a skill is by
        building. I've always been a hands-on learner, so I love the challenge
        of taking a concept and turning it into a working product.
        <br />
        <br />
        Over the course of time, while learning and mastering frontend tools and frameworks,
        I've developed a couple of projects to showcase my skills. Here are a
        few:
      </p>
      <section className="grid md:grid-cols-2 grid-col-1 lg:grid-cols-3 gap-6 lg:gap-5 place-items-center w-full text-xs">
        <Card
          image={Empower}
          title="Empower Her Community Website"
          about="I learned the importance of teamwork while building and maintaining the community website as the engineering lead."
          link="https://empower-her-community.vercel.app/"
        />
        <Card
          image={goalTracker}
          title="A Goal Tracker Application"
          about="I mastered Firebase, TypeScript and integrated Paystack on this fullstack goal tracker application that allows you to track your goal progress."
          link="https://progress-pal.vercel.app/"
        />
        <Card
          image="/morent.png"
          title="A Car Rental Application"
          about="Exploring Supabase auth and database, I developed this car rental application that provides an easy way to rent cars at low prices with comfortable facilities."
          link="https://morent-rental.vercel.app/"
        />
        <Card
          image="/Ecommerce.png"
          title="A Grocery Store"
          about="I Mastered Zustand state management library by building this React application that allows you to order groceries easily on the website."
          link="https://ecommerce.brimble.app/"
        />
{/*       <Card
          image="/inno.png"
          title="Innovotio's Website"
          about="Mastering Tailwind, I translated this Figma design into frontend codes. A company website - Innovotio."
          link="https://development-innovotio.vercel.app/"
        /> */}
         <Card
          image={Lamoore}
          title="Lamoore: A Clothing Store"
          about="I mastered the use of Rest APIs and JavaScript array methods on this ecommerce store called Lamoore. It provides fast, seamless, and enjoyable online shopping for all your clothing needs!."
          link="https://lamoore.vercel.app/"
        />
        
         <Card
          image={dockett}
          title="A Sticky Note Application"
          about="My first attempt with Firebase and React. I developed a sticky note application for anyone with a busy schedule!"
          link="https://dockett.vercel.app/"
        />
        {/* <Card
          image={sunnyside}
          title="Sunny Side Agencies"
          about="Matering responsive designs, I jumped on a frontend mentor challenge and developed this responsive and user-friendly site."
          link="https://sunnyside-agencies.vercel.app/"
  /> */}

        {/* <Card
          image={todo}
          title="A Task Productivity App"
          about="During Empower Her Community Pair programming exercise, my team developed a task productivity app that helps you keep track of tasks using React and Firebase."
          link="https://ehc-todoapp.web.app/"
        /> */}

        {/* 
        <Card
          image={crypto}
          title="Crypto Art: A Landing Page"
          about="I recently just heard about AOS and I didn't hesitate to try it out. This Digital marketplace landing page for crypto collectibles and NFTs was developed using Next.js, and AOS library"
          link="https://crypto-art-teal.vercel.app/"
        /> */}
      </section>
    </section>
  );
};

export default Project;
