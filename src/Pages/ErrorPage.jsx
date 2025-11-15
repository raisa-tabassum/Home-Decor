import React from "react";
import { Outlet, useRouteError } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Navbar></Navbar>
      <div>{error.message}</div>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default ErrorPage;
