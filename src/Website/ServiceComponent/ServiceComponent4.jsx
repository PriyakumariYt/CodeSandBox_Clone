import React from 'react'
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const ServiceComponent4 = () => {
  return (
    <>
      <div className="ServiceContainer4">
        <div className="Servicebox4">
          <div className="Service4">
            <h1>microVMs</h1>
            <h2>Your code, powered by the cloud.</h2>
            <p>
              CodeSandbox keeps your code running on a fast microVM that spins
              up any dev environment within two seconds.
              <br />
            </p>
            <p>
              Run virtually anything and access it from any device. Anything
              that runs on local, runs on CodeSandbox.
            </p>

            <h6>
              Learn More <KeyboardArrowRightIcon />
            </h6>
          </div>
          <div className="Service4">
            <img
              src="https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdesktop.c9ff541a.png&w=3840&q=75"
              alt=""
              className="ServiceImg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceComponent4
