import React, { useRef, useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "../Styles/Style.css";
import "../Styles/Responsive.css";

const Priceslider = () => {
  const currencySlideRef = useRef(null);

  useEffect(() => {
    const currencySlide = new Swiper(currencySlideRef.current, {
      slidesPerView: "auto",
      centeredSlides: true,
      loop: true,
      freeMode: true,
      allowTouchMove: false,
      speed: 5000,
      simulateTouch: false,
      autoplay: {
        delay: 0,
      },
    });

    return () => {
      currencySlide.destroy(true, true);
    };
  }, []);

  return (
    <div className="currency_slide currency_slide_dark px-3">
      <div className="swiper" ref={currencySlideRef}>
        <div className="swiper-wrapper">
          <div className="swiper-slide currency_box_s fs_14">
            <p className="mb-0 fw_600 me-3">
              BTC / USD <span className="fw-normal">$23,380.50</span>
            </p>
          </div>
          <div className="swiper-slide currency_box_s fs_14">
            <p className="mb-0 fw_600 me-3">
              BTC / USD <span className="fw-normal">$23,380.50</span>
            </p>
          </div>
          <div className="swiper-slide currency_box_s fs_14">
            <p className="mb-0 fw_600 me-3">
              BTC / USD <span className="fw-normal">$23,380.50</span>
            </p>
          </div>
          <div className="swiper-slide currency_box_s fs_14">
            <p className="mb-0 fw_600 me-3">
              BTC / USD <span className="fw-normal">$23,380.50</span>
            </p>
          </div>
          <div className="swiper-slide currency_box_s fs_14">
            <p className="mb-0 fw_600 me-3">
              BTC / USD <span className="fw-normal">$23,380.50</span>
            </p>
          </div>
          <div className="swiper-slide currency_box_s fs_14">
            <p className="mb-0 fw_600 me-3">
              BTC / USD <span className="fw-normal">$23,380.50</span>
            </p>
          </div>
          <div className="swiper-slide currency_box_s fs_14">
            <p className="mb-0 fw_600 me-3">
              BTC / USD <span className="fw-normal">$23,380.50</span>
            </p>
          </div>
          <div className="swiper-slide currency_box_s fs_14">
            <p className="mb-0 fw_600 me-3">
              BTC / USD <span className="fw-normal">$23,380.50</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Priceslider;
