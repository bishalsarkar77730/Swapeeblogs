import React from "react";
import SwapeeHeader from "../../Utils/img/Swapee-Blog-header-img.png";
import Blackcolour from "../../Utils/img/Black_colour.jpg";
import HomepageDark from "../../Utils/img/swapee-logo-white_homepagedark.png";
import Navbar from "../../Components/Navbar";
import "../../Styles/Style.css";
import "../../Styles/Responsive.css";

const Swapeeblogs = () => {
  return (
    <>
      <header className="pt-8 header_dark header_dark2">
        <Navbar />
        <div className="container min-w-lg mx-auto sm:px-4 container_xxl sm:px-6 px-3">
          <div className="py-4">
            {/* <!-- hero_light_left --> */}
            <div className="hero_dark_left mt-0 lg:mt-12 me-0">
              <div className="text-center">
                <h1 className="txt_white mb-4 text-center fw-bold uppercase text-3xl font-bold tracking-wider">
                  <span>The swapee Blog</span>
                </h1>
                <p className="text-lg font-medium font-bold tracking-wider mb-3 txt_white">
                  The latest news, stories and commentary on the booming Swapee
                  ecosystem
                </p>
              </div>
              <div className="blog_p_header_wrapper">
                <div className="flex flex-wrap  items-center">
                  <div className="md:w-1/2 pr-4 pl-4">
                    <img
                      src={SwapeeHeader}
                      className="img_w_100 lg:mb-0 md:mb-0 mb-4"
                      alt=""
                    />
                  </div>
                  <div className="md:w-1/2 pr-4 pl-4">
                    <div>
                      <p className="txt_purple2 fw_500 fs_14 mb-3">
                        October 31st, 2022
                      </p>
                      <h2 className="txt_white fw-light text-2xl tracking-wider mb-2">
                        Small Bitcoin investors stop whales from crashing BTC
                        price below $18K
                      </h2>
                      <p className="fs_18 txt_silver_3">
                        An army of small Bitcoin (BTC) investors has been
                        fighting with their larger counterparts for months to
                        keep the price above $18,000.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="sec_dark_3">
        <div className="relative">
          <div className="container min-w-lg mx-auto sm:px-4 container_xxl sm:px-6 px-3">
            <div className="px-2 xl:px-0">
              <div className="flex flex-wrap ">
                <div className="md:w-1/3 pr-4 pl-4 mb-4">
                  <div className="grid_box_blog h-full">
                    <img
                      className="magic_box_image magic_blog_img"
                      src={Blackcolour}
                      alt=""
                    />
                    <div className="p-2">
                      <p className="uppercase fs_12 magic_box_p txt_purple2 fw_500 py-2 mb-0">
                        October 31st, 2022
                      </p>
                      <h6 className="text-white mt-2 lh-base fw-normal fs_16 b_gridbox_heading">
                        Why 137-Year-Old Brand Bicycle is Making Bored Ape NFT
                        Playing Cards
                      </h6>
                      <p className="txt_silver_3 mb-0">
                        An army of small Bitcoin (BTC) investors has been
                        fighting with their larger counterparts for months to
                        keep the price above $18,000.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/3 pr-4 pl-4 mb-4">
                  <div className="grid_box_blog h-full">
                    <img
                      className="magic_box_image magic_blog_img"
                      src={Blackcolour}
                      alt=""
                    />
                    <div className="p-2">
                      <p className="uppercase fs_12 magic_box_p txt_purple2 fw_500 py-2 mb-0">
                        October 31st, 2022
                      </p>
                      <h6 className="text-white mt-2 lh-base fw-normal fs_16 b_gridbox_heading">
                        Small Bitcoin investors stop whales from crashing BTC
                        price below $18K
                      </h6>
                      <p className="txt_silver_3 mb-0">
                        An army of small Bitcoin (BTC) investors has been
                        fighting with their larger counterparts for months to
                        keep the price above $18,000.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/3 pr-4 pl-4 mb-4">
                  <div className="grid_box_blog h-full">
                    <img
                      className="magic_box_image magic_blog_img"
                      src={Blackcolour}
                      alt=""
                    />
                    <div className="p-2">
                      <p className="uppercase fs_12 magic_box_p txt_purple2 fw_500 py-2 mb-0">
                        October 31st, 2022
                      </p>
                      <h6 className="text-white mt-2 lh-base fw-normal fs_16 b_gridbox_heading">
                        When is the best time to invest in crypto?
                      </h6>
                      <p className="txt_silver_3 mb-0">
                        Crypto currencies like Bitcoin can experience daily (or
                        even hourly) price volatility. As with any kind of
                        investment, volatility may cause uncertainty, fear of
                        missing out...
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/3 pr-4 pl-4 mb-4">
                  <div className="grid_box_blog h-full">
                    <img
                      className="magic_box_image magic_blog_img"
                      src={Blackcolour}
                      alt=""
                    />
                    <div className="p-2">
                      <p className="uppercase fs_12 magic_box_p txt_purple2 fw_500 py-2 mb-0">
                        October 31st, 2022
                      </p>
                      <h6 className="text-white mt-2 lh-base fw-normal fs_16 b_gridbox_heading">
                        Aptos NFTs Are Coming—And May Put Network Scalability to
                        the Test
                      </h6>
                      <p className="txt_silver_3 mb-0">
                        An army of small Bitcoin (BTC) investors has been
                        fighting with their larger counterparts for months to
                        keep the price above $18,000.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/3 pr-4 pl-4 mb-4">
                  <div className="grid_box_blog h-full">
                    <img
                      className="magic_box_image magic_blog_img"
                      src={Blackcolour}
                      alt=""
                    />
                    <div className="p-2">
                      <p className="uppercase fs_12 magic_box_p txt_purple2 fw_500 py-2 mb-0">
                        October 31st, 2022
                      </p>
                      <h6 className="text-white mt-2 lh-base fw-normal fs_16 b_gridbox_heading">
                        Magic Eden Losing Market Share as Solana NFT Traders
                        Reject Royalties
                      </h6>
                      <p className="txt_silver_3 mb-0">
                        An army of small Bitcoin (BTC) investors has been
                        fighting with their larger counterparts for months to
                        keep the price above $18,000.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/3 pr-4 pl-4 mb-4">
                  <div className="grid_box_blog h-full">
                    <img
                      className="magic_box_image magic_blog_img"
                      src={Blackcolour}
                      alt=""
                    />
                    <div className="p-2">
                      <p className="uppercase fs_12 magic_box_p txt_purple2 fw_500 py-2 mb-0">
                        October 31st, 2022
                      </p>
                      <h6 className="text-white mt-2 lh-base fw-normal fs_16 b_gridbox_heading">
                        Magic Eden Losing Market Share as Solana NFT Traders
                        Reject Royalties
                      </h6>
                      <p className="txt_silver_3 mb-0">
                        An army of small Bitcoin (BTC) investors has been
                        fighting with their larger counterparts for months to
                        keep the price above $18,000.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center my-10">
                <a href="a" className="btn_dark_normal_2 uppercase fs_14">
                  <span className="Load_more">Load more articles</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home_dark_bg_token_sale">
        <div className="container min-w-full mx-auto sm:px-4 container_xxl sm:px-4 px-3">
          <div className="swapee_token_sale_block">
            <div className="swapee_token_sblock_inner">
              <div className="flex flex-wrap items-center ">
                <div className="lg:w-1/3 pr-4 pl-4 w-full lg:mb-0 mb-4">
                  <div className="text-lg-start lg:text-center">
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
                    <img src={HomepageDark} className="w-full" alt="" />
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

export default Swapeeblogs;
