import React from "react";
import "./Home.css";
import { CiCircleCheck } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="divhead">
          <div className="nav">
            <div className="logo-1">
              <img src="assets/img/logo/Logo-2.png" alt="logo" />
            </div>
            <div className="navigate">
              <ul>
                <li>About</li>
                <li>Produts</li>
                <li>Others</li>
                <li>Services</li>
              </ul>
            </div>
            <div className="toch-btn">
              <button>Get in Touch</button>
            </div>
          </div>
        </div>

        <div className="body-home">
          <div className="body-f">
            <div className="imgGal">
              <div className="img">
                <img src="assets/img/happy-black-woman-market.png" alt="" />
              </div>
            </div>
            <form action="">
              <div className="form">
                <div className="f1">
                  <h3>Today is a good day</h3>
                  <p>we have a surprise for you, sign up and find out</p>
                </div>

                <label htmlFor="">Email*</label>
                <input type="text" name="" id="" />
                <label htmlFor="">Password*</label>
                <input type="text" name="" id="" />
                <div className="for">
                  <p className="p">
                    Forgot Password? <span>Reset</span>
                  </p>
                </div>
                <div className="btn">
                  <button>Login</button>
                </div>
              </div>
              <div className="dnt">
                <p>
                  {" "}
                  Don't Have an Account? <span>Sign Up</span>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="sec_section">
          <div className="loans">
            <div className="btns">
              <button>Short Term loan</button>
              <button>Long Term loan</button>
              <button>Equity Investment</button>
              <button>Consultation</button>
            </div>
          </div>

          <div className="bth_prt">
            <div className="first_prt">
              <h2>
                Have access to short <br /> Term loans
              </h2>

              <p>
                Categorized by price cap and duration, the loan amount range is
                a maximum of 500,000 (five hundred thousand) with duration of
                maximum of 6 months
              </p>

              <div className="glass_bg">
                <ul>
                  <li>
                    <div className="i_div">
                      <CiCircleCheck fontSize={30} fontWeight={900} />
                    </div>{" "}
                    ALways repay your loan in time
                  </li>
                  <li>
                    <div className="i_div">
                      <CiCircleCheck fontSize={30} fontWeight={900} />
                    </div>{" "}
                    Make sure yout KY has been updated
                  </li>
                  <li>
                    <div className="i_div">
                      <CiCircleCheck fontSize={30} fontWeight={900} />
                    </div>{" "}
                    Apply for loans you can Conviently repay
                  </li>
                </ul>
              </div>
            </div>

            <div className="shrt">
              <div className="span">
                <span>Short term</span>{" "}
                <p>
                  Hurray You are eligible for up to <span>N500,000.00</span>
                </p>
              </div>
              <div className="pro">
                <div className="progress"></div>
              </div>
              <span>N101,000.00</span>
              <span>Intrest rate 3.5% of N156,000 N165,000.00</span>{" "}
              <span>Short Term</span>
            </div>

            <div className="sec_prt">
              <div className="btn2">
                <button>Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
