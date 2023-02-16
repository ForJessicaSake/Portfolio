import Button from "../custom/Button";
import block from "../assets/block.svg";
const Header = () => {
  return (
    <header className="flex justify-between py-16 px-6">
      <figcaption className="w-6/12">
        <h1 className="text-3xl font-semibold">Hi, I'm Jessica – a <span className="text-primary">Frontend Engineer</span> and <span className="text-primary">Technical Writer</span></h1>
        <p className="py-6 text-sm">
          I'm currently developing interactive web applications using the latest
          web technologies. In my spare time, I enjoy exploring the world of
          JavaScript and Backend-as-a-Service to create cool applications, and I
          frequently publish a variety of technical informative
          articles while exploring as a guest writer or on my hashnode blog.
        </p>
        <Button text="contact me!!" />
      </figcaption>
      <figure className="w-5/12">
        <img src={block} alt="" />
      </figure>
    </header>
  );
};

export default Header;
