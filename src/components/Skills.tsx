import dots from "../assets/Dots.svg";
import rectangle from "../assets/Rectangle.svg";
import square from "../assets/square.svg";
import block from "../assets/block.svg";
import stroke from "../assets/stroke.svg";

const Skills = () => {
  return (
    <section className="flex flex-col px-6 py-20">
      <section className="flex justify-around items-center w-3/12 pb-10">
        <h1 className="text-2xl">
          <span className="text-primary ">#</span>Skills
        </h1>
        <figure className="pl-4">
          <img src={stroke} alt="line" />
        </figure>
      </section>

      <section className="w-3/12 pr-2 px-5 ">
        <div className="flex flex-col">
          <figure className="flex justify-between pr-10 relative">
            <img src={dots} alt="dots" className="w-11 h-11"/>
            <img src={rectangle} alt="rectangle" className="w-16 h-16 relative bottom-6" />
          </figure>
          <figure className="flex justify-between pt-10 relative">
            <img src={block} alt="block" className="w-20 h-20" />
            <img src={dots} alt="dots" className="w-11 h-11 relative bottom-6"/>
            <img src={square} alt="square" className="w-11 h-11"/>
          </figure>
        </div>
      </section>
    </section>
  );
};

export default Skills;
