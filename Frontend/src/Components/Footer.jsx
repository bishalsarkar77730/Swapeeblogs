import React from "react";
import footerLogo from "../Utils/img/footer_logo.svg";
import qr from "../Utils/img/qr.png";
import googleplay from "../Utils/img/googlePlay.png";
import appStore from "../Utils/img/appStore.png";
import "../Styles/Style.css";
import "../Styles/Responsive.css";

const Footer = () => {
  return (
    <>
      <footer className="footer footer2 pb-0 pt-5">
        <div className="container min-w-lg mx-auto sm:px-4 container_xxl sm:px-6 px-3 mb-5">
          <div className="footer_row justify-content-between">
            <div className="footer_box_lg flex items-center footer_logo_box">
              <a href="a">
                <img className="footer_logo" src={footerLogo} alt="logo" />
              </a>
            </div>
            <div className="footer_box_sm">
              <div>
                <h6 className="footer_ul_heading uppercase mb-3">Products</h6>
                <ul className="footer_ul ps-0 mb-0">
                  <li>
                    <a href="a" className="text-cpitalize">
                      Explore
                    </a>
                  </li>
                  <li>
                    <a href="a" className="text-cpitalize">
                      Exchange
                    </a>
                  </li>
                  <li>
                    <a href="a" className="text-cpitalize">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="a" className="text-cpitalize">
                      Company
                    </a>
                  </li>
                  <li>
                    <a href="a" className="text-cpitalize">
                      Help Center
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_box_sm">
              <div>
                <h6 className="footer_ul_heading uppercase mb-3">Company</h6>
                <ul className="footer_ul ps-0 mb-0">
                  <li>
                    <a href="a" className="text-cpitalize">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="a" className="text-cpitalize">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="a" className="text-cpitalize">
                      Team
                    </a>
                  </li>
                  <li>
                    <a href="a" className="text-cpitalize">
                      Partners & Affiliates
                    </a>
                  </li>
                  <li>
                    <a href="a" className="text-cpitalize">
                      F.A.Q.
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_box_sm">
              <div>
                <h6 className="footer_ul_heading uppercase mb-3">Social</h6>
                <ul className="footer_ul ps-0 mb-0">
                  <li>
                    <a href="a" className="text-cpitalize">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="a" className="text-cpitalize">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="a" className="text-cpitalize">
                      Discord
                    </a>
                  </li>
                  <li>
                    <a href="a" className="text-cpitalize">
                      Medium
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_box_lg">
              <div>
                <h6 className="footer_ul_heading uppercase mb-3">
                  Get The Swapee App
                </h6>
                <div className="flex items-start">
                  <img src={qr} alt="" />
                  <ul className="ms-3 list-unstyled mb-0">
                    <li className="mb-3">
                      <a href="a">
                        <img src={googleplay} alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="a">
                        <img src={appStore} alt="icon" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container min-w-lg mx-auto sm:px-4 container_xxl sm:px-6 px-3">
            <div className="flex flex-wrap">
              <div className="md:w-2/3">
                <p className="mb-0 md:mb-0 text-sm md:text-base text-gray-700 md:text-left text-center font-medium">
                  ©2022 Copyright Swapee Finance LTD. All Right Reserved.
                </p>
              </div>
              <div className="md:w-1/3 pr-4 pl-4 flex md:justify-end justify-center">
                <ul className="footer_bottom_ul ps-0 mb-0">
                  <li>
                    <a href="a">Security</a>
                  </li>
                  <li>
                    <a href="a">Privacy</a>
                  </li>
                  <li>
                    <a href="a">Terms</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
