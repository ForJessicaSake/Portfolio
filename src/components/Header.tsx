import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Button from "../custom/Button";
import block from "../assets/block.svg";
import avartar from "../assets/header2.png";
import dots from "../assets/Dots.svg";
import GitHub from "../assets/Github.svg";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import { SiHashnode } from "react-icons/si";

const Header: React.FC = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <header
      className="flex lg:flex-row flex-col lg:items-center justify-between lg:pt-36 pt-28 px-6"
      id="about"
    >
      <figcaption className="lg:w-6/12 w-full md:w-11/12">
        <h1
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          className="lg:text-4xl text-3xl font-semibold"
        >
          Hello 👋🏼
          <br />
        </h1>
        <p className="py-6 text-sm text-justify leading-7">
          I am <span className="text-primary"> Jessica,</span> a detail-oriented{" "}
          <span className="text-primary font-medium">Frontend Developer </span>{" "} at
          <span className="text-primary font-medium"> Brimble </span>   who loves building quality applications using JavaScript and its
          frameworks. I started my journey in 2021, after attending my first
          tech event with <span className="text-primary"> SheCodeAfrica</span>,
          a community I joined while studying computer science at the University
          of Nigeria.
          <br />
          <br />
          Since graduation, I've put my skills to the test and gained hands-on
          Frontend work experience by contributing to a couple of private and
          public projects. I also frquently publish a variety of articles about
          my experiences as a{" "}
          <span className="text-primary font-medium"> Technical Writer</span> or
          on my hashnode blog and when I'm not doing any of these things, you'd
          find me with my chess board.
        </p>
        <a href="#contact">
          <Button text="contact me!" />
        </a>
        <figure className="flex justify-between items-center w-40 py-1">
          <Link to="https://github.com/ForJessicaSake">
            <img src={GitHub} alt="GitHub" className="h-10 w-10" />
          </Link>
          <Link to="https://hashnode.com/@ForJessicasake">
            <SiHashnode className="h-6 w-6" />
          </Link>
          <Link to="https://www.linkedin.com/in/jessica-joseph-/">
            <FiLinkedin className="h-6 w-6" />
          </Link>
          <Link to="https://twitter.com/forJessica_sake">
            <FiTwitter className="h-6 w-6" />
          </Link>
        </figure>
      </figcaption>
      <figure className="lg:w-4/12 w-full lg:pt-0 py-16 flex justify-between lg:items-center lg:px-8 relative">
        <img src={block} alt="block" />
        <img
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          src={avartar}
          alt=""
          className="lg:w-48 w-44 absolute lg:left-40 left-36 bottom-6 lg:bottom-0"
        />
        <img
          src={dots}
          alt="dots"
          className="relative lg:top-20 lg:left-4 right-10 md:hidden top-28 h-14 w-14"
        />
      </figure>
    </header>
  );
};

export default Header;
