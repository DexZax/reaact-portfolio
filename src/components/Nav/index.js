import React from "react";

function Nav() {
    const categories = [
        
        { name: "Portfolio", description: "All of my projects" },
        { name: "Resume", description: "my resume" },
        
      ];
  return (
    <header>
      <h2>
        <a href="/">
          Dexter Zacour
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About me</a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            <li className="mx-1" key={category.name}>
              <span>{category.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
