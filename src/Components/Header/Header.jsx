import React from "react";
import "./Header.css";
import Navbar from "./Navbar";
import Head from "./Head";
import Search from "./Search";

const Header = () => {
  return (
    <>
      <Head />
      <Navbar />
      <Search />
    </>
  );
};

export default Header;
