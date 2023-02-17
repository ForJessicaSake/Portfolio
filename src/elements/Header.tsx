import Button from "../custom/Button";
import block from "../assets/block.svg";
import avartar from "../assets/header.png"
import dots from "../assets/Dots.svg"
const Header = () => {
  return (
    <header className="flex lg:flex-row flex-col lg:items-center justify-between py-16 px-6">
      <figcaption className="lg:w-6/12 w-full">
        <h1 className="lg:text-3xl text-2xl font-semibold">Hi, I'm Jessica – a <span className="text-primary">Frontend Engineer</span> and <span className="text-primary">Technical Writer</span></h1>
        <p className="py-6 text-sm text-justify">
          I'm currently developing interactive web applications using the latest
          web technologies. In my spare time, I enjoy exploring the world of
          JavaScript and Backend-as-a-Service to create cool applications, and I
          frequently publish a variety of technical informative
          articles while exploring as a guest writer or on my hashnode blog.
        </p>
        <Button text="contact me!!" />
      </figcaption>
      <figure className="lg:w-4/12 w-full lg:pt-0 py-16 flex justify-between lg:items-center lg:px-8 relative">
        <img src={block} alt="block" />
        <img src={avartar} alt="" className="lg:w-48 w-44 absolute lg:left-40 left-36 bottom-6 lg:bottom-0" />
        <img src={dots} alt="dots" className="relative lg:top-20 lg:left-4 right-10 top-28 h-14 w-14"/>
      </figure>
    </header>
  );
};

export default Header;
