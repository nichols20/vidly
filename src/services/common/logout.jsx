import React, { Component } from "react";

const Logout = () => {
  localStorage.removeItem("token");
  window.location = "/";
};

export default Logout;
