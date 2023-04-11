import React from "react";
import "../../Styles/Style.css";
import "../../Styles/Responsive.css";
import opportunity from "../../Utils/img/opportunity_boundaries.png";
import swapeebefore from "../../Utils/img/swapee_before_shadow.png";

const SwapeeHomeSection3 = () => {
  return (
    <section className="sec_light_3 sec_dark_3 py-5 right_box_shadow">
      <div className="container min-w-lg mx-auto sm:px-4 container_xxl sm:px-6 px-3 py-5">
        <h2 className="txt_white mb-5 pb-2 fw_800 text-center">
          Opportunity Beyond <span>Boundaries</span>
        </h2>
        <div className="row_light_3 flex flex-wrap  gx-0 items-center">
          <div className="lg:w-1/2 pr-4 pl-4">
            <div className="px-3">
              <img src={opportunity} className="w-full" alt="" />
            </div>
          </div>
          <div className="lg:w-1/2 pr-4 pl-4">
            <img
              src={swapeebefore}
              className="user-select-none right_box_shadow_img"
              alt=""
            />
            <p className="txt_light_secondary mb-4">
              The world is changing, finance is changing: blockchain and DeFi
              are at the forefront of a powerful and historical revolution.
              People are looking for flexible, dynamic, and capital efficient
              alternatives to traditional financial instruments—alternatives
              that give custody over funds, and keep them away from the hands of
              corporations who prioritize bonuses and shareholders.
            </p>
            <p className="txt_light_secondary mb-4">
              Cryptocurrency in your wallet, is yours, and your ownership is
              recorded immutably on a distributed ledger. The globalized nature
              of cryptocurrency protects your funds from the whims of
              governments and central banks.
            </p>
            <p className="txt_light_secondary mb-5">
              However, blockchain technology is in its infancy and tools that
              will revolutionize the industry are often inaccessible, confusing,
              or under-developed. Blockchains are numerous and fragmented and
              the markets never stop. Swapee will break down these barriers,
              building a one-stop cross-chain protocol where holders share in
              the profits.
            </p>
            <a href="a" className="btn_gradient text-uppercase fs_14 me-3">
              <span>Get Started</span>
            </a>
            <a href="a" className="btn_link_white text-capitalize fs_14">
              Learn More{" "}
              <i className="fas fa-long-arrow-alt-right i_align_fix fs-6 ms-1"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwapeeHomeSection3;
