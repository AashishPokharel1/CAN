import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label htmlFor="">+977 981231231</label>
            <i className="fa fa-envelope"></i>
            <label htmlFor="">cricketnepal@gmail.com</label>
          </div>
          <div className="right row RText">
            <label>FAQ's</label>
            <label>Helps</label>
            <label>Matches</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
