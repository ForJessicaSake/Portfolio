type Props={
    text:string;
}
const Button = ({text}:Props) => {
  return (
    <button className="mb-4 animate-bounce border border-primary h-10 w-32 hover:bg-black">{text}</button>
  )

}

export default Button