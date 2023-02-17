import React from "react";
import Logo from "../assets/Union.svg";
import GitHub from "../assets/Github.svg";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import { SiHashnode } from "react-icons/si";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="flex lg:flex-row flex-col justify-between lg:items-center w-full lg:h-48 h-full cursor-pointer py-2 px-6">
      <nav className="text-sm">
        <section className="flex justify-between items-center w-96">
          <figure className="flex items-center lg:w-24 w-28 justify-between py-3">
            <img src={Logo} alt="Logo" className="w-6 h-6 lg:w-5 lg:h-5" />
            <figcaption className="font-medium text-lg text-white lg:text-base">
              Jessica
            </figcaption>
          </figure>
        </section>
        <p className="py-3">jessicajoseph2019@yahoo.com</p>
        <p>Frontend Engineer and Technical Writer</p>
      </nav>

      <section className="flex flex-col lg:py-0 py-8">
        <h1 className="text-xl text-white">Media</h1>
        <figure className="flex justify-between items-center w-32 py-3">
          <Link to="https://github.com/ForJessicaSake">
            <img src={GitHub} alt="GitHub" className="h-8 w-8" />
          </Link>
          <Link to="https://hashnode.com/@ForJessicasake">
            <SiHashnode className="h-5 w-5" />
          </Link>
          <Link to="https://www.linkedin.com/in/jessica-joseph-/">
            <FiLinkedin className="h-5 w-5" />
          </Link>
          <Link to="https://twitter.com/forJessica_sake">
            <FiTwitter className="h-5 w-5" />
          </Link>
        </figure>
      </section>
    </footer>
  );
};

export default Footer;