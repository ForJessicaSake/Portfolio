import React from "react";
import Logo from "../assets/Union.svg";
import GitHub from "../assets/Github.svg";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import { SiHashnode } from "react-icons/si";
import { Link } from "react-router-dom";
const Footer: React.FC = () => {
  return (
    <footer className="font-font flex lg:flex-row flex-col justify-between lg:items-center w-full lg:h-48 h-full cursor-pointer px-6">
      <nav className="text-sm">
        <section className="flex justify-between items-center w-96">
          <figure className="flex items-center lg:w-24 w-28 justify-between py-3">
            <img src={Logo} alt="Logo" className="w-6 h-6 lg:w-5 lg:h-5" />
            <figcaption className="font-medium text-lg text-white lg:text-base">
              Jessica
            </figcaption>
          </figure>
        </section>
        <div className="text-sm">

        <p className="py-3">jessicajoseph1807@gmail.com</p>
        <p>Frontend Developer and Technical Writer</p>
        </div>
      </nav>

      <section className="flex flex-col lg:py-0 py-8">
        <h1 className="text-xl text-white">Media</h1>
        <figure className="flex justify-between items-center w-32 py-3">
          <Link to="https://github.com/ForJessicaSake" target="_blank">
            <img src={GitHub} alt="GitHub" className="h-8 w-8" />
          </Link>
          <Link to="https://hashnode.com/@ForJessicasake" target="_blank">
            <SiHashnode className="h-5 w-5" />
          </Link>
          <Link to="https://www.linkedin.com/in/jessica-joseph-/" target="_blank">
            <FiLinkedin className="h-5 w-5" />
          </Link>
          <Link to="https://twitter.com/forJessica_sake" target="_blank">
            <FiTwitter className="h-5 w-5" />
          </Link>
        </figure>
      </section>
    </footer>
  );
};

export default Footer;
