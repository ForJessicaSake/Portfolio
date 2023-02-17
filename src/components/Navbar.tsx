import Logo from "../assets/Union.svg";
import Menu from "../assets/menu.svg";
import Cancel from "../assets/x.svg"
import media from "../assets/media.svg"
import { navigation } from "../atoms/Atoms";
import { useAtom } from "jotai/react";
import {Link} from "react-router-dom"

const Navbar: React.FC = () => {
  const [nav, setNav] = useAtom(navigation)

  const navClose =()=>{
    setNav(!nav)
  } 
  return (
    <nav className="flex justify-between items-center h-20 bg-background cursor-pointer">
        {/* <figure>
            <img src={media} alt='icons' className="w-16 h-96"/>
        </figure> */}
      <section className="flex text-white justify-between w-full items-center px-6">
        <figure className="flex items-center lg:w-24 w-28 justify-between">
          <img src={Logo} alt="Logo" className="w-6 h-6 lg:w-5 lg:h-5"/>
          <figcaption className="font-medium text-lg  lg:text-base">Jessica</figcaption>
        </figure>
        { nav ?  <img src={Menu} alt="menu" className="w-6 h-6 lg:hidden block" onClick={navClose} /> : <img src={Cancel} alt="cancel" className="w-6 h-6 lg:hidden block" onClick={navClose} /> }
      </section>
      <ul className={`${nav ? "hidden": "block"} px-6 z-50 text-secondary absolute lg:text-sm lg:static lg:flex lg:flex-row lg:h-0 lg:top-0  top-20 py-8 bg-background w-full h-full flex flex-col  justify-between`}>
        <li>
          <Link to ="/" className="active:text-white">
            <span className="text-primary">#</span>home
          </Link>
        </li>
        <li>
          <a className="active:text-white">
            <span className="text-primary">#</span>about-me
          </a>
        </li>
        <li>
          <a className="active:text-white">
            <span className="text-primary">#</span>skills
          </a>
        </li>
        <li>
          <a className="active:text-white">
            <span className="text-primary">#</span>project
          </a>
        </li>
        <li>
          <a className="active:text-white">
            <span className="text-primary">#</span>publications
          </a>
        </li>
        <li>
          <a className="active:text-white">
            <span className="active:text-primary text-primary">#</span>contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
