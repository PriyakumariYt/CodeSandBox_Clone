import React from 'react'
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ServiceComponent2 = () => {
  return (
    <>
      <div className="ServiceContainer2">
        <div className="Servicebox2">
          <div className="Service1">
            <h1>Powerful DevTools</h1>
            <h2>
              What if you never again had to write yarn start, npm run, etc.?
            </h2>
            <p>
              Our DevTools allow you to create shortcuts to run any command,
              both at startup, file change or with a click.
              <br />
            </p>
            <p>
              Create standardized dev containers and automate tasks for starting
              development servers, lint, build, terminals, database servers and
              much more.
            </p>

            <h6>
              Explore DevTools <KeyboardArrowRightIcon />
            </h6>
          </div>
          <div className="Service1">
            <img
              src="https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage.4a712740.png&w=3840&q=75"
              alt=""
              className="ServiceImg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceComponent2
