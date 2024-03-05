import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  function handleScrollPercentage() {
    const howMuchScrolled =
      window.scrollY ||
      document.body.scrollTop ||
      document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100 + "%");
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);
  return (
    <>
      <div onClick={() => window.scrollTo(0, 0)} className="header">
      🎬 MovieRadar 📽️  
        <span className="scroll_pogress" style={{ width: `${scrollPercentage}` }}></span>
      </div>
    </>
  );
}

export default Header;
