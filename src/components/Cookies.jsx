import React from "react";
import { Button } from "react-bootstrap";
import { RxCross1 } from "react-icons/rx";

const Cookies = () => {
  return (
    <div className="mx-md-0 mx-2 rounded-2 rounder-md-0 fixed-box bg-black py-3 position-fixed bottom-0 start-0 end-0 zindex-9">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-white fs-12 m-0 d-none d-md-block ">
            We use cookies on our website to understand how you use it. By
            clicking "Agree" you consent to their use. Data protection
          </p>
          <p className="text-white fs-12 m-0 d-block d-md-none">
            Finanzfaible use cookies Learn
          </p>
          <div className="d-flex align-items-center">
            <Button className="d-md-block d-none rounded-0 border-0 text-decoration-underline bg-transparent fw-bold text-white px-2 py-2">
              Ideas
            </Button>
            <Button className="rounded-0 bg-transparent border border-white text-white fw-500 px-1 px-md-3 py-1 py-md-2 ms-2 me-3">
              Reject all
            </Button>
            <Button className="rounded-0 bg-white text-green border border-white fw-500 px-1 px-md-3 py-1 py-md-2 get-started-btn">
              Agree
            </Button>
            <RxCross1 className="cross-icon d-md-block d-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
