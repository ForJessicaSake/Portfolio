import { Link } from "react-router-dom";
import Button from "../custom/Button";

type Project = {
  image: any;
  title: string;
  about: string;
  link:string;
};

const Card = ({ image, title, about, link}: Project) => {
  return (
  <section className="border w-80 cursor-pointer lg:hover:scale-105">
     <Link to={link}>
      <img src={image} alt="" />
      </Link>
      <h2 className="font-bold text-justify flex items-center h-14 lg:text-sm text-sm border-t-0 border px-2 py-2">
        {title}
      </h2>
      <p className="h-36 py-2 px-2 text-justify ">{about}</p>
    </section>
  );
};

export default Card;
