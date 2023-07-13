import React from "react";

const Component3 = () => {
  return (
    <>
      <div className="container3">
        {/* <div className="box3img1">
       
        </div>
        <div className="box3img2">

        </div> */}
        <div className="box3">
          <img
            src="https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsandboxes.612e2c7b.jpg&w=750&q=75"
            alt="Snow"
          />

          <div className="centered">
            <h1>
              Prototype <br /> Your Ideas
            </h1>
            <p>Start faster using one of our 100+ templates.</p>
            <div className="box3btn">
              <h6 style={{ color: "yellow" }}>Learn More {"\uD83E\uDC92"}</h6>
            </div>
          </div>
        </div>
        <div className="box3">
          <img
            src="https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flearn.c803667f.jpg&w=750&q=75"
            alt=""
          />

          <div className="centered">
            <h1>
              Learn & <br />
              Experiment
            </h1>
            <p>Try frameworks and experiment with new tools.</p>
            <div className="box3btn">
              <h6 style={{ color: "yellow" }}>Learn More {"\uD83E\uDC92"}</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component3;
