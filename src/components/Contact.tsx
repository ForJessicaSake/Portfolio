import stroke from "../assets/stroke.svg";
import email from "../assets/email.svg";
import { FiTwitter } from "react-icons/fi";
import Button from "../custom/Button";

const Contact = () => {
  return (
    <section className="flex flex-col px-6">
      <section className="flex justify-around items-center lg:w-3/12 w-72 pb-10">
        <h1 className="text-2xl">
          <span className="text-primary ">#</span>Contacts
        </h1>
        <figure className="pl-4">
          <img src={stroke} alt="line" />
        </figure>
      </section>
      <section className="flex lg:flex-row flex-col justify-between text-sm">
        <div className="w-full lg:w-6/12 lg:pb-0 pb-10 text-justify">
          <p>
            I'm currently on the lookout for exciting opportunities, whether
            it's full-time, contract, or freelance work. If you think I could be
            a good fit for a job you have in mind, please don't hesitate to
            reach out to me. I'm open and ready to explore any potential
            opportunities!
          </p>
        </div>
        <div className="w-full lg:w-3/12 leading-10 border px-4 lg:mb-0 mb-5">
          <h3 className="text-white">Message me here</h3>
          <figure className="flex w-64 justify-between items-center">
            <img src={email} alt="email" className ="h-5 w-5"/>
            jessicajoseph2019@yahoo.com
          </figure>
          <figure className="flex w-36 justify-between items-center">
            <FiTwitter className="h-5 w-5"/>
            forJessicasake
          </figure>
        </div>
      </section>
      <form className="flex flex-col lg:w-6/12 w-full">
        <section className="flex lg:flex-row flex-col  justify-between my-4">
            <input placeholder="Name" className="bg-background border h-10 px-2 py-2 lg:w-72 w-full"/>
            <input placeholder="Email" className="bg-background border  h-10 px-2 py-2 lg:mt-0 mt-4 lg:w-64 w-full"/>
        </section>
        <input placeholder="Title" className="bg-background border h-10 px-2 py-2 lg:w-full w-full"/>
        <textarea placeholder="Message" className="bg-background border h-28 flex items-start justify-start px-2 py-2 mb-8 my-5 lg:w-full w-full"></textarea>
        <Button text="Send"/>
      </form>
    </section>
  );
};

export default Contact;
