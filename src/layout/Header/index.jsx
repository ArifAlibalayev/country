import React, { useEffect } from "react";
import "./index.scss";

function Header() {
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    }
  }, [theme]);

  function handleTheme() {
    if (document.body.classList.contains("dark")) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    document.body.classList.toggle("dark");
  }
  return (
    <header id="header">
      <nav id="navigation">
        <div className="title">
          <h1>Where in the world?</h1>
        </div>
        <div className="darkmode">
        <i className="fa-regular fa-moon"></i>
            <button onClick={handleTheme}>Dark Mode</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
