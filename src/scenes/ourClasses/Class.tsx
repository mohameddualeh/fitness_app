import { li } from "framer-motion/client";

type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className="before: absolute">
        <p></p>
        <p></p>
      </div>
      <img src="{image}" alt="" />
    </li>
  );
};

export default Class;
