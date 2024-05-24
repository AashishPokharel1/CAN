import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Search = () => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <img src={logo} alt="" />
          </div>
          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search.........." />
            <span>All category</span>
          </div>
          <div className="icon f_flex width">
            <p style={{ marginRight: "15px" }}>LOGIN</p>{" "}
            <i className="fa fa-user icon_circle" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
