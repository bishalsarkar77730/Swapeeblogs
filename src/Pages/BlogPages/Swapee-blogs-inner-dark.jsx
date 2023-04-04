import React from "react";
import HomepageDark from "../../Utils/img/swapee-logo-white_homepagedark.png";
import Blackcolour from "../../Utils/img/Black_colour.jpg";
import Blogheader from "../../Utils/img/Swapee-Blog-header-img.png";
import Navbar from "../../Components/Navbar";
import "../../Styles/Style.css";
import "../../Styles/Responsive.css";

const Swapeeblogsinnerdark = () => {
  return (
    <>
      <div className="header_dark header_dark2 pt-4">
        <Navbar />
        <div className="py-5 mt-10">
          <div className="container min-w-lg mx-auto sm:px-4 container_xxl sm:px-6 px-3">
            <div className="swapee_token_sale_block_light">
              <div className="swapee_token_sblock_inner swapee_token_sblock_inner_light">
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
        </div>

        <div className="container mt-10 min-w-lg mx-auto sm:px-4 container_xxl sm:px-6 px-3">
          <div className="flex flex-wrap gx-md-5 flex-md-flex flex-wrap">
            <div className="md:w-2/3 pr-4 pl-4">
              <div className="blog_inner_dark md:py-6 py-3 md:px-12 px-4 mb-4">
                <p className="txt_light_purple opacity-75">
                  October 31st, 2022
                </p>
                <h2 className="text-white capitalize fw-bold mb-4">
                  everything you need to know about the upcoming launch
                </h2>
                <p className="fs_18 text-white opacity-50 lh-base mb-4">
                  An army of small Bitcoin (BTC) investors has been fighting
                  with their larget counterparts for months to keep the price
                  above $18,000.
                </p>

                <div className="blog_inner_img mb-4">
                  <img src={Blogheader} alt="" />
                </div>

                <h3 className="text-white capitalize fw-light opacity-75 mb-5">
                  Small Bitcoin investors stop whales from crashing BTC price
                  below $18K
                </h3>
                <p className="fs_18 text-white opacity-50 lh-base mb-4">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.{" "}
                  <span className="txt_light_purple">Separated they</span> live
                  in Book-marksgrove right at the coast of the Semantics, a
                  large language ocean. A small river named Duden flows by their
                  place and supplies it with the necessary regelialia.
                </p>
                <p className="fs_18 text-white opacity-50 lh-base mb-4">
                  It is a paradisematic country in which roasted parts of
                  sentences fly into your mouth Even the all-powerful Pointing
                  has no control about the blind texts it is an almost
                  unorthographic life One day however a small line of blind text
                  by the name of Lorem Ipsum decided to leave for the far World
                  of Grammar.
                </p>
                <p className="fs_18 text-white opacity-50 lh-base mb-4">
                  The Big Oxmox advised her not to do so, because there were
                  thousands of bad Commas, wild Question Marks and devious
                  Semikoli, but the Little Blind Text didn't listen. She packed
                  her seven versalia, put her initial into the belt and made
                  herself on the way. When she reached the first hills of the
                  Italic Mountains, she had a last view back on the skyline of
                  her home-town Bookmarksgrove, the headline of Alphabet Village
                  and the subline of her own road, the Line Lane. Pityful a
                  rethric question ran over her cheek, then she continued her
                  way. On her way she met copy.
                </p>
                <p className="fs_18 text-white opacity-50 lh-base mb-4">
                  THE copy warned the Little Blind Text, that where it came from
                  it would have been rewritten a thousand times and everything
                  that was left from its origin would be the word "and" and the
                  Little Blind Text should turn around and return to its own,
                  safe country. But nothing the copy said could convince her and
                  so it didn't take long until a few insidious Copy Writers
                  ambushed her, and so it didn't take long until a few insidious
                  Copy Writers ambushed her, made her drunk with Longe and
                  Parole and dragged her into their agency, where they abused
                  her for their projects again and again. And if she hasn't been
                  rewritten, then they are still using her. Far far away, behind
                  the word mountains, far from the countries Vokalia and
                  Consonantia, there live the blind texts.
                </p>
                <p className="fs_18 text-white opacity-50 lh-base mb-4">
                  Separated they live in{" "}
                  <span className="txt_light_purple">Bookmarksgrove</span> right
                  at the coast of the Seman-tics, large language ocean. A small
                  river named Duden flows by their place and supplies it with
                  the necessary regelialia.
                </p>
                <p className="fs_18 text-white opacity-50 lh-base mb-4">
                  It is a paradisematic country, in which roasted parts of
                  sentences fly into your mouth. Even the all-powerful Pointing
                  has no control about the blind texts it is an almost
                  unorthographic life One day however a small line of blind text
                  by the name of Lorem Ipsum decided to leave for the far World
                  of Grammar. The Big Oxmox advised her not to do so, because
                  there were housands of bad Commas.
                </p>
              </div>

              <div className="flex flex-wrap ">
                <div className="xl:w-1/2 pr-4 pl-4 mb-3">
                  <a
                    href="a"
                    className="btn_inner_blog flex justify-center flex-col items-center w-full blog_inner_dark text-decoration-none p-6"
                  >
                    <span className="d-block text-white opacity-75 fw-bold fs_14">
                      Newer Stories
                    </span>
                    <span className="flex items-center txt_light_purple fs_12">
                      <span className="txt_dark opacity-75 fs_10 fw-bold me-1"></span>{" "}
                      Polygon Stop Loss Protocol launched
                    </span>
                  </a>
                </div>
                <div className="xl:w-1/2 pr-4 pl-4 mb-3">
                  <a
                    href="a"
                    className="btn_inner_blog flex justify-center flex-col items-center w-full blog_inner_dark text-decoration-none p-6"
                  >
                    <span className="block text-white opacity-75 fw-bold fs_14">
                      Newer Stories
                    </span>
                    <span className="flex items-center txt_light_purple fs_12">
                      Everything You Need to Know About the Upcoming{" "}
                      <span className="txt_dark opacity-75 fs_10 fw-bold ms-1"></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 pr-4 pl-4 md:mb-0 mb-5">
              <div className="blog_inner_dark md:p-6 p-6">
                <h5 className="fs_16 text-white opacity-75 mb-2">Share</h5>
                <ul className="blogInner_socialIcon blogInner_socialIcon_dark pt-3">
                  <li>
                    <a href="a">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="a">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="a">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="a">
                      <i className="fas fa-link"></i>
                    </a>
                  </li>
                </ul>
                <hr className="my-4 bg-white" />
                <h5 className="fs_16 text-white opacity-75 mb-3">
                  Related stories
                </h5>
                <p className="fs_12 text-white opacity-50 capitalize">
                  everything you need to know about the upcoming token sale
                </p>
                <p className="fs_12 txt_light_purple capitalize mb-2">
                  polygon stop loss protocol launched
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="sec_dark_3 pt-5">
        <div className="container min-w-lg mx-auto sm:px-4 container_xxl sm:px-6 px-3">
          <div className="flex flex-wrap  items-center pt-5 pb-4">
            <div className="xl:w-2/5 pr-4 pl-4 lg:w-1/2 pr-4 pl-4 lg:mb-0">
              <h5 className="fw-bold mb-0 text-white">Recent Stories</h5>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="container min-w-lg mx-auto sm:px-4 container_xxl sm:px-6 px-3">
            <div
              id="blogSlider"
              className="swiper blogSlider magic_slider px-2 xl:px-0"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide magic_box">
                  <img className="magic_box_image" src={Blackcolour} alt="" />
                  <div className="p-2">
                    <h6 className="text-white mt-2 lh-base">
                      Experts Say Swapee Might Explode After it Raised $500,000
                      in 24
                    </h6>
                    <p className="uppercase fs_14 magic_box_p txt_purple2 fw_500 mb-0">
                      Chief marketing officer
                    </p>
                  </div>
                </div>
                <div className="swiper-slide magic_box">
                  <img className="magic_box_image" src={Blackcolour} alt="" />
                  <div className="p-2">
                    <h6 className="text-white mt-2 lh-base">
                      Experts Say Swapee Might Explode After it Raised $500,000
                      in 24
                    </h6>
                    <p className="uppercase fs_14 magic_box_p txt_purple2 fw_500 mb-0">
                      Chief marketing officer
                    </p>
                  </div>
                </div>
                <div className="swiper-slide magic_box">
                  <img className="magic_box_image" src={Blackcolour} alt="" />
                  <div className="p-2">
                    <h6 className="text-white mt-2 lh-base">
                      Experts Say Swapee Might Explode After it Raised $500,000
                      in 24
                    </h6>
                    <p className="uppercase fs_14 magic_box_p txt_purple2 fw_500 mb-0">
                      Chief marketing officer
                    </p>
                  </div>
                </div>
                <div className="swiper-slide magic_box">
                  <img className="magic_box_image" src={Blackcolour} alt="" />
                  <div className="p-2">
                    <h6 className="text-white mt-2 lh-base">
                      Experts Say Swapee Might Explode After it Raised $500,000
                      in 24
                    </h6>
                    <p className="uppercase fs_14 magic_box_p txt_purple2 fw_500 mb-0">
                      Chief marketing officer
                    </p>
                  </div>
                </div>
                <div className="swiper-slide magic_box">
                  <img className="magic_box_image" src={Blackcolour} alt="" />
                  <div className="p-2">
                    <h6 className="text-white mt-2 lh-base">
                      Experts Say Swapee Might Explode After it Raised $500,000
                      in 24
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
    </>
  );
};

export default Swapeeblogsinnerdark;
