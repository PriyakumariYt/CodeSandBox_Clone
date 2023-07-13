import React from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="col">
          <div className="row">
            <CheckBoxOutlineBlankIcon
              className="sandboxlog"
              style={{ color: "white", fontSize: "40px" }}
            />
          </div>
          <div className="row"></div>
          <div className="row">
            <h5>Use cases</h5>
            <h5>Code in Sandboxes</h5>
            <h5>Learn & Experiment</h5>
            <h5>coding Exercise</h5>
            <h5>FullStack development</h5>
            <h5>Code Review</h5>
            <h5>feedback review</h5>
          </div>
          <div className="row">
            <h5>Ecosystem</h5>
            <h5>Communications Office</h5>
            <h5>Features</h5>
            <h5>vs code Extension</h5>
            <h5>Sandbox</h5>
            <h5>Status Pricing</h5>
          </div>
          <div className="row">
            <h5>Explore</h5>
            <h5>Discover</h5>
            <h5>Changelog</h5>
            <h5>Documentation</h5>
            <h5>Blog</h5>
          </div>
          <div className="row">
            <h5>Company</h5>
            <h5>About</h5>
            <h5>Support</h5>
            <h5>Brand Kit</h5>
            <h5>Career</h5>
          </div>
        </div>
        <hr />
        <div className="footer2">
          <h6>
            Copyright © 2023 CodeSandbox B.V. All rights reserved.
            <br />
            Term of Use | Privacy Policy
          </h6>
          {/* <GitHubIcon /> */}
          {/* <TwitterIcon /> */}
          <div className="icons">
            <i class="fa-brands fa-github"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-discord"></i>
            <i class="fa-brands fa-youtube"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
