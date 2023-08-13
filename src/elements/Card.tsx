import { Link } from "react-router-dom";
import Button from "../custom/Button";

type Project = {
  image: any;
  title: string;
  about: string;
  link: string;
};

const Card = ({ image, title, about, link }: Project) => {
  return (
    <section className="border w-80 cursor-pointer pb-3">
      <img src={image} alt="" />
      <h2 className="font-bold text-justify flex items-center h-16 lg:text-sm text-sm border-t-0 border px-2 py-2">
        {title}
      </h2>
      <p className="h-24 py-2 px-2 text-justify ">{about}</p>
      <Link to={link} target="blank" className="px-2">
        <button className="p-2 border-primary border hover:bg-background w-fit ">View Project</button>
      </Link>
    </section>
  );
};

export default Card;
