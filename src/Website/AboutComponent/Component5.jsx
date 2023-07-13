import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import DownloadIcon from "@mui/icons-material/Download";

const Component5 = () => {
  return (
    <>
      <div className="AboutContainer5">
        <div className="AboutBox5">
          {/* <CheckBoxOutlineBlankIcon
            className="sandboxlog"
            style={{ color: "white", fontSize: "20rem" }}
          /> */}
          <img
            src="https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffake.d300dd8f.png&w=828&q=75"
            alt=""
            className="imgSet"
          />

          <h1>Press Kit</h1>
          <p>
            Writing about <br /> CodeSandbox?
          </p>
          <h3>
            Get our press kit, which contains logos and <br />
            product shots to use in web and print media.
          </h3>
          <div className="Aboutbox5btn">
            <h6 style={{ color: "#FFFF66	" }}>
              Download Press Kit <DownloadIcon />
            </h6>
            <h6 style={{ color: "grey" }}>
              Acces Brand Resource <ArrowOutwardIcon />
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component5;
