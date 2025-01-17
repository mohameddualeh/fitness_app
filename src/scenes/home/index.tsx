import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import HomePageText from "@/assets/HomePageText.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  selectedPage: SelectedPage;
};

const Home = ({ setSelectedPage, selectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="bg-gray-20 gap-16 py-10 md:h-full md:pb-0">
      {/* Image and main header */}
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        {/* main header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* headings */}
          <div className="md:-mt-20">
            <div className="relative">
              {/* use before, and relative in parent div to put item relative to another item */}
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="homepage_text" />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              maiores iusto optio ad asperiores repellendus quasi deleniti,
              voluptatum quas debitis animi delectus voluptas quod quae!
              Cupiditate amet dignissimos maxime ut.
            </p>
          </div>
          {/* actions */}
          <div className="mt-8 flex items-center gap-8">
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>
        {/* image */}
        <div>
          <img src={HomePageGraphic} alt="HomePage Graphic"></img>
        </div>
      </div>
      {/* Sponsor images */}
      {isAboveMediumScreens && (
        <div>
          <div>
            <div>
              <img alt="RedBull Sponsor" src={SponsorRedBull}></img>
              <img alt="Forbes Sponsor" src={SponsorForbes}></img>
              <img alt="Fortune Sponsor" src={SponsorFortune}></img>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
