import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";


function Nav(props) {
  const {
    setCurrentPage,
  } = props;


  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Dexter Zacour
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2" onClick={() => setCurrentPage("About")}>
            <a
              href="#about"
            >
              About
            </a>
          </li>
          <li className="mx-2" onClick={() => setCurrentPage("Contact")}>
            <span>Contact</span>
          </li>
          <li className="mx-2" onClick={() => setCurrentPage("Portfolio")}>
            <span>Portfolio</span>
          </li>
          <li className="mx-2" onClick={() => setCurrentPage("Resume")}>
            <span>Resume</span>
          </li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
