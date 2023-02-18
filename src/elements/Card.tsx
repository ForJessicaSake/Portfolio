import Button from "../custom/Button";

type Project = {
  image: any;
  title: string;
  about: string;
};

const Card = ({ image, title, about }: Project) => {
  return (
    <section className="border w-80">
      <img src={image} alt="" />
      <h2 className="font-bold text-justify flex items-center h-14 lg:text-sm text-sm border-t-0 border px-2 py-2">
        {title}
      </h2>
      <p className="h-36 py-2 px-2 text-justify">{about}</p>
    </section>
  );
};

export default Card;
