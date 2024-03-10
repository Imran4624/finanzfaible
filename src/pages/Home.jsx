import HomeBannerImage from "../assets/images/home-banner.svg";

import cardImage1 from "../assets/images/saving-and-investment.svg";
import cardImage2 from "../assets/images/account-and-card.svg";
import cardImage3 from "../assets/images/mastercard.svg";
import CalculatorImage from "../assets/images/calculator-img.svg";
import CalculatorImage2 from "../assets/images/calculator-img2.svg";
import FinanceGoal from "../assets/images/finance-and-goal.svg";
import FixedCalculator from "../assets/images/fixed-calculator.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import { Button, Form } from "react-bootstrap";
import Blogs from "../components/Blogs";
import StayInformed from "../components/StayInformed";
import Cookies from "../components/Cookies";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    spaceBetween: 20,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="banner-sec home-banner">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-7 col-lg-5 col-mb-5 mb-md-0">
              <h1 className="text-white fw-500 ">
                Choosing a Financial Advisor
              </h1>
              <p className="text-white mt-3">
                Find answers to your most important{" "}
                <br className="d-md-block d-none"></br> financial topics.
              </p>
              <div className="d-block d-md-flex mt-4">
                <Button className="btn-100 get-started-btn bg-white text-green px-3 px-lg-5 py-2 py-lg-3 border-0 me-3 fw-bold mb-md-0 mb-3">
                  Get Started Now
                </Button>
                <Button className="btn-100 bg-transparent  text-white px-3 py-2 px-lg-5 py-lg-3 border border-white fw-bold">
                  Live Demo
                </Button>
              </div>
            </div>
            <div className="col-md-5">
              <img
                className="d-block mx-auto w-100 mx-md"
                src={HomeBannerImage}
                alt="bannerImage"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="cards-sec">
        <div className="container">
          <div className="row pb-5">
            <Slider {...settings}>
              <div>
                <div className="card-one text-center">
                  <div className="card-img-custom">
                    <img src={cardImage1} alt="icon" />
                  </div>
                  <h4 className="text-green fw-600 mt-3 mb-4">
                    Saving & investing
                  </h4>
                  <p className="m-0 mx-5 pb-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the.
                  </p>
                  <Button className="get-started-btn bg-transparent border-0 text-green fw-bold pt-4">
                    Read more
                  </Button>
                </div>
              </div>
              <div>
                <div className="card-one text-center">
                  <div className="card-img-custom">
                    <img src={cardImage2} alt="icon" />
                  </div>
                  <h4 className="text-green fw-600 mt-3 mb-4">
                    Saving & investing
                  </h4>
                  <p className="m-0 mx-5 pb-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the.
                  </p>
                  <Button className="get-started-btn bg-transparent border-0 text-green fw-bold pt-4">
                    Read more
                  </Button>
                </div>
              </div>
              <div>
                <div className="card-one text-center">
                  <div className="card-img-custom">
                    <img src={cardImage3} alt="icon" />
                  </div>
                  <h4 className="text-green fw-600 mt-3 mb-4">
                    Saving & investing
                  </h4>
                  <p className="m-0 mx-5 pb-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the.
                  </p>
                  <Button className="get-started-btn bg-transparent border-0 text-green fw-bold pt-4">
                    Read more
                  </Button>
                </div>
              </div>
              <div>
                <div className="card-one text-center">
                  <div className="card-img-custom">
                    <img src={cardImage1} alt="icon" />
                  </div>
                  <h4 className="text-green fw-600 mt-3 mb-4">
                    Saving & investing
                  </h4>
                  <p className="m-0 mx-5 pb-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the.
                  </p>
                  <Button className="get-started-btn bg-transparent border-0 text-green fw-bold pt-4">
                    Read more
                  </Button>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section className="household-sec">
        <div className="container">
          <div className="row align-items-center py-2 py-md-5 justify-content-between flex-column-reverse flex-md-row">
            <div className="col-md-6">
              <img
                className="d-block mx-auto w-100 mx-md"
                src={CalculatorImage}
                alt="img not found"
              />
            </div>
            <div className="col-md-5 mb-md-0 mb-5">
              <h2 className="heading-main text-green text-capitalize mb-4">
                How to use calculators
              </h2>
              <p className="p-heading fw-600 text-capitalize pe-5">
                With our financial calculators you can easily calculate
                interest, debt, your financial goals and much more!
              </p>
              <Button className="bg-green text-white rounded-pill px-4 padding-y-3 border-0 mt-3 fw-600">
                Check financial calculators
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="household-sec">
        <div className="container">
          <div className="row align-items-center  py-5 justify-content-between">
            <div className="col-md-5 text-start text-md-end mb-md-0 mb-5">
              <h2 className="heading-main text-green text-capitalize mb-4 text-start text-md-end">
                Electricity and gas provider comparison
              </h2>
              <p className="p-heading fw-600 text-capitalize pe-5 pe-md-0 ps-md-5 text-start text-md-end">
                It is currently more important than ever to check your
                electricity and gas contracts
              </p>
              <Button className=" bg-green text-white rounded-pill px-3 px-md-2 px-lg-4 padding-y-3 border-0 mt-3 fw-600">
                Compare electricity or gas contract
              </Button>
            </div>
            <div className="col-md-6">
              <img
                className="d-block mx-auto w-100 mx-md"
                src={CalculatorImage2}
                alt="img not found"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="household-sec">
        <div className="container">
          <div className="row align-items-center py-5 justify-content-between flex-column-reverse flex-md-row">
            <div className="col-md-6">
              <img
                className="d-block mx-auto w-100 mx-md"
                src={FinanceGoal}
                alt="img not found"
              />
            </div>
            <div className="col-md-5 mb-md-0 mb-5">
              <h2 className="heading-main text-green text-capitalize mb-4">
                Plan your own finances and goals.
              </h2>
              <p className="p-heading fw-600 text-capitalize pe-5">
                In order to get a concrete overview of your finances, you need
                reliable calculators.
              </p>
              <Button className="bg-green text-white rounded-pill px-4 padding-y-3 border-0 mt-3 fw-600">
                Plane your goal
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="fixed-calculation my-5">
        <div className="row align-items-center border-top-bottom">
          <div className="col-md-6 bg-green px-5 px-md-2 px-lg-5 fixed-form">
            <div className="row justify-content-center">
              <div className="col-md-11">
                <h6 className="body-heading text-white mb-4">
                  fixed deposit calculator
                </h6>
                <Form>
                  <div className="row align-items-end ">
                    <div className="col-md-6 col-xl-4 mb-5">
                      <Form.Group md="4">
                        <Form.Label className="text-white fw-500 text-uppercase">
                          initial capital
                        </Form.Label>
                        <Form.Control required type="text" />
                      </Form.Group>
                    </div>
                    <div className="col-md-6 col-xl-4 mb-5">
                      <Form.Group md="4">
                        <Form.Label className="text-white fw-500 text-uppercase">
                          Duration
                        </Form.Label>
                        <Form.Control required type="text" />
                      </Form.Group>
                    </div>
                    <div className="col-md-6 col-xl-4 mb-5">
                      <Form.Group md="4">
                        <Form.Label className="text-white fw-500 text-uppercase">
                          interest rate
                        </Form.Label>
                        <Form.Control required type="text" />
                      </Form.Group>
                    </div>
                    <div className="col-md-6 col-xl-4 mb-5">
                      <Form.Group md="4">
                        <Form.Label className="text-white fw-500 text-uppercase">
                          interest payment
                        </Form.Label>
                        <Form.Control required type="text" />
                      </Form.Group>
                    </div>
                    <div className="col-md-6 col-xl-4 mb-5">
                      <Form.Group className="mb-2">
                        <Form.Check
                          className="text-white d-flex align-items-center fs-14"
                          required
                          label="Take taxes into account"
                        />
                      </Form.Group>
                    </div>
                    <div className="col-md-6 col-xl-4 mb-5">
                      <Button className="get-started-btn bg-white rounded-pill text-green px-5 border-0 py-2 fw-600 w-100">
                        Calculate
                      </Button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="col-md-6 bg-white px-5 d-none d-md-block ">
            <img
              className="d-block mx-auto w-100 mx-md"
              src={FixedCalculator}
              alt="img"
            />
          </div>
        </div>
      </section>

      <Blogs />

      <StayInformed />
      <Cookies />
    </>
  );
};

export default Home;
