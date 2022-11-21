import React from "react";

import UI from "../images/service-icons/ui.svg";
import Web from "../images/service-icons/web.svg";
import Brand from "../images/service-icons/brand.svg";
import Button from "./button";

const Services = () => {
  return (
    <div id="#services">
      <div className="md:container md:mx-auto">
        <div className="lg:py-30 md:py-16 pt-5 pb-12">
          <div className="flex flex-col relative bg-secondary-100 lg:py-0 py-10">
            <div className="absolute lg:block hidden h-16 bg-white bottom-0 left-0 right-0"></div>
            <div className="absolute lg:block hidden h-16 bg-white top-0 left-0 right-0"></div>
            <div className="grid lg:grid-cols-12 grid-cols-1 xl:gap-8 items-center  relative">
              <div className="lg:col-span-5 flex flex-col items-start xl:px-18 lg:px-10 md:px-8 px-5 lg:py-32 md:pb-4 pb-10">
                <h2 className="lg:text-display-lg text-display-md font-semibold pb-4">
                Services
                </h2>
                <p className="text-display-md font-normal text-neutral-600 pb-8">
                Branding, websites and UI+UX
                </p>
                <Button label="Get in touch" link="/" size="lg" />
              </div>
              <div className="lg:col-span-7 flex md:flex-row flex-col lg:gap-8 gap-6 items-center xl:pr-16 lg:pr-10 lg:pl-0 md:px-8 px-5 relative">
                <div className="flex flex-col basis-1/2 lg:gap-8 gap-6 relative">
                  <div className="bg-white p-8 shadow-xl">
                    <img src={Web} alt="web" className="pb-8" />
                    <p className="text-display-xs font-semibold pb-4">
                      Web Design and Development
                    </p>
                    <p className="text-body-md font-normal text-neutral-600">
                      Web design or development. we love tackling digital problems.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col basis-1/2 lg:gap-8 gap-6 relative">
                  <div className="bg-white p-8 shadow-xl">
                    <img src={UI} alt="UI UX" className="pb-8" />
                    <p className="text-display-xs font-semibold pb-4">
                      UI / UX Design
                    </p>
                    <p className="text-body-md font-normal text-neutral-600">
                       Positioning the brand first. I create visual identity
                      across platforms.
                    </p>
                  </div>
                  <div className="bg-white p-8 shadow-xl">
                    <img src={Brand} alt="Branding" className="pb-8" />
                    <p className="text-display-xs font-semibold pb-4">
                      Branding
                    </p>
                    <p className="text-body-md font-normal text-neutral-600">
                    Every interaction you apply to your brand makes you
                    stronger and more priority.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
