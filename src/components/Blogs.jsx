import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Blog1 from "../assets/images/blog-img.png";
import Blog2 from "../assets/images/blog-img2.png";
import ClockIcon from "../assets/images/clock-icon.svg";
import CalendarIcon from "../assets/images/calendar-icon.svg";
import RightArrow from "../assets/images/right-arrow.svg";

const Blogs = () => {
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
    <section className="blog-sec pt-4 pb-5">
      <div className="container">
        <span className="text-green text-md-center d-block fw-500">
          Latest News
        </span>
        <h3 className="body-heading text-md-center">
          Check back here for News updates
        </h3>
        <div className="row pt-5">
          <div
            onClick={handleBlogView}
            className="col-12 col-md-6 col-lg-4 mb-3"
          >
            <Card className="border-0 shadow-sm card-bg">
              <Card.Img variant="top" src={Blog1} />
              <Card.Body className="px-4 py-4 ">
                <Card.Title className="fs-4 fw-bold">
                  Why you should be interested in the increase in health...
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
                  In health insurance contributions, the additional contribution
                  will increase from 2023....
                </Card.Text>
                <Button className="bg-green px-3 py-2 text-white fw-bold border-0">
                  Read more <img className="ms-2" src={RightArrow} alt="icon" />
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
                  We compare ourselves very regularly - and with a wide variety
                  of things. When it...
                </Card.Text>
                <Button className="bg-green px-3 py-2 text-white fw-bold border-0">
                  Read more <img className="ms-2" src={RightArrow} alt="icon" />
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
                  Read more <img className="ms-2" src={RightArrow} alt="icon" />
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
