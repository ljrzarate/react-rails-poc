import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
// import worksData from "../../data/works.json";
import ShowcaseClient from "../showcaseClient/showcaseClient";
// import images from "../images/images";
import nanasqa from "../../../assets/images/nanasqa_show1_ljrz.jpg";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Works = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const NavegationWorks = () => {
    return (
      <>
        <div
          ref={navigationNextRef}
          className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
        >
          <i className="ion-ios-arrow-right"></i>
        </div>
        <div
          ref={navigationPrevRef}
          className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
        >
          <i className="ion-ios-arrow-left"></i>
        </div>
      </>
    );
  };

  const ContentWorksData = () => {
    const imageSource =
      "<%= ApplicationController.helpers.asset_path('nanasqa_show1_ljrz.jpg') %>";
    // const imageSource =
    //   "<%= ApplicationController.helpers.asset_path('nanasqa_show1.jpg') %>";
    // const imageSource =
    //   "<%= ApplicationController.helpers.asset_path({images.nattylense}) %>";
    // const imageSource =
    // "<%= asset_path('../../../assets/images/nanasqa_show1_ljrz.jpg')";
    return (
      <Swiper
        className="swiper-wrapper"
        slidesPerView={2}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;

            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        speed={1000}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          767: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: false,
          },
          991: {
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide className="swiper-slide" onClick={openModal} key={1}>
          <div className="content">
            <div className="img">
              <span className="imgio">
                <span className="wow cimgio" data-delay="500"></span>
                <img
                  src={imageSource}
                  alt="Image of landing page of the project."
                />
              </span>
            </div>

            <div className="cont">
              <h6>Photography services</h6>
              <h4>Nattylense</h4>
            </div>
          </div>
        </SwiperSlide>
        {/* {worksData.map((work, index) => (
          <SwiperSlide className="swiper-slide" onClick={openModal} key={index}>
            <div className="content">
              <div className="img">
                <span className="imgio">
                  <span className="wow cimgio" data-delay="500"></span>
                  <img src={work.image} alt={work.alt} />
                </span>
              </div>

              <div className="cont">
                <h6>{work.title}</h6>
                <h4>{work.secTex}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))} */}
      </Swiper>
    );
  };

  const HeaderWorks = () => {
    return (
      <div className="container" id="OurProjects">
        <div className="row">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Clients Projects
              </h6>
              <h3 className="wow color-font">
                Our Recent Web Sites &amp; <br /> Some Past Projects.
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const BodyWorks = () => {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 no-padding">
            <div className="swiper-container">
              <ContentWorksData />

              <NavegationWorks />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="projects">
      {modalIsOpen ? <ShowcaseClient setModalIsOpen={setModalIsOpen} /> : null}
      <section className="work-carousel2 metro section-padding">
        <HeaderWorks />
        <BodyWorks />
      </section>
    </div>
  );
};

export default Works;
