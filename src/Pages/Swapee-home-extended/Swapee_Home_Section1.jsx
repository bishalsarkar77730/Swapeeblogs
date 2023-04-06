import React from "react";
import "../../Styles/Style.css";
import "../../Styles/Responsive.css";
import lock from "../../Utils/img/lock_icon.png";
import UsdDark from "../../Utils/img/usd-dark.png";
import euro from "../../Utils/img/euro.png";
import ArrowExchange from "../../Utils/img/arrowExchangeBlock.png";
import bitcoindark from "../../Utils/img/bitcoin-dark.png";
import eth from "../../Utils/img/eth.png";
import btc from "../../Utils/img/btc.png";
import floatingimg from "../../Utils/img/floating_icon.png";
import changeicon from "../../Utils/img/changely_icon_1.png";
import alfacashicon from "../../Utils/img/alfacash_icon_3.png";
import simpleswapicon2 from "../../Utils/img/simpleswap_icon_2.png";
import switchainicon3 from "../../Utils/img/switchain_icon_3.png";
import exchangeicon from "../../Utils/img/n_exchange_icon_4.png";

const SwapeeHomeSection1 = () => {
  return (
    <section className="sec_dark_3 py-5 right_box_shadow overflow-hidden">
      <div className="container min-w-lg mx-auto sm:px-4 container_xxl sm:px-6 px-3 py-5">
        <h2 className="text-4xl text-white mb-4 pb-2 fw_800 text-center">
          Offers reset every 90 sec.
        </h2>
        <div className="parentExchangeForm2 hero_light_right theme_dark flex afterRemove">
          <div
            id="exchangeForm2"
            className="hero_light_right_form pt-3 flex justify-between items-center w-full"
          >
            {/* 1   */}
            <div className="flex-grow-1 lg:mb-6 lg:ms-4">
              <p className="text-sm sm:text-base letter_space_1 txt_silver fw_700 mb-3">
                Send
              </p>
              <div className="hero_light_right_form_row sectio1_hero">
                <div className="hero_light_right_form_row_left exchangeInp2 flex items-center">
                  <div>
                    <p className="fw_500 mb-0 text-white text-lg">1.00896</p>
                    <input type="number" placeholder="~$165.09" />
                  </div>
                </div>
                <div className="ms-auto wrapDownDark2">
                  <div className="flex mb-2">
                    <p className="fs_12 fw-bold txt_silver mb-0 ms-auto">
                      1.00896 BTC
                    </p>
                    <div className="currencyMax uppercase fs_10 ms-2">max</div>
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
                          ETH
                        </option>
                        <option value="ETH" data-img={eth}>
                          BTC
                        </option>
                      </select>
                    </div>
                </div>
              </div>
            </div>
            {/* -- 2 -- */}
            <div
              className="arrowExchange lg:mx-4 mt-4 lg:mb-6"
              onclick="input_exchange(this)"
            >
              <img src={ArrowExchange} alt="icon" />
            </div>
            <div className="flex-grow-1 lg:me-4 lg:mb-6">
              <div className="flex items-end mb-3">
                <p className="text-sm sm:text-base letter_space_1 txt_silver fw_700 mb-0">
                  Get up to{" "}
                  <span className="txt_cyan text-xs fw_500">
                    You could save $23.97 (2.65%)
                  </span>
                </p>
              </div>
              <div className="hero_light_right_form_row sectio1_hero">
                <div className="hero_light_right_form_row_left exchangeInp2 flex items-center">
                  <div>
                    <p className="fw_500 mb-0 text-white h5">1.00896</p>
                    <input type="number" placeholder="~$165.09" />
                  </div>
                </div>
                <div className="ms-auto wrapDownDark2">
                  <div className="flex mb-2">
                    <p className="fs_12 fw-bold txt_silver mb-0 ms-auto">
                      1.00896 BTC
                    </p>
                    <div className="currencyMax uppercase fs_10 ms-2">max</div>
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
            </div>
            {/* -- 3 -- */}
            <div className="theme_dark_Wbtn flex items-center justify-center p-2 mt-4 lg:mb-6 lg:mx-4">
              <button className="btn_dark btn_dark_reverse btn_dark_hero uppercase fs_12 border-0 bg-transparent block w-full">
                <span className="w-full">View Ofers</span>
              </button>
            </div>
          </div>
        </div>
        <div className="offers_table_filter dark">
          <div
            id="ot_btns_container"
            className="offers_table_filter_wrapper dark"
          >
            <button
              onclick="filterSelection('all')"
              className="ot_filter_btn dark active"
            >
              all
            </button>
            <button
              onclick="filterSelection('floating')"
              className="ot_filter_btn dark"
            >
              floating rate
            </button>
            <button
              onclick="filterSelection('fixed')"
              className="ot_filter_btn dark"
            >
              fixed rate
            </button>
          </div>
        </div>
        <div className="offers_table_main_wrapper dark pt-0">
          <div className="offers_table_wrapper block w-full overflow-auto scrolling-touch">
            <table className="w-full max-w-full mb-4 bg-transparent table-borderless offers_table">
              <thead className="border-b-0">
                <tr className="uppercase txt_silver">
                  <th>Rate</th>
                  <th>Type</th>
                  <th>Partner</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="offer_table_row floating dark_d">
                  <td className="py-4 ps-4 flex items-center">
                    <div className="offer_table_img dark me-3">
                      <img src={btc} alt="" />
                    </div>
                    <div>
                      <p className="h5 mb-0 txt_purple fw_700">
                        BTC 0.113382{" "}
                        <sup>
                          <span className="t_bestoffer">BEST OFFER</span>
                        </sup>
                      </p>
                      <p className="mb-0 txt_silver_2">
                        KYC requested in exceptional cases. KYC required for
                        refunds.{" "}
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center">
                      <img src={floatingimg} className="me-3" alt="" />
                      <div>
                        <p className="mb-0">Floating</p>
                        <p className="mb-0 fs_12">4-17 min</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="offer_partner_img">
                      <img src={changeicon} alt="" />
                    </div>
                  </td>
                  <td>
                    <div className="text-center">
                      <a href="a" className="btn_gradient uppercase fs_12 me-3">
                        <span>Get this deal</span>
                      </a>
                    </div>
                  </td>
                </tr>

                <tr className="offer_table_row floating dark">
                  <td className="py-4 ps-4">
                    <div className="flex items-center">
                      <div className="offer_table_img dark me-3">
                        <img src={btc} alt="" />
                      </div>
                      <div>
                        <p className="h5 mb-0 fw_700 text-white">
                          BTC 0.113382
                        </p>
                        <p className="mb-0">
                          KYC requested in exceptional cases. KYC required for
                          refunds.{" "}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center">
                      <img src={floatingimg} className="me-3" alt="" />
                      <div>
                        <p className="mb-0">Floating</p>
                        <p className="mb-0 fs_12">4-17 min</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="offer_partner_img">
                      <img src={alfacashicon} alt="" />
                    </div>
                  </td>
                  <td>
                    <div className="text-center">
                      <a href="a" className="btn_gradient uppercase fs_12 me-3">
                        <span>Get this deal</span>
                      </a>
                    </div>
                  </td>
                </tr>

                <tr className="offer_table_row floating dark">
                  <td className="py-4 ps-4">
                    <div className="flex items-center">
                      <div className="offer_table_img dark me-3">
                        <img src={btc} alt="" />
                      </div>
                      <div>
                        <p className="h5 mb-0 fw_700 text-white">
                          BTC 0.113382
                        </p>
                        <p className="mb-0">
                          KYC requested in exceptional cases. KYC required for
                          refunds.{" "}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center">
                      <img src={floatingimg} className="me-3" alt="" />
                      <div>
                        <p className="mb-0">Floating</p>
                        <p className="mb-0 fs_12">4-17 min</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="offer_partner_img">
                      <img src={simpleswapicon2} alt="" />
                    </div>
                  </td>
                  <td>
                    <div className="text-center">
                      <a href="a" className="btn_gradient uppercase fs_12 me-3">
                        <span>Get this deal</span>
                      </a>
                    </div>
                  </td>
                </tr>

                <tr className="offer_table_row fixed dark">
                  <td className="py-4 ps-4">
                    <div className="flex items-center">
                      <div className="offer_table_img dark me-3">
                        <img src={btc} alt="" />
                      </div>
                      <div>
                        <p className="h5 mb-0 fw_700 text-white">
                          BTC 0.113382
                        </p>
                        <p className="mb-0">
                          KYC requested in exceptional cases. KYC required for
                          refunds.{" "}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center">
                      <img src={lock} className="me-3" alt="" />
                      <div>
                        <p className="mb-0">Fixed</p>
                        <p className="mb-0 fs_12">9-17 min</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="offer_partner_img">
                      <img src={switchainicon3} alt="" />
                    </div>
                  </td>
                  <td>
                    <div className="text-center">
                      <a href="a" className="btn_gradient uppercase fs_12 me-3">
                        <span>Get this deal</span>
                      </a>
                    </div>
                  </td>
                </tr>

                <tr className="offer_table_row fixed dark">
                  <td className="py-4 ps-4">
                    <div className="flex items-center">
                      <div className="offer_table_img dark me-3">
                        <img src={btc} alt="" />
                      </div>
                      <div>
                        <p className="h5 mb-0 fw_700 text-white">
                          BTC 0.113382
                        </p>
                        <p className="mb-0">
                          KYC requested in exceptional cases. KYC required for
                          refunds.{" "}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center">
                      <img src={lock} className="me-3" alt="" />
                      <div>
                        <p className="mb-0">Fixed</p>
                        <p className="mb-0 fs_12">9-17 min</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="offer_partner_img">
                      <img src={exchangeicon} alt="" />
                    </div>
                  </td>
                  <td>
                    <div className="text-center">
                      <a href="a" className="btn_gradient uppercase fs_12 me-3">
                        <span>Get this deal</span>
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-end txt_silver">
              <p>Includes all fees</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwapeeHomeSection1;
