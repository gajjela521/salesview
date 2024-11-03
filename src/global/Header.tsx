import React from "react";
import './Header.css';
import ResponsiveAppBar from "./AppBar";

export const Header = (): JSX.Element => {
  return (
    <>
      <div className="mainheader">
          <h2>PayTm Money</h2>
          <ResponsiveAppBar/>
      </div>
    </>
  );
};
