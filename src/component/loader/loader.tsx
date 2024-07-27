/* eslint-disable jsx-a11y/alt-text */
import React, { FC } from "react";
import "./loader.css"; 

interface ILoader {
    loaderText: string;
  }
const Loader: FC<ILoader> = (loaderText) => {
  return (
    <div className="m-5">
      <span className="loader"></span>
      <h6 className="m-2" style={{ textAlign: "center" }}>
         {/* {loaderText} */} Please Wait...
      </h6>
    </div>
  );
};

export default Loader;
