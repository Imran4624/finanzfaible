import React, { useState } from "react";
import BannerImage from "../assets/images/banner-img.png";
import Household from "../assets/images/household-img.svg";
import Calendar from "../assets/images/calendar-img.svg";
import IncomArrow from "../assets/images/incom-arrow.svg";
import ExpenceArrow from "../assets/images/expense-arrow.svg";
import Blog1 from "../assets/images/blog-img.png";
import Blog2 from "../assets/images/blog-img2.png";
import ClockIcon from "../assets/images/clock-icon.svg";
import CalendarIcon from "../assets/images/calendar-icon.svg";
import RightArrow from "../assets/images/right-arrow.svg";

import { Accordion, Button, Card, Form, ProgressBar } from "react-bootstrap";
import Blogs from "../components/Blogs";
import FinancialGoal from "../components/FinancialGoal";
import Cookies from "../components/Cookies";
import StayInformed from "../components/StayInformed";

const Calculator = () => {
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
                Your monthly household calculator
              </h1>
              <p className="text-white mt-3">
                Use the finanzfaible household calculator to keep an eye on your
                expenses and income.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="d-block mx-auto w-100 mx-md"
                src={BannerImage}
                alt="bannerImage"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="household-sec">
        <div className="container">
          <div className="row align-items-center py-5 justify-content-between flex-column-reverse flex-md-row">
            <div className="col-md-6 col-lg-6">
              <img
                className="d-block mx-auto w-100 mx-md"
                src={Household}
                alt="img not found"
              />
            </div>
            <div className="col-md-6 col-lg-5">
              <h2 className="heading-main text-green">
                How to use our household calculator
              </h2>
              <ul className="list-style mt-3">
                <li className="p-heading">
                  Enter the approximate amount in all fields that apply to your
                  household
                </li>
                <li className="p-heading">
                  Try rounding up to the nearest dollar amount, even though this
                  calculator accepts decimals (using either , or .)
                </li>
                <li className="p-heading">
                  You do not need to fill out all fields
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="budget-reminder bg-light-green py-4">
        <div className="container">
          <div className="row align-items-center justify-content-center py-5">
            <div className="col-12 col-lg-10">
              <div className="row align-items-center justify-content-between">
                <div className="col-md-6 col-lg-5">
                  <h2 className="sub-heading text-green">
                    <span className="text-dark-green d-block">Get monthly</span>
                    budget reminder
                  </h2>

                  <Form.Control
                    className="mt-3"
                    type="text"
                    placeholder="email address/phone number"
                  />
                  <Button className="mt-4 bg-green px-3 py-2 text-white rounded-pill border-0 fw-bold">
                    Get Reminder
                  </Button>
                </div>
                <div className="col-md-6 col-lg-6 mt-md-0 mt-5">
                  <img
                    className="d-block mx-auto w-100 mx-md"
                    src={Calendar}
                    alt="img not found"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="monthly-calculation pt-5 pb-2">
        <div className="container">
          <span className="text-green text-center d-block fw-500">
            Calculator
          </span>
          <h3 className="body-heading text-center">
            Monthly Household Calculator
          </h3>

          <div className="row bg-green py-4 px-2 radius-24 mx-lg-5 mt-4">
            <div className="col-12 mb-4">
              <div className="py-4 bg-light-green radius-24">
                <div className="row  justify-content-center ">
                  <div className="col-11 col-md-8 col-lg-4 ">
                    <h5 className="text-green text-center fw-bold text-capitalize mb-3">
                      Your net income (after taxes)
                    </h5>
                    <p className="mb-1">household income</p>
                    <div className="bg-white px-5 py-2 incom-box">
                      <h3 className="fw-bolder text-center">2000</h3>
                    </div>
                    <p className="mb-1 mt-3">Other sources of income</p>
                    <div className="bg-white px-5 py-2 incom-box">
                      <h3 className="fw-bolder text-center">0</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6  mb-3 mb-md-0 ">
              <div className="bg-light-green radius-24 h-100">
                <Accordion defaultActiveKey="0" className="pb-5">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>living costs</Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="text-start fw-500">Rent</h6>
                          <div>
                            <h4 className="px-4 py-1 bg-white d-block incom-box fw-bold">
                              0
                            </h4>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="text-start fw-500">
                            household insurance
                          </h6>
                          <div>
                            <h4 className="px-4 py-1 bg-white d-block incom-box fw-bold">
                              0
                            </h4>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="text-start fw-500">maintenance</h6>
                          <div>
                            <h4 className="px-4 py-1 bg-white d-block incom-box fw-bold">
                              0
                            </h4>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="text-start fw-500">
                            water / gas / electricitynt
                          </h6>
                          <div>
                            <h4 className="px-4 py-1 bg-white d-block incom-box fw-bold">
                              0
                            </h4>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="text-start fw-500">
                            Internet / Cable / TV
                          </h6>
                          <div>
                            <h4 className="px-4 py-1 bg-white d-block incom-box fw-bold">
                              0
                            </h4>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="text-start fw-500 text-light-red fw-bold">
                            Total
                          </h6>
                          <div>
                            <h4 className="text-light-red fw-bold">0 €</h4>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>education expenses</Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="text-start fw-500">Rent</h6>
                          <div>
                            <h4 className="px-4 py-1 bg-white d-block incom-box fw-bold">
                              0
                            </h4>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="text-start fw-500">
                            household insurance
                          </h6>
                          <div>
                            <h4 className="px-4 py-1 bg-white d-block incom-box fw-bold">
                              0
                            </h4>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="text-start fw-500">maintenance</h6>
                          <div>
                            <h4 className="px-4 py-1 bg-white d-block incom-box fw-bold">
                              0
                            </h4>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="text-start fw-500">
                            Rewater / gas / electricitynt
                          </h6>
                          <div>
                            <h4 className="px-4 py-1 bg-white d-block incom-box fw-bold">
                              0
                            </h4>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="text-start fw-500 text-light-red fw-bold">
                            Total
                          </h6>
                          <div>
                            <h4 className="text-light-red fw-bold">0 €</h4>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Personal Expenses</Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="text-start fw-500">Rent</h6>
                          <div>
                            <h4 className="px-4 py-1 bg-white d-block incom-box fw-bold">
                              0
                            </h4>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="text-start fw-500">
                            household insurance
                          </h6>
                          <div>
                            <h4 className="px-4 py-1 bg-white d-block incom-box fw-bold">
                              0
                            </h4>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="text-start fw-500">maintenance</h6>
                          <div>
                            <h4 className="px-4 py-1 bg-white d-block incom-box fw-bold">
                              0
                            </h4>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="text-start fw-500">
                            Rewater / gas / electricitynt
                          </h6>
                          <div>
                            <h4 className="px-4 py-1 bg-white d-block incom-box fw-bold">
                              0
                            </h4>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="text-start fw-500 text-light-red fw-bold">
                            Total
                          </h6>
                          <div>
                            <h4 className="text-light-red fw-bold">0 €</h4>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>savings</Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="text-start fw-500">Rent</h6>
                          <div>
                            <h4 className="px-4 py-1 bg-white d-block incom-box fw-bold">
                              0
                            </h4>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="text-start fw-500">
                            household insurance
                          </h6>
                          <div>
                            <h4 className="px-4 py-1 bg-white d-block incom-box fw-bold">
                              0
                            </h4>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="text-start fw-500">maintenance</h6>
                          <div>
                            <h4 className="px-4 py-1 bg-white d-block incom-box fw-bold">
                              0
                            </h4>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="text-start fw-500">
                            Rewater / gas / electricitynt
                          </h6>
                          <div>
                            <h4 className="px-4 py-1 bg-white d-block incom-box fw-bold">
                              0
                            </h4>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="text-start fw-500 text-light-red fw-bold">
                            Total
                          </h6>
                          <div>
                            <h4 className="text-light-red fw-bold">0 €</h4>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
            <div className="col-md-6 mb-3 mb-md-0 ">
              <div className="bg-light-green radius-24 py-3">
                <h5 className="text-green text-center fw-bold text-capitalize mb-3">
                  Summary
                </h5>
                <div className="row justify-content-between align-items-center pt-3 pb-4">
                  <div className="col-6 border-right d-flex justify-content-center">
                    <div>
                      <p className="text-green fs-5 mb-0">
                        total income <img src={IncomArrow} alt="arrow" />
                      </p>
                      <h2 className="fw-bold text-green mb-0">2.000 €</h2>
                    </div>
                  </div>
                  <div className="col-6 d-flex justify-content-center">
                    <div>
                      <p className="text-light-red fs-5 mb-0">
                        total income <img src={ExpenceArrow} alt="arrow" />
                      </p>
                      <h2 className="fw-bold text-light-red mb-0">2.000 €</h2>
                    </div>
                  </div>
                  <div className="col-11 col-md-9 d-flex justify-content-center bg-white radius-24 mx-auto pt-3 pb-2 mt-5">
                    <div>
                      <h6 className="text-green text-center text-capitalize fw-normal mb-0">
                        Remaining monthly balance
                      </h6>
                      <h2 className="fs-1 fw-bold text-black text-center mb-0">
                        2.000 €
                      </h2>
                    </div>
                  </div>
                </div>
                <h5 className="text-green text-center fw-bold text-capitalize mb-1">
                  budget breakdown
                </h5>
                <p className="text-green text-center text-capitalize fw-normal fs-6">
                  Your income is divided into the following categories
                </p>
                <div className="progress-bar-box">
                  <div className="progress-bar px-3 px-lg-5 mb-2">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="p-heading text-capitalize text-black mb-1">
                        living costs
                      </p>
                      <div>
                        <p className="p-heading text-capitalize text-black mb-1">
                          1.3%
                        </p>
                      </div>
                    </div>
                    <ProgressBar now={40} />
                  </div>
                  <div className="progress-bar px-3 px-lg-5 mb-2">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="p-heading text-capitalize text-black mb-1">
                        transportation expenses
                      </p>
                      <div>
                        <p className="p-heading text-capitalize text-black mb-1">
                          1.1%
                        </p>
                      </div>
                    </div>
                    <ProgressBar now={30} />
                  </div>
                  <div className="progress-bar px-3 px-lg-5 mb-2">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="p-heading text-capitalize text-black mb-1">
                        education expenses
                      </p>
                      <div>
                        <p className="p-heading text-capitalize text-black mb-1">
                          2.3%
                        </p>
                      </div>
                    </div>
                    <ProgressBar now={50} />
                  </div>
                  <div className="progress-bar px-3 px-lg-5 mb-2">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="p-heading text-capitalize text-black mb-1">
                        Personal Expenses
                      </p>
                      <div>
                        <p className="p-heading text-capitalize text-black mb-1">
                          1.0%
                        </p>
                      </div>
                    </div>
                    <ProgressBar now={30} />
                  </div>
                  <div className="progress-bar px-3 px-lg-5 mb-2">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="p-heading text-capitalize text-black mb-1">
                        savings
                      </p>
                      <div>
                        <p className="p-heading text-capitalize text-black mb-1">
                          0%
                        </p>
                      </div>
                    </div>
                    <ProgressBar now={2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="money-saving bg-light-green my-5 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-11 col-lg-6">
              <span className="text-green text-center d-block fw-500">
                Saving
              </span>
              <h3 className="body-heading text-center">
                Simple Ways to Save Money
              </h3>
              <ul className="list-style mt-4">
                <li className="p-heading">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus pulvinar felis sapien, vel aliquam quam consectetur a.
                  Donec porttitor nulla augue,
                </li>
                <li className="p-heading">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus pulvinar .
                </li>
                <li className="p-heading">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus pulvinar felis sapien, vel aliquam quam consectetur a.
                  Donec porttitor nulla augue, eu mollis sapien condimentum sit
                  amet.
                </li>
              </ul>
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

export default Calculator;
