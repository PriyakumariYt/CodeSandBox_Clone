import React from 'react'
import GitHubIcon from "@mui/icons-material/GitHub";
// import TwitterIcon from "@mui/icons-material/Twitter";
import AddIcon from "@mui/icons-material/Add";

const Component1 = () => {
  return (
    <>
      <div className="container7">
        <img
          // src="https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbackground.d73aac1e.png&w=1920&q=75"
          alt=""
        />
        <div className="box7">
          <h1>
            <span style={{ color: "#D6FB41	" }}>Code.</span>
            <br />
            <span style={{ color: "#E3FF73	" }}>Review.</span>
            <br />
            <span style={{ color: "#F1FFB9" }}>Deploy.</span>
          </h1>
          <p>
            Supercharge your workflow with instant <br />
            cloud development environments.
          </p>
          <div className="box7btn">
            <h6 style={{ color: "#FFFF66	" }}>
              <AddIcon /> Create SandBox
            </h6>
            <h6 style={{ color: "#FFFF66" }}>
              <GitHubIcon /> Import repository
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Component1
