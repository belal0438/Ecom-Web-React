import React from "react";
import { Button, Image } from "react-bootstrap";
import PalyBtnImg from "../../assets/play-button.png";
const AlbumBtn = () => {
  return (
    <div>
      <div
        style={{ background: "rgb(119, 119, 119)" }}
        className="pb-5 pt-2 text-center">
        <div>
          <Button variant="outline-info" style={{ background: "transparent" }}>
            <h4 className="text-light">Get our latest Album</h4>
          </Button>{" "}
        </div>
        <div className="mt-3">
          <Button
            variant="outline-info"
            className="rounded-circle"
            style={{ background: "transparent", border: "none" }} // Set background to transparent and remove border
          >
            <Image
              src={PalyBtnImg}
              alt="Play"
              style={{ width: "60px", height: "60px" }}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AlbumBtn;
