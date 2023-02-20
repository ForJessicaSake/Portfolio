import stroke from "../assets/stroke.svg";
import email from "../assets/email.svg";
import { FiTwitter } from "react-icons/fi";
import Button from "../custom/Button";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useAtom } from "jotai";
import { mail } from "../atoms/Atoms";
import { useRef } from "react";

const Contact = () => {
  const [toMail, setToMail] = useAtom(mail);

  const submit = useRef<any>();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    prompt("sent")
    if (toMail.name !== "" && toMail.email !== "" && toMail.message !== "") {
      emailjs.sendForm('service_or1toa8', 'template_8w0a1ed', submit.current, 'VzAh-kzQKj2SeXc8v')
    }
    else(
      prompt("invalid details")
    )
  }

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
        <section className="flex lg:flex-row flex-col justify-between text-sm">
          <div className="w-full lg:w-6/12 lg:pb-0 pb-6 text-justify mt-4">
            <p className="leading-6">
              I'm on the lookout for some new opportunities to flex my skills
              and expertise. If you're in need of a go-getter who's not afraid
              to roll up their sleeves and tackle any challenge, feel free to
              shoot me a message. I'm game!
            </p>
          </div>
          <div className="w-full lg:w-3/12 leading-10 border px-4 lg:mb-0 mb-5 mt-4">
            <h3 className="text-white">Message me here</h3>
            <figure className="flex w-64 justify-between items-center">
              <img src={email} alt="email" className="h-5 w-5" />
              jessicajoseph2019@yahoo.com
            </figure>
            <figure>
              <Link
                to="https://twitter.com/forJessica_sake"
                className="flex w-36 justify-between items-center"
              >
                <FiTwitter className="h-5 w-5" />
                forJessicasake
              </Link>
            </figure>
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
              className="bg-background border h-10 px-2 py-2 lg:w-72 w-full"
              value={toMail.name}
              onChange={(e) => setToMail({ ...toMail, name: e.target.value })}
            />

            <input
              placeholder="Email"
              className="bg-background border  h-10 px-2 py-2 lg:mt-0 mt-4 lg:w-64 w-full"
              value={toMail.email}
              onChange={(e) => setToMail({ ...toMail, email: e.target.value })}
            />
          </section>
          {/* <input
          placeholder="Title"
          className="bg-background border h-10 px-2 py-2 lg:w-full w-full"
        /> */}
          <textarea
            placeholder="Message"
            className="bg-background border h-28 flex items-start justify-start px-2 mb-6 my-5 lg:w-full w-full"
            value={toMail.message}
            onChange={(e) => setToMail({ ...toMail, message: e.target.value })}
          ></textarea>
          <Button text="Send" />
        </form>
      </section>
    )
  }

export default Contact;
