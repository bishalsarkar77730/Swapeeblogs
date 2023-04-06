import React from "react";
import "../../Styles/Style.css";
import "../../Styles/Responsive.css";
import swapeegrid2 from "../../Utils/img/swapee-grid-2.png";
import swapeegrid1 from "../../Utils/img/swapee-grid-1.png";
import swapeegrid3 from "../../Utils/img/swapee-grid-3.png";
import Swapeelogowhite from "../../Utils/img/swapee-logo-white_homepagedark.png";

const SwapeeHomeSection2 = () => {
  return (
    <>
      <section className="sec_light_2 sec_dark_2">
        <div className="container min-w-lg mx-auto sm:px-4 container_xxl sm:px-6 px-3">
          <div className="row_light_2">
            <div className="row_ligth_2_left">
              <h2 className="fw_800 txt_white mb-4">
                Does DeFi need to be complicated?
              </h2>
              <p className="mb-3 txt_light_secondary">
                Swapee believes DeFi is for users not bots. Our profit-sharing
                tokenomics ensure Swapee will work for all.
              </p>
              <p className="mb-5 txt_light_secondary">
                Swapee will give you the peace of mind to get away from your
                screen, leaving our stop loss and market order tools to do the
                work for you. The market may never sleep, but you can!
              </p>
              <a href="a" className="btn_gradient uppercase fs_14 me-3">
                <span>Get Started</span>
              </a>
              <a href="a" className="btn_link_white uppercase fs_14">
                Learn More{" "}
                <i className="fas fa-long-arrow-alt-right i_align_fix fs-6 ms-1"></i>
              </a>
            </div>
            <div className="row_ligth_2_right xl:pt-0 pt-5">
              {/* <!-- left --> */}
              <div className="ligth_2_white_boxes">
                <div className="ligth_2_white_box">
                  <div className="ligth_2_white_box_inner ligth_2_dark_box_inner">
                    <img className="my-2" src={swapeegrid2} alt="icon" />
                    <h5 className="txt_white fw_800">Designed Convenience</h5>
                    <p className="txt_light_secondary fw_300 mb-0 pb-3 text-center">
                      Swapee puts you at the heart of the protocol, delivering a
                      human-focused experience through a simple and smooth UI.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- right --> */}
              <div className="ligth_2_white_boxes">
                <div className="ligth_2_white_box">
                  <div className="ligth_2_white_box_inner ligth_2_dark_box_inner ligth_2_white_box_inner_1">
                    <img className="my-2" src={swapeegrid1} alt="icon" />
                    <h5 className="txt_white fw_800">
                      Speed and Affordability
                    </h5>
                    <p className="txt_light_secondary fw_300 mb-0 pb-3 text-center">
                      Polygon, Ethereum’s leading scaling solution, will give
                      Swapee’s users speed, security, and affordability right
                      out of the box.
                    </p>
                  </div>
                </div>
                <div className="ligth_2_white_box">
                  <div className="ligth_2_white_box_inner ligth_2_dark_box_inner ligth_2_white_box_inner_1">
                    <img className="my-2" src={swapeegrid3} alt="icon" />
                    <h5 className="txt_white fw_800">Safe and Secure</h5>
                    <p className="txt_light_secondary fw_300 mb-0 pb-3 text-center">
                      Security is king! Swapee will work with the best auditors
                      in blockchain to ensure you have peace-of-mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home_dark_bg_token_sale">
        <div className="container min-w-lg mx-auto sm:px-4 container_xxl sm:px-6 px-3">
          <div className="swapee_token_sale_block">
            <div className="swapee_token_sblock_inner">
              <div className="flex flex-wrap  items-center">
                <div className="lg:w-1/3 pr-4 pl-4 w-full lg:mb-0 mb-4">
                  <div className="text-lg-start text-center">
                    <a
                      href="a"
                      className="btn_dark_normal_2 uppercase fs_14 me-3"
                    >
                      <span>learn more</span>
                    </a>
                  </div>
                </div>
                <div className="lg:w-1/4 pr-4 pl-4 w-full lg:mb-0 mb-4">
                  <div className="text-center lg:w-full pr-4 pl-4 w-2/3 mx-auto">
                    <img src={Swapeelogowhite} className="w-full" alt="" />
                  </div>
                </div>
                <div className="lg:w-2/5 pr-4 pl-4 w-full lg:mb-0 mb-4">
                  <div className="text-lg-end text-center">
                    <p className="mb-0 uppercase fw_600 text-white">
                      Public Sale Begins{" "}
                      <span className="txt_purple2">January 14th, 2023</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SwapeeHomeSection2;
