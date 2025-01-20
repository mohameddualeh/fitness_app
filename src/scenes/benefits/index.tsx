import HText from "@/shared/HText";
import { BenefitsType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import Benefit from "@/scenes/benefits";

const benefits: Array<BenefitsType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tenetur exercitationem quos, eos temporibus illum consequuntur sapiente neque et, ipsa minima ratione facilis quas soluta recusandae praesentium itaque nostrum aliquid.",
  },
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tenetur exercitationem quos, eos temporibus illum consequuntur sapiente neque et, ipsa minima ratione facilis quas soluta recusandae praesentium itaque nostrum aliquid.",
  },
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tenetur exercitationem quos, eos temporibus illum consequuntur sapiente neque et, ipsa minima ratione facilis quas soluta recusandae praesentium itaque nostrum aliquid.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* header */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM.</HText>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            repudiandae deleniti earum tenetur odio ad ducimus aperiam eius iste
            excepturi. Accusamus fuga facere et dignissimos delectus excepturi
            ut distinctio ullam?
          </p>
        </motion.div>
        {/* benefits */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {/* array of benefit cards called benefits using map function */}
          {benefits.map((benefit: BenefitsType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Benefits;
