import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import stroke from "../assets/stroke.svg";
import email from "../assets/email.svg";
import { FiTwitter } from "react-icons/fi";
import Button from "../custom/Button";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useAtom } from "jotai";
import { mail } from "../atoms/Atoms";
import { useRef } from "react";
import { toast } from "react-toastify";

const Contact: React.FC = () => {
  const [toMail, setToMail] = useAtom (mail);
  const submit = useRef<HTMLFormElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      submit.current &&
      toMail.name !== "" &&
      toMail.email !== "" &&
      toMail.message !== ""
    ) {
      emailjs.sendForm(
        "service_or1toa8",
        "template_8w0a1ed",
        submit.current,
        "VzAh-kzQKj2SeXc8v"
      );
      toast("mail sent successfully");
    } else {
      toast("invalid details, please try again.");
    }
  };

  useEffect(() => {
    AOS.init();
  });

  return (
    <section className="flex flex-col px-6 pb-10" id="contact">
      <section className="flex justify-around items-center lg:w-3/12 w-72">
        <h1 className="lg:text-2xl text-xl">
          <span className="text-primary ">#</span>Contact
        </h1>
        <figure className="pl-4">
          <img src={stroke} alt="line" />
        </figure>
      </section>
      <section className="flex lg:flex-row flex-col justify-between text-base">
        <div className="w-full lg:w-6/12 lg:pb-0 pb-6 text-sm leading-7 text-justify mt-4">
          <p>
           I'm on the lookout for some new opportunities to flex my skills and
            expertise. If you're in need of a go-getter who's not afraid to roll
            up their sleeves and tackle any challenge, feel free to shoot me a
            message. I'm game!
          </p>
        </div>
        <div className="w-full lg:w-3/12 leading-10 border px-4 lg:mb-0 mb-5 mt-4 text-sm">
          <h3 className="text-white text-base py-2">Message me here</h3>
          <a className="flex w-64 justify-between items-center" href="mailto:jessicajoseph1807@gmail.com">
            <img src={email} alt="email" className="h-5 w-5" />
            jessicajoseph1807@gmail.com
          </a>
          <div>
            <Link
              to="https://twitter.com/forJessica_sake"
              className="flex w-36 justify-between items-center"
            >
              <FiTwitter className="h-5 w-5" />
              forJessicasake
            </Link>
          </div>
        </div>
      </section>
      <form
        className="flex flex-col lg:w-6/12 w-full"
        onSubmit={handleSubmit}
        ref={submit}
      >
        <section className="flex lg:flex-row flex-col  justify-between my-3">
          <input
            placeholder="Name"
            className="bg-black border h-10 px-2 py-2 lg:w-72 w-full"
            value={toMail.name}
            name="from_name"
            required
            onChange={(e) => setToMail({ ...toMail, name: e.target.value })}
          />

          <input
            placeholder="Email"
            className="bg-black border  h-10 px-2 py-2 lg:mt-0 mt-4 lg:w-64 w-full"
            value={toMail.email}
            name="from_email"
            type="email"
            required
            onChange={(e) => setToMail({ ...toMail, email: e.target.value })}
          />
        </section>
        <input
          placeholder="Title"
          name="from_title"
          value={toMail.title}
          className="bg-black border h-10 px-2 py-2 lg:w-full w-full"
          onChange={(e) => setToMail({ ...toMail, title: e.target.value })}
        />
        <textarea
          placeholder="Message"
          className="bg-black border h-28 flex items-start justify-start px-2 mb-6 my-5 lg:w-full w-full"
          value={toMail.message}
          name="message"
          required
          onChange={(e) => setToMail({ ...toMail, message: e.target.value })}
        ></textarea>
        <Button text="Send" />
      </form>
    </section>
  );
};

export default Contact;
