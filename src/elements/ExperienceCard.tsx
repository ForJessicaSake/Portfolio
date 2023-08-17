
type ExperienceType = {
  image?: any;
  title: string;
  company: string;
  date?: string;
  experience?: string;
  cover?: any;
};

const ExperienceCard = ({
  image,
  title,
  company,
  date,
  experience,
}: ExperienceType) => {
  return (
    <section className="flex leading-10 lg:flex-row flex-col justify-between text-justify">
      <figure className="lg:w-1/12 lg:pb-0 pb-3">
        <img src={image} alt="" className="lg:w-16 lg:h-16 w-20 h-20" />
      </figure>
      <section className="lg:w-11/12 ">
        <h1 className="text-xl font-semibold">{title}</h1>
        <h4 className="text-base font-semibold py-2">{company}</h4>
        {/* <h5 className="text-base pb-3 "></h5> */}
        <p className="leading-6 text-sm lg:w-11/12 ">{experience}</p>
      </section>

    </section>
  );
};

export default ExperienceCard;
