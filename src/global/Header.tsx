import React from "react";
import './Header.css';
import ResponsiveAppBar from "./AppBar";
import perpendicularlogo from './assets/perpendicularlogo.jpeg';

export const Header = (): JSX.Element => {
  return (
    <>
      <div className="mainheader" style={{ display: 'flex', alignItems: 'center' }} >
        <img src={perpendicularlogo} alt="perpendicular logo" className="logo" />
        <h2><span className="orange-text">Perpendicular</span> Money</h2>
      </div>
      <ResponsiveAppBar />
    </>
  );
};
