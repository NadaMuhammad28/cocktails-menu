import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

const SharedLayout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
    </React.Fragment>
  );
};

export default SharedLayout;
