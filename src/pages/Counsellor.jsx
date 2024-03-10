import React, { useState } from "react";
import { Button, Card, Form, NavLink, Tab, Tabs } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FiShare2 } from "react-icons/fi";

import Blog1 from "../assets/images/blog-img.png";
import Blog2 from "../assets/images/blog-img2.png";
import ClockIcon from "../assets/images/clock-icon.svg";
import CalendarIcon from "../assets/images/calendar-icon.svg";
import RightArrow from "../assets/images/right-arrow.svg";
import UserIcon from "../assets/images/user-icon.png";
import BlogView1 from "../assets/images/blog-view-img1.png";
import BlogView2 from "../assets/images/blog-view-img2.png";
import BlogView3 from "../assets/images/blog-view-img3.png";
import FinancialGoal from "../components/FinancialGoal";
import StayInformed from "../components/StayInformed";
import Cookies from "../components/Cookies";

const Counsellor = () => {
  const [isActive, setIsActive] = useState(false);
  const [blogView, setBlogView] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  const handleBlogView = () => {
    setBlogView(true);
  };
  const handleBlogViewHide = () => {
    setBlogView(false);
  };

  return (
    <>
      <section className="banner-sec ">
        <div className="container">
          {!blogView && <h1 className="text-white text-center">Counsellor</h1>}
          {blogView && (
            <h1 className="text-white text-center banner-text-dot">
              That's how much wealth you...
            </h1>
          )}

          <div className="d-flex align-items-center justify-content-center">
            <NavLink className="fs-5 text-white fw-600" to="#">
              Home
            </NavLink>
            <IoIosArrowForward fill="#fff" className="mx-1 mt-1" />
            <NavLink className="fs-5 text-white fw-600" to="#">
              Counsellor
            </NavLink>
          </div>
          {blogView && (
            <p className="text-white text-center fw-500 p-heading">
              That's how much wealth you should have at your age
            </p>
          )}
        </div>
      </section>
      <section className="counsellor-blog mb-5 pb-5">
        <div className="container">
          <div className="position-relative">
            <Tabs
              onClick={handleBlogViewHide}
              defaultActiveKey="Tab1"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="Tab1" title="All posts" className="border-0">
                {!blogView && (
                  <div className="row pt-5">
                    <div
                      onClick={handleBlogView}
                      className="col-12 col-md-6 col-lg-4 mb-3"
                    >
                      <Card className="border-0 shadow-sm card-bg">
                        <Card.Img variant="top" src={Blog1} />
                        <Card.Body className="px-4 py-4 ">
                          <Card.Title className="fs-4 fw-bold">
                            Why you should be interested in the increase in
                            health...
                          </Card.Title>
                          <Card.Text className="border-bottom pb-5 mb-5">
                            <div className="row justify-content-between py-4">
                              <div className="col-6 d-flex align-items-center">
                                <img src={CalendarIcon} alt="icon" />
                                <span className="ms-2">February 12, 2023</span>
                              </div>
                              <div className="col-6 d-flex align-items-center">
                                <img src={ClockIcon} alt="icon" />
                                <span className="ms-2">2 days ago</span>
                              </div>
                            </div>
                            In health insurance contributions, the additional
                            contribution will increase from 2023....
                          </Card.Text>
                          <Button className="bg-green px-3 py-2 text-white fw-bold border-0">
                            Read more{" "}
                            <img className="ms-2" src={RightArrow} alt="icon" />
                          </Button>
                        </Card.Body>
                      </Card>
                    </div>
                    <div
                      onClick={handleBlogView}
                      className="col-12 col-md-6 col-lg-4 mb-3"
                    >
                      <Card className="border-0 shadow-sm card-bg">
                        <Card.Img variant="top" src={Blog2} />
                        <Card.Body className="px-4 py-4 ">
                          <Card.Title className="fs-4 fw-bold">
                            That's how much wealth you should have at your age
                          </Card.Title>
                          <Card.Text className="border-bottom pb-5 mb-5">
                            <div className="row justify-content-between py-4">
                              <div className="col-6 d-flex align-items-center">
                                <img src={CalendarIcon} alt="icon" />
                                <span className="ms-2">February 12, 2023</span>
                              </div>
                              <div className="col-6 d-flex align-items-center">
                                <img src={ClockIcon} alt="icon" />
                                <span className="ms-2">2 days ago</span>
                              </div>
                            </div>
                            We compare ourselves very regularly - and with a
                            wide variety of things. When it...
                          </Card.Text>
                          <Button className="bg-green px-3 py-2 text-white fw-bold border-0">
                            Read more{" "}
                            <img className="ms-2" src={RightArrow} alt="icon" />
                          </Button>
                        </Card.Body>
                      </Card>
                    </div>
                    <div
                      onClick={handleBlogView}
                      className="col-12 col-md-6 col-lg-4 mb-3"
                    >
                      <Card className="border-0 shadow-sm card-bg">
                        <Card.Img variant="top" src={Blog1} />
                        <Card.Body className="px-4 py-4 ">
                          <Card.Title className="fs-4 fw-bold ">
                            That's how much wealth you should have at your age
                          </Card.Title>
                          <Card.Text className="border-bottom pb-5 mb-5">
                            <div className="row justify-content-between py-4">
                              <div className="col-6 d-flex align-items-center">
                                <img src={CalendarIcon} alt="icon" />
                                <span className="ms-2">February 12, 2023</span>
                              </div>
                              <div className="col-6 d-flex align-items-center">
                                <img src={ClockIcon} alt="icon" />
                                <span className="ms-2">2 days ago</span>
                              </div>
                            </div>
                            The saving behavior of people living in Germany is a
                            reflection of the ...
                          </Card.Text>
                          <Button className="bg-green px-3 py-2 text-white fw-bold border-0">
                            Read more{" "}
                            <img className="ms-2" src={RightArrow} alt="icon" />
                          </Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                )}
              </Tab>
              <Tab
                eventKey="Tab2"
                title="Loans & (construction) financing"
                className="border-0"
              >
                {!blogView && (
                  <div className="row pt-5">
                    <div
                      onClick={handleBlogView}
                      className="col-12 col-md-6 col-lg-4 mb-3"
                    >
                      <Card className="border-0 shadow-sm card-bg">
                        <Card.Img variant="top" src={Blog1} />
                        <Card.Body className="px-4 py-4 ">
                          <Card.Title className="fs-4 fw-bold">
                            Why you should be interested in the increase in
                            health...
                          </Card.Title>
                          <Card.Text className="border-bottom pb-5 mb-5">
                            <div className="row justify-content-between py-4">
                              <div className="col-6 d-flex align-items-center">
                                <img src={CalendarIcon} alt="icon" />
                                <span className="ms-2">February 12, 2023</span>
                              </div>
                              <div className="col-6 d-flex align-items-center">
                                <img src={ClockIcon} alt="icon" />
                                <span className="ms-2">2 days ago</span>
                              </div>
                            </div>
                            In health insurance contributions, the additional
                            contribution will increase from 2023....
                          </Card.Text>
                          <Button className="bg-green px-3 py-2 text-white fw-bold border-0">
                            Read more{" "}
                            <img className="ms-2" src={RightArrow} alt="icon" />
                          </Button>
                        </Card.Body>
                      </Card>
                    </div>
                    <div
                      onClick={handleBlogView}
                      className="col-12 col-md-6 col-lg-4 mb-3"
                    >
                      <Card className="border-0 shadow-sm card-bg">
                        <Card.Img variant="top" src={Blog2} />
                        <Card.Body className="px-4 py-4 ">
                          <Card.Title className="fs-4 fw-bold">
                            That's how much wealth you should have at your age
                          </Card.Title>
                          <Card.Text className="border-bottom pb-5 mb-5">
                            <div className="row justify-content-between py-4">
                              <div className="col-6 d-flex align-items-center">
                                <img src={CalendarIcon} alt="icon" />
                                <span className="ms-2">February 12, 2023</span>
                              </div>
                              <div className="col-6 d-flex align-items-center">
                                <img src={ClockIcon} alt="icon" />
                                <span className="ms-2">2 days ago</span>
                              </div>
                            </div>
                            We compare ourselves very regularly - and with a
                            wide variety of things. When it...
                          </Card.Text>
                          <Button className="bg-green px-3 py-2 text-white fw-bold border-0">
                            Read more{" "}
                            <img className="ms-2" src={RightArrow} alt="icon" />
                          </Button>
                        </Card.Body>
                      </Card>
                    </div>
                    <div
                      onClick={handleBlogView}
                      className="col-12 col-md-6 col-lg-4 mb-3"
                    >
                      <Card className="border-0 shadow-sm card-bg">
                        <Card.Img variant="top" src={Blog1} />
                        <Card.Body className="px-4 py-4 ">
                          <Card.Title className="fs-4 fw-bold ">
                            That's how much wealth you should have at your age
                          </Card.Title>
                          <Card.Text className="border-bottom pb-5 mb-5">
                            <div className="row justify-content-between py-4">
                              <div className="col-6 d-flex align-items-center">
                                <img src={CalendarIcon} alt="icon" />
                                <span className="ms-2">February 12, 2023</span>
                              </div>
                              <div className="col-6 d-flex align-items-center">
                                <img src={ClockIcon} alt="icon" />
                                <span className="ms-2">2 days ago</span>
                              </div>
                            </div>
                            The saving behavior of people living in Germany is a
                            reflection of the ...
                          </Card.Text>
                          <Button className="bg-green px-3 py-2 text-white fw-bold border-0">
                            Read more{" "}
                            <img className="ms-2" src={RightArrow} alt="icon" />
                          </Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                )}
              </Tab>
              <Tab
                eventKey="Tab3"
                title="Checking Accounts & Credit Cards"
                className="border-0"
              >
                {!blogView && (
                  <div className="row pt-5">
                    <div
                      onClick={handleBlogView}
                      className="col-12 col-md-6 col-lg-4 mb-3"
                    >
                      <Card className="border-0 shadow-sm card-bg">
                        <Card.Img variant="top" src={Blog1} />
                        <Card.Body className="px-4 py-4 ">
                          <Card.Title className="fs-4 fw-bold">
                            Why you should be interested in the increase in
                            health...
                          </Card.Title>
                          <Card.Text className="border-bottom pb-5 mb-5">
                            <div className="row justify-content-between py-4">
                              <div className="col-6 d-flex align-items-center">
                                <img src={CalendarIcon} alt="icon" />
                                <span className="ms-2">February 12, 2023</span>
                              </div>
                              <div className="col-6 d-flex align-items-center">
                                <img src={ClockIcon} alt="icon" />
                                <span className="ms-2">2 days ago</span>
                              </div>
                            </div>
                            In health insurance contributions, the additional
                            contribution will increase from 2023....
                          </Card.Text>
                          <Button className="bg-green px-3 py-2 text-white fw-bold border-0">
                            Read more{" "}
                            <img className="ms-2" src={RightArrow} alt="icon" />
                          </Button>
                        </Card.Body>
                      </Card>
                    </div>
                    <div
                      onClick={handleBlogView}
                      className="col-12 col-md-6 col-lg-4 mb-3"
                    >
                      <Card className="border-0 shadow-sm card-bg">
                        <Card.Img variant="top" src={Blog2} />
                        <Card.Body className="px-4 py-4 ">
                          <Card.Title className="fs-4 fw-bold">
                            That's how much wealth you should have at your age
                          </Card.Title>
                          <Card.Text className="border-bottom pb-5 mb-5">
                            <div className="row justify-content-between py-4">
                              <div className="col-6 d-flex align-items-center">
                                <img src={CalendarIcon} alt="icon" />
                                <span className="ms-2">February 12, 2023</span>
                              </div>
                              <div className="col-6 d-flex align-items-center">
                                <img src={ClockIcon} alt="icon" />
                                <span className="ms-2">2 days ago</span>
                              </div>
                            </div>
                            We compare ourselves very regularly - and with a
                            wide variety of things. When it...
                          </Card.Text>
                          <Button className="bg-green px-3 py-2 text-white fw-bold border-0">
                            Read more{" "}
                            <img className="ms-2" src={RightArrow} alt="icon" />
                          </Button>
                        </Card.Body>
                      </Card>
                    </div>
                    <div
                      onClick={handleBlogView}
                      className="col-12 col-md-6 col-lg-4 mb-3"
                    >
                      <Card className="border-0 shadow-sm card-bg">
                        <Card.Img variant="top" src={Blog1} />
                        <Card.Body className="px-4 py-4 ">
                          <Card.Title className="fs-4 fw-bold ">
                            That's how much wealth you should have at your age
                          </Card.Title>
                          <Card.Text className="border-bottom pb-5 mb-5">
                            <div className="row justify-content-between py-4">
                              <div className="col-6 d-flex align-items-center">
                                <img src={CalendarIcon} alt="icon" />
                                <span className="ms-2">February 12, 2023</span>
                              </div>
                              <div className="col-6 d-flex align-items-center">
                                <img src={ClockIcon} alt="icon" />
                                <span className="ms-2">2 days ago</span>
                              </div>
                            </div>
                            The saving behavior of people living in Germany is a
                            reflection of the ...
                          </Card.Text>
                          <Button className="bg-green px-3 py-2 text-white fw-bold border-0">
                            Read more{" "}
                            <img className="ms-2" src={RightArrow} alt="icon" />
                          </Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                )}
              </Tab>
            </Tabs>
            {blogView && (
              <div className="blog-detail pt-5">
                <div className="d-block d-md-flex justify-content-between align-items-center">
                  <h2 className="fs-1 fw-600 text-black">
                    That's how much wealth you should have at your age
                  </h2>
                  <div className="my-md-0 my-4">
                    <NavLink t0="#">
                      <FiShare2 className="share-icon" />
                      <span className="fw-500 text-black ms-2">Share Post</span>
                    </NavLink>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-9">
                    <div className="blog-user">
                      <div className=" d-flex align-items-center ">
                        <img
                          width={43}
                          height={43}
                          className="me-3 rounded-pill"
                          src={UserIcon}
                          alt="img"
                        />
                        <div>
                          <h4 className="m-0">
                            meo
                            <span className="fs-12 px-2 py-1 rounded-1 fw-normal bg-gray ms-1 fw-300">
                              Admin
                            </span>
                          </h4>
                          <p className="fw-500 m-0">
                            Feb 23 |
                            <span className="text-green">
                              1 min reading time
                            </span>
                          </p>
                        </div>
                      </div>
                      <p className="p-heading mt-3">
                        We compare ourselves very regularly - and with a wide
                        variety of things. When it comes to finances, we will
                        also compare below. In a nice statistical survey by the
                        IW Cologne, different age groups were examined and their
                        net financial assets compared.
                      </p>
                      <img
                        className="mb-5 d-block w-100"
                        src={BlogView1}
                        alt="img not found"
                      />
                      <img
                        className="mb-5 d-block w-100"
                        src={BlogView2}
                        alt="img not found"
                      />
                      <img
                        className="mb-5 d-block w-100"
                        src={BlogView3}
                        alt="img not found"
                      />
                      <div className="contact-us-sec w-100">
                        <Form.Label className="fs-2 text-black fw-500 text-capitalize">
                          Comments
                        </Form.Label>
                        <div class="form-floating">
                          <textarea
                            rows={10}
                            class="form-control bg-gray radius-18"
                            placeholder="Write Comments"
                          ></textarea>
                        </div>

                        <div className="col-md-3 mb-5 mt-4">
                          <Button className="get-started-btn bg-green rounded-pill text-white py-2 px-md-5 border-0 py-md-3 fw-600 w-75 btn-100">
                            Post
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="search-box position-absolute top-0 end-0 ">
              <form class="d-flex">
                <div className="position-relative">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className=" search-icon position-absolute">
                    <CiSearch />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {blogView && <FinancialGoal />}
      <StayInformed />
      <Cookies />
    </>
  );
};

export default Counsellor;
