import stroke from "../assets/stroke.svg" 

const Guestposts = () => {
  return (
    <section className="flex flex-col px-6">
       <section className="flex justify-start items-center lg:w-5/12 w-72 pb-10">
        <h1 className="text-2xl">
          <span className="text-primary ">#</span>Guest Posts
        </h1>
        <figure className="pl-4">
          <img src={stroke} alt="line"className="w-36" />
        </figure>
      </section>
    </section>
  )
}

export default Guestposts