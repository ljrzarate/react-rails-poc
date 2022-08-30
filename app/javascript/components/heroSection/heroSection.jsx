import React from "react";
import Particles from "react-particles";
import Split from "../split";
import particlesBlackConfig from "../../config/pr-s-black";
import particlesConfig from "../../config/particle-config";

export const TitleAction = () => {
  return (
    <section className="call-action section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="content sm-mb30">
            <Split>
              <h6 className="wow words chars splitting" data-splitting>
                Hey you!
              </h6>
              <h2 className="wow words chars splitting" data-splitting>
                {`Let's build`} <br /> together <br />{" "}
                <b className="back-color">your next project</b>.
              </h2>
            </Split>
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroSection = ({ sliderRef, blackStar }) => {
  React.useEffect(() => {
    console.clear();
  });

  return (
    <>
      <header ref={sliderRef} className="particles circle-bg valign">
        <div className="container mt-80">
          <div className="row">
            <div className="col-lg-12">
              <div className="cont text-center">
                <TitleAction />
                <a className="nb butn light curve char mb-sm-5">
                  Talk to Our Sales Team
                </a>
              </div>
            </div>
          </div>
        </div>

        <Particles
          id="particles-js"
          options={blackStar ? particlesBlackConfig : particlesConfig}
        />

        <div className="gradient-circle"></div>
        <div className="gradient-circle two"></div>
        <div className="line bottom left"></div>
      </header>
    </>
  );
};

export default HeroSection;
