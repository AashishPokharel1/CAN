import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Search = () => {
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <img src={logo} alt="" />
          </div>

          <div className="search-box f_flex">
            <div className="fa fa-search">
              <input type="text" placeholder="Search.........." />
              <span>All category</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
