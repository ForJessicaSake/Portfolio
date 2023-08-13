import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import dots from "../assets/Dots.svg";
import rectangle from "../assets/Rectangle.svg";
import square from "../assets/square.svg";
import block from "../assets/block.svg";
import stroke from "../assets/stroke.svg";

const Skills: React.FC = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <section className="flex flex-col px-6 py-20 cursor-pointer" id="skills">
      <section className="flex justify-around items-center lg:w-3/12 w-72 pb-10">
        <h1 className="lg:text-2xl text-xl">
          <span className="text-primary ">#</span>Skills
        </h1>
        <figure className="pl-4">
          <img src={stroke} alt="line" />
        </figure>
      </section>

      <section className="px-5 flex flex-col-reverse lg:flex-row justify-between">
        <div className="max-w-sm lg:w-3/12 lg:pb-0 pb-6 flex flex-col pr-2">
          <figure className="flex justify-between pr-10 relative">
            <img src={dots} alt="dots" className="lg:w-11 lg:h-11 w-16 h-16" />
            <img
              src={rectangle}
              alt="rectangle"
              className="w-20 h-20 relative bottom-6"
            />
          </figure>
          <figure className="flex justify-between pt-10 relative">
            <img
              src={block}
              alt="block"
              className="lg:w-20 lg:h-20 w-24 h-24"
            />
            <img
              src={dots}
              alt="dots"
              className="lg:w-11 lg:h-11 w-14 h-14 relative bottom-6 animate-bounce"
            />
            <img
              src={square}
              alt="square"
              className="lg:w-11 lg:h-11 w-14 h-14"
            />
          </figure>
        </div>
        <div className=" grid grid-cols-2 lg:grid-cols-3 gap-4 text-sm w-12/12 lg:w-8/12 lg:pb-0 pb-16">
          
        <table
            className="lg:w-52  w-36"
            data-aos="fade-down"
            data-aos-offset="100"
            data-aos-delay="10"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <tr>
              <th className="border text-start px-4 h-10">Mark up</th>
            </tr>
            <td className="border border-t-0 px-4  py-2 leading-6">
              Html <br /> XML
            </td>
          </table>
          <table
            className="lg:w-52  w-36"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="10"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <tr>
              <th className="border text-start px-4 h-10">Languages</th>
            </tr>
            <td className="border border-t-0 px-4 py-2 leading-6">
              JavaScript TypeScript
            </td>
          </table>
          <table className="lg:w-52  w-36">
            <tr>
              <th className="border text-start px-4 h-10">State Libraies</th>
            </tr>
            <td className="border border-t-0 px-4  py-2 leading-6">
              Jotai <br /> Zustand <br /> React Query
            </td>
          </table>

       
          <table
            className="lg:w-52  w-36"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="10"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <tr>
              <th className="border text-start px-4 h-10">Stylesheet</th>
            </tr>
            <td className="border border-t-0 px-4 py-2 leading-6">
              CSS <br /> Tailwind <br /> Emotion <br /> Styled-Component
            </td>
          </table>

         
          <table className="lg:w-52  w-36">
            <tr>
              <th className="border text-start px-4 h-10">Frameworks</th>
            </tr>
            <td className="border border-t-0 px-4 py-2 leading-6">
              React <br /> Next <br/> React Native
            </td>
          </table>

        
          <table
            className="lg:w-52  w-36"
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-delay="10"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <tr>
              <th className="border text-start px-4">Backend-as-a-service</th>
            </tr>
            <td className="border border-t-0 px-4 py-2 leading-6">
              Firebase <br />
              Supabase
            </td>
          </table>
        </div>
      </section>
    </section>
  );
};

export default Skills;
