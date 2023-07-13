import React from 'react'

import TimerIcon from "@mui/icons-material/Timer";
import SecurityIcon from "@mui/icons-material/Security";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
const ServiceComponent10 = () => {
  return (
    <>
      <div className="ServiceContainer10">
        <div className="ServiceBox10">
          {/* <CheckBoxOutlineBlankIcon
            className="sandboxlog"
            style={{ color: "white", fontSize: "20rem" }}
          /> */}
          <img
            src="https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffake.d300dd8f.png&w=828&q=75"
            alt=""
            className="imgSet"
          />

          <h1>Why CodeSandbox?</h1>
        </div>
        <div className="ServiceCards">
          <div className="ServiceCard">
            <div className="serviceIcon">
              <NoteAltIcon style={{ fontSize: "40px" }} />
            </div>

            <h3>Empowering</h3>
            <p>
              We provide everyone with access to powerful microVMs that allow
              coding anything in the cloud with no limits. Never be restrained
              by your device.
            </p>
          </div>
          <div className="ServiceCard">
            <div className="serviceIcon">
              <SecurityIcon style={{ fontSize: "40px" }} />
            </div>

            <h3>Secure and reliable</h3>
            <p>
              Enjoy peace of mind knowing that your private sandboxes will
              remain private and secure and your repositories will inherit the
              same privacy you have on GitHub.
            </p>
          </div>
          <div className="ServiceCard">
            <div className="serviceIcon">
              <TimerIcon style={{ fontSize: "40px" }} />
            </div>

            <h3>Open source, always</h3>
            <p>
              We will keep open-sourcing cutting-edge technology that empowers
              other developers to learn, experiment and create a better web for
              everyone.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceComponent10
