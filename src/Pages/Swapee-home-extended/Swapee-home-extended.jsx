import React, { useState } from "react";
import "../../Styles/Style.css";
import "../../Styles/Responsive.css";
import usddark from "../../Utils/img/usd-dark.png";
import arrowExchange from "../../Utils/img/arrowExchangeBlock.png";
import bitcoindark from "../../Utils/img/bitcoin-dark.png";
import euro from "../../Utils/img/euro.png";
import eth from "../../Utils/img/eth.png";

// import components
import SwapeeHomeSection1 from "./Swapee_Home_Section1";
import SwapeeHomeSection2 from "./Swapee_Home_Section2";
import SwapeeHomeSection3 from "./Swapee_home_section3";
import SwapeeHomeSlider from "./Swapee_Home_Slider";
import Navbar from "../../Components/Navbar";
import Priceslider from "../../Components/Price_slider";

const SwapeeHome = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCloseAlert = () => {
    const alert = document.querySelector(".cookie_sticky_alert");
    alert.remove();
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div
        className="flex flex-row alert cookie_sticky_alert opacity-0 opacity-100 block py-4 px-9"
        role="alert"
      >
        We use <strong className="text-white mx-2">cookies</strong> for a better
        experience
        <span className="mx-2">|</span>
        <button
          type="button"
          className="btn-close shadow-none cookie_sticky_btn"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={handleCloseAlert}
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
      {/* Header part */}
      <Priceslider />
      <header className="pt-10 header_dark header_dark2">
        <Navbar />

        {/* site hero  */}
        <div className="container min-w-screen-lg mx-auto px-3 sm:px-4 sm:px-6 container_xxl">
          <div className="hero_light hero_dark pb-5 mt-8">
            {/* hero_light_left  */}
            <div className="hero_light_left hero_dark_left pb-20 lg:pb-24 mt-4 lg:mt-0 lg:mt-4">
              <h1 className="txt_white mb-5">
                Bitcoin has never been <span>easier</span>
              </h1>
              <p className="p1">
                Swapee provides a safe, secure way for you to join the growing
                number of people using Bitcoin around the world.
              </p>
              <p className="p2 mb-20">
                With our easy-to-use platform, you can buy Bitcoin online or in
                person hassle-free.
              </p>
              <a
                href="a"
                className="btn_gradient uppercase text-sm sm:text-base"
              >
                <span>Get Started</span>
              </a>
              <a href="a" className="btn_link_white capitalize ml-4">
                Learn More{" "}
                <i className="fas fa-long-arrow-alt-right i_align_fix fs-6 ms-1"></i>
              </a>
            </div>
            {/* hero_light_right  */}
            <div className="hero_light_right theme_dark">
              {/* hero_light_right_tabs  */}
              <div className="hero_light_right_tabs">
                <button
                  // onClick="nextSlide(event, 'hero_light_right_form1')"
                  className="pt-4 hero_form_tab hero_form_tab_active"
                >
                  EXCHANGE
                </button>
                <button
                  // onClick="nextSlide(event, 'hero_light_right_form2')"
                  className="pt-4 font-lg hero_form_tab"
                >
                  BUY/SELL
                </button>
              </div>
              {/* hero_light_right_form  */}
              <div
                id="hero_light_right_form1"
                className="hero_light_right_form"
                style={{ display: "block" }}
              >
                <p className="fs_14 letter_space_1 mx-4 txt_silver fw_700 mb-2">
                  Send
                </p>
                <div className="hero_light_right_form_row">
                  <div className="hero_light_right_form_row_left">
                    <p className="fw_500 mb-0 text-white bitText">1.00896</p>
                    <input type="number" placeholder="~$165.09" />
                  </div>
                  <div>
                    <div className="flex mb-2">
                      <p className="text-sm sm:text-base fw-bold txt_silver mb-0 ms-auto">
                        1.00896 BTC
                      </p>
                      <div className="currencyMax uppercase fs_10 ms-2">
                        max
                      </div>
                    </div>
                    <div className="hero_light_right_form_row_right px-4 py-4">
                      <img className="select_img" src={usddark} alt="" />
                      <select className="nice_select nice_select_currency text-white">
                        <option
                          value="USD"
                          data-display=""
                          data-img={usddark}
                          // selected
                        >
                          USD
                        </option>
                        <option value="EUR" data-img={euro}>
                          EUR
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex items-end py-3">
                  <p className="text-sm sm:text-base letter_space_1 mx-5 txt_silver fw_700 mb-0">
                    Get up to{" "}
                    <span className="txt_cyan fs_12 fw_500">
                      You could save $23.97 (2.65%)
                    </span>
                  </p>
                  <div
                    className="arrowExchange ms-auto me-4"
                    // onClick="input_exchange(this)"
                  >
                    <img src={arrowExchange} alt="icon" />
                  </div>
                </div>
                {/* 2  */}
                <div className="hero_light_right_form_row mb-6 mx-4 mt-2">
                  <div className="hero_light_right_form_row_left">
                    <p className="fw_500 mb-0 text-white bitText">21.497.35</p>
                    <input type="number" placeholder="~$165.09" />
                  </div>
                  <div>
                    <div className="flex mb-2">
                      <p className="text-sm sm:text-base fw-bold txt_silver">
                        1.00896 BTC
                      </p>
                      <div className="currencyMax uppercase fs_10 ms-2">
                        max
                      </div>
                    </div>
                    <div className="hero_light_right_form_row_right text-white px-4 py-4">
                      <img className="select_img" src={bitcoindark} alt="" />
                      <select className="nice_select nice_select_currency">
                        <option
                          value="BTC"
                          data-display="BTC"
                          data-img={bitcoindark}
                          // selected
                        >
                          BTC
                        </option>
                        <option value="ETH" data-img={eth}>
                          ETH
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="theme_dark_Wbtn mx-4 p-2">
                  <button className="btn_dark btn_dark_reverse btn_dark_hero uppercase fs_14 me-3 border-0 bg-transparent block w-full">
                    <span className="offerbut">View Ofers</span>
                  </button>
                </div>
              </div>

              <div
                className="e_more_info p-6 flex items-center justify-between"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#exchangeMoreCollapse"
                aria-expanded={isExpanded}
                aria-controls="multiCollapseExample1"
                onClick={toggleExpanded}
              >
                Toggle second element{" "}
                <span className="exchangeMoreIcon">
                  <i
                    className={`fas fa-chevron-${isExpanded ? "up" : "down"}`}
                  ></i>
                </span>
              </div>
              <div
                className={`collapse ${isExpanded ? "show" : ""}`}
                id="exchangeMoreCollapse"
              >
                <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 flex-auto p-6 bg_exchange text-white">
                  Some placeholder content for the first collapse component of
                  this multi-collapse example. This panel is hidden by default
                  but revealed when the user activates the relevant trigger.
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <SwapeeHomeSection1 />
      <SwapeeHomeSection2 />
      <SwapeeHomeSection3 />
      <SwapeeHomeSlider />
    </>
  );
};

export default SwapeeHome;
