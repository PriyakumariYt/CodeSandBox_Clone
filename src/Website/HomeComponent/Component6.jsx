import React from 'react'
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DownloadIcon from "@mui/icons-material/Download";
const Component6 = () => {
  return (
    <>
      <div className="container6">
        <div className="box6">
          <div className="box6_1">
            <div className="box6_2">
              <div className="box6_3"></div>
            </div>
          </div>
        </div>
        <div className="imagesContainer">
          <div className="imagecontainer1">
            <img
              src="https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Feditors.3475b465.png&w=3840&q=100"
              alt=""
            />
          </div>
          <div className="imagecontainer1">
            <p>
              Code and collaborate from any editor or device:
              <span> browser, VS Code or iOS.</span>
            </p>
            <p>
              Share a link to your code to get feedback, either async or with a
              <span> live coding </span>
              session.
            </p>
            <h6 style={{ color: "rgb(187, 189, 89)" }}>
              Install Vs code Extension <OpenInNewIcon />
            </h6>
            <h6 style={{ color: "rgb(187, 189, 89)" }}>
              Download iOS App <DownloadIcon />
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Component6
