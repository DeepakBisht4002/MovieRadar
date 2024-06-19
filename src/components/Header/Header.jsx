import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <div onClick={() => window.scrollTo(0, 0)} className="header">
        🎬 MovieHub 📽️
        <span className="scroll_pogress"></span>
      </div>
    </>
  );
}

export default Header;
