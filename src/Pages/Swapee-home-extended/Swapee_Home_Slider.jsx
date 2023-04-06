import React from "react";
import "../../Styles/Style.css";
import "../../Styles/Responsive.css";
import blackcolour from "../../Utils/img/Black_colour.jpg";

const SwapeeHomeSlider = () => {
  return (
    <section className="sec_dark_3">
      <div className="container min-w-lg mx-auto sm:px-4 container_xxl sm:px-6 px-3">
        <div className="flex flex-wrap  items-center pt-5 pb-4">
          <div className="xl:w-2/5 pr-4 pl-4 lg:w-1/2 pr-4 pl-4 lg:mb-0">
            <h5 className="fw-bold mb-2 text-white">From the blog</h5>
          </div>
        </div>
      </div>

      {/* <!-- slider --> */}
      <div className="relative">
        <div className="container min-w-lg mx-auto sm:px-4 container_xxl sm:px-6">
          <div className="swiper blogSlider magic_slider px-2 xl:px-0">
            <div className="swiper-wrapper">
              <div className="swiper-slide magic_box">
                <img className="magic_box_image" src={blackcolour} alt="" />
                <div className="p-2">
                  <h6 className="text-white mt-2 lh-base">
                    Experts Say Swapee Might Explode After it Raised $500,000 in
                    24
                  </h6>
                  <p className="uppercase fs_14 magic_box_p txt_purple2 fw_500 mb-0">
                    Chief marketing officer
                  </p>
                </div>
              </div>
              <div className="swiper-slide magic_box">
                <img className="magic_box_image" src={blackcolour} alt="" />
                <div className="p-2">
                  <h6 className="text-white mt-2 lh-base">
                    Experts Say Swapee Might Explode After it Raised $500,000 in
                    24
                  </h6>
                  <p className="uppercase fs_14 magic_box_p txt_purple2 fw_500 mb-0">
                    Chief marketing officer
                  </p>
                </div>
              </div>
              <div className="swiper-slide magic_box">
                <img className="magic_box_image" src={blackcolour} alt="" />
                <div className="p-2">
                  <h6 className="text-white mt-2 lh-base">
                    Experts Say Swapee Might Explode After it Raised $500,000 in
                    24
                  </h6>
                  <p className="uppercase fs_14 magic_box_p txt_purple2 fw_500 mb-0">
                    Chief marketing officer
                  </p>
                </div>
              </div>
              <div className="swiper-slide magic_box">
                <img className="magic_box_image" src={blackcolour} alt="" />
                <div className="p-2">
                  <h6 className="text-white mt-2 lh-base">
                    Experts Say Swapee Might Explode After it Raised $500,000 in
                    24
                  </h6>
                  <p className="uppercase fs_14 magic_box_p txt_purple2 fw_500 mb-0">
                    Chief marketing officer
                  </p>
                </div>
              </div>
              <div className="swiper-slide magic_box">
                <img className="magic_box_image" src={blackcolour} alt="" />
                <div className="p-2">
                  <h6 className="text-white mt-2 lh-base">
                    Experts Say Swapee Might Explode After it Raised $500,000 in
                    24
                  </h6>
                  <p className="uppercase fs_14 magic_box_p txt_purple2 fw_500 mb-0">
                    Chief marketing officer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwapeeHomeSlider;
