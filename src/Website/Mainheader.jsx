import React from "react";
import { Link, Outlet } from "react-router-dom";
import Headers from "./Headers";
import Footer from "./Footer/Footer";
import "./Footer/Footer.css";

const Mainheader = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
};

export default Mainheader;
