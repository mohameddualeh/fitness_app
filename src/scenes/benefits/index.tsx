import HText from "@/shared/HText";
import { BenefitsType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

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
        {/* graphics and description section*/}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* graphic image */}
          <img
            className="mx-auto"
            src={BenefitsPageGraphic}
            alt="benefits-graphic-page"
          />
          {/* description section */}
          <div>
            {/* tile */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLION OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequuntur quas sunt rem laudantium minus obcaecati explicabo
                totam autem maiores placeat facilis ab ipsum, tempore quo modi
                aliquid laborum temporibus culpa?
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
                neque odit harum, iste sapiente inventore porro repellat
                repudiandae ratione odio fuga illum iure velit aliquam ea
                provident nostrum numquam debitis!
              </p>
            </motion.div>
            {/* button */}
            <div className="relative mt-16">
              <div className="before:absolute before: z-[-1]  before:-bottom-20 before:right-12 before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
