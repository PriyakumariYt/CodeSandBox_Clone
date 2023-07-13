import React from 'react'
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const ServiceComponent3 = () => {
  return (
    <>
      <div className="ServiceContainer3">
        <div className="Servicebox3">
          <div className="Service3">
            <img
              src="https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdesktop.b17f0fc0.png&w=1920&q=75"
              alt=""
              className="ServiceImg"
            />
          </div>
          <div className="Service3">
            <h1>GitHub Integration</h1>
            <h2>
              Supercharge your git workflow with live dev environments for PRs.
            </h2>
            <p>
              CodeSandbox keeps every branch and pull request running in a
              powerful cloud environment, behind a URL.
            </p>
            <br />
            <p>
              Inside, everything is pre-configured and running alongside a
              preview. Run tests, review the code and commit changes with a
              click.
            </p>

            <h6>
              Explore Our Github App <KeyboardArrowRightIcon />
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceComponent3
