import React, { Component } from "react";
import auth from "../authService";

const Logout = () => {
  auth.logoutUser();
  window.location = "/";
};

export default Logout;
