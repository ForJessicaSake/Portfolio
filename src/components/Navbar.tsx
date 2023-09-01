import Logo from "../assets/Union.svg";
import Menu from "../assets/menu.svg";
import Cancel from "../assets/x.svg";
import { navigation } from "../atoms/Atoms";
import { useAtom } from "jotai/react";

const Navbar: React.FC = () => {
  const [nav, setNav] = useAtom(navigation);

  const navClose = () => {
    setNav(!nav);
  };
  return (
    <nav className="font-font flex bg-black justify-between items-center lg:h-20 h-20 cursor-pointer fixed left-0 w-full 2xl:mx-auto 2xl:container z-20">
      <section className="flex text-white justify-between w-full items-center px-6">
        <div className="flex items-center lg:w-24 w-28 justify-between">
          <img src={Logo} alt="Logo" className="w-6 h-6 lg:w-5 lg:h-5" />
          <figcaption className="font-medium text-lg  lg:text-base">
            Jessica
          </figcaption>
        </div>
        {nav ? (
          <img
            src={Cancel}
            alt="cancel"
            className="w-6 h-6 lg:hidden block mr-4"
            onClick={navClose}
          />
        ) : (
          <img
            src={Menu}
            alt="menu"
            className="w-6 h-6 lg:hidden block mr-4"
            onClick={navClose}
          />
        )}
      </section>
      <ul
        onClick={navClose}
        className={`${
          nav ? "block" : "hidden"
        } px-6 z-50 text-secondary absolute lg:text-sm lg:static lg:flex lg:flex-row lg:h-0 lg:top-0 h-96 top-20 py-8 lg:py-0 bg-black w-full flex flex-col  justify-between`}
      >
        <li>
          <a href="#about" className="active:text-white">
            <span className="text-primary">#</span>About-me
          </a>
        </li>
        <li>
          <a className="active:text-white" href="#skills">
            <span className="text-primary">#</span>Skills
          </a>
        </li>
        {/* <li>
          <a className="active:text-white" href="#experience">
            <span className="text-primary">#</span>experience
          </a>
        </li> */}

        <li>
          <a className="active:text-white" href="#project">
            <span className="text-primary">#</span>Project
          </a>
        </li>
        <li>
          <a className="active:text-white" href="#publications">
            <span className="text-primary">#</span>Publications
          </a>
        </li>
        <li>
          <a className="active:text-white" href="#contact">
            <span className="active:text-primary text-primary">#</span>Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
