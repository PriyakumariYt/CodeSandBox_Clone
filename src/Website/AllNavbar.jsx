import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Website/Home";
import About from "../Website/About";
import Blogs from "../Website/Blogs";
import Contact from "../Website/Contact";


import Mainheader from "../Website/Mainheader";
import Service from "./Service";
const AllNavbar = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainheader />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="*" element={<Error />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AllNavbar;
