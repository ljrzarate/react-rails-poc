import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Parallax,
  Mousewheel,
} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/mousewheel";

import worksData from "../../data/works.json";

SwiperCore.use([Navigation, Pagination, Parallax, Mousewheel]);

const ShowcaseClient = ({ setModalIsOpen }) => {
  const [load, setLoad] = React.useState(true);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const navegationSlides = (
    <div className="txt-botm">
      <div
        ref={navigationNextRef}
        className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
      >
        <div>
          <span>Next Slide</span>
        </div>
        <div>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
      <div
        ref={navigationPrevRef}
        className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
      >
        <div>
          <i className="fas fa-chevron-left"></i>
        </div>
        <div>
          <span>Prev Slide</span>
        </div>
      </div>

      <div className="swiper-pagination dots" ref={paginationRef}></div>
    </div>
  );

  React.useEffect(() => {
    removeSlashFromPagination();
    setTimeout(() => {
      setLoad(false);
    });
  }, []);

  return (
    <div className=" modal-backdrop" style={{ background: "#00000073" }}>
      <div className=" modal-dialog modal-dialog-centered">
        <div className=" modal-content">
          <div className=" modal-body">
            <button className="close" onClick={closeModal}>
              X
            </button>
            <header className="slider showcase-full">
              <div className="swiper-container parallax-slider">
                {!load ? (
                  <Swiper
                    speed={1000}
                    mousewheel={true}
                    parallax={true}
                    navigation={{
                      prevEl: navigationPrevRef.current,
                      nextEl: navigationNextRef.current,
                    }}
                    pagination={{
                      clickable: true,
                      el: paginationRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                      swiper.params.navigation.prevEl =
                        navigationPrevRef.current;
                      swiper.params.navigation.nextEl =
                        navigationNextRef.current;
                      swiper.params.pagination.el = paginationRef.current;
                    }}
                    onSwiper={(swiper) => {
                      setTimeout(() => {
                        for (var i = 0; i < swiper.slides.length; i++) {
                          swiper.slides[i].childNodes[0].setAttribute(
                            "data-swiper-parallax",
                            0.75 * swiper.width
                          );
                        }

                        swiper.params.navigation.prevEl =
                          navigationPrevRef.current;
                        swiper.params.navigation.nextEl =
                          navigationNextRef.current;

                        swiper.params.pagination.el = paginationRef.current;

                        swiper.navigation.destroy();
                        swiper.navigation.init();
                        swiper.navigation.update();

                        swiper.pagination.destroy();
                        swiper.pagination.init();
                        swiper.pagination.update();
                      });
                    }}
                    className="swiper-wrapper"
                    slidesPerView={1}
                  >
                    {worksData.map((work) => (
                      <SwiperSlide key={work.id} className="swiper-slide">
                        <div
                          className="bg-img valign"
                          // style={{
                          //   backgroundImage: `url(${work.imageModal})`,
                          // }}
                          style={{
                            backgroundImage: "../../images/clients/1",
                          }}
                          data-overlay-dark="8"
                        >
                          <div className="container">
                            <div className="row">
                              <div className="col-12">
                                <div className="caption">
                                  <div className="col-lg-9">
                                    <h1
                                      className="color-font"
                                      data-swiper-parallax="-2000"
                                    >
                                      {work.secTex}
                                    </h1>
                                    <h6
                                      className="font-italic mb-80 weight700"
                                      data-swiper-parallax="-5000"
                                    >
                                      {work.title}
                                    </h6>
                                    <h4
                                      data-swiper-parallax="-7000"
                                      className="mt-4"
                                    >
                                      <span className="back-color">
                                        Technologies used on this project:
                                      </span>
                                    </h4>
                                    <h5 data-swiper-parallax="-9000">
                                      {work.technologies}
                                    </h5>
                                    <div className="bord"></div>
                                  </div>

                                  <div className="discover col-lg-3">
                                    {/* LINK */}
                                    <a target="_blank" rel="noreferrer">
                                      <span>
                                        Explore <br /> More
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : null}
              </div>

              {navegationSlides}
            </header>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseClient;
