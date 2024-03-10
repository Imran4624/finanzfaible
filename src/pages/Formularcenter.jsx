import React, { useState } from "react";
import BannerCalendar from "../assets/images/banner-calendar.svg";
import Blog1 from "../assets/images/blog-img.png";
import Blog2 from "../assets/images/blog-img2.png";
import ClockIcon from "../assets/images/clock-icon.svg";
import CalendarIcon from "../assets/images/calendar-icon.svg";
import RightArrow from "../assets/images/right-arrow.svg";
import cardImage2 from "../assets/images/account-and-card.svg";
import CoverLetter from "../assets/images/cover-letter.svg";
import AccountInformation from "../assets/images/account-information.svg";
import Subscription from "../assets/images/subscription.svg";

import { RxCross1 } from "react-icons/rx";

import { Button, Card, Form } from "react-bootstrap";
import Blogs from "../components/Blogs";
import FinancialGoal from "../components/FinancialGoal";
import StayInformed from "../components/StayInformed";
import Cookies from "../components/Cookies";

// import required modules

const Formularcenter = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <section className="banner-sec">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-7 col-lg-6 mb-5 mb-md-0">
              <h1 className="text-white fw-500 text-capitalize">
                Helpful form center
              </h1>
              <p className="text-white mt-3">
                In this overview you will find all the tools to handle your
                financial transactions quickly and easily. This list is
                continuously updated. ​
              </p>

              <p className="text-white mt-3">
                So feel free to subscribe to the free newsletter so you don't
                miss any new updates.
              </p>

              <div className="d-flex mt-4">
                <Button className="btn-100 rounded-pill get-started-btn bg-white text-green px-5 py-2 border-0 me-3 fw-bold">
                  Browse Now
                </Button>
              </div>
            </div>
            <div className="col-md-5">
              <img
                className="d-block mx-auto w-100 mx-md"
                src={BannerCalendar}
                alt="bannerImage"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="helpfull-form py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4 text-center">
              <div className="card-one">
                <div className="card-img-custom">
                  <img src={cardImage2} alt="icon" />
                </div>
                <h4 className="text-green fw-600 mt-3 mb-2">
                  Account closure current bank
                </h4>
                <p className="m-0 mx-5 pb-3 border-0">
                  Fillable account cancellation form to your current bank
                </p>
                <Button className="get-started-btn bg-transparent border-0 text-green fw-bold mb-4">
                  View Form
                </Button>
              </div>
            </div>
            <div className="col-md-6 mb-4 text-center">
              <div className="card-one">
                <div className="card-img-custom">
                  <img src={CoverLetter} alt="icon" />
                </div>
                <h4 className="text-green fw-600 mt-3 mb-2">
                  Employer cover letter
                </h4>
                <p className="m-0 mx-5 pb-3 border-0">
                  Wage/salary/pension cover letter
                </p>
                <Button className="get-started-btn bg-transparent border-0 text-green fw-bold mb-4">
                  View Form
                </Button>
              </div>
            </div>
            <div className="col-md-6 mb-4 text-center">
              <div className="card-one">
                <div className="card-img-custom">
                  <img src={AccountInformation} alt="icon" />
                </div>
                <h4 className="text-green fw-600 mt-3 mb-2">
                  Account change information for direct debits
                </h4>
                <p className="m-0 mx-5 pb-3 border-0">
                  Account change information for direct debits
                </p>
                <Button className="get-started-btn bg-transparent border-0 text-green fw-bold mb-4">
                  View Form
                </Button>
              </div>
            </div>
            <div className="col-md-6 mb-4 text-center">
              <div className="card-one">
                <div className="card-img-custom">
                  <img src={Subscription} alt="icon" />
                </div>
                <h4 className="text-green fw-600 mt-3 mb-2">
                  Subscription Cancellation Template
                </h4>
                <p className="m-0 mx-5 pb-3 border-0">
                  Subscription Cancellation Template
                </p>
                <Button className="get-started-btn bg-transparent border-0 text-green fw-bold mb-4">
                  View Form
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Blogs />

      <FinancialGoal />

      <StayInformed />
      <Cookies />
    </>
  );
};

export default Formularcenter;
