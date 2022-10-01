import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Portfolio({ currentCategory }) {
  return (
    <section className="work-section">
    <h1>Projects</h1>
      <section className="work">
        <div className="work-box dnd">
          <div>
            <a
              href="https://dexzax.github.io/dnd-character-creation/"
              target="_blank"
            >
              D&D Group Project
            </a>
            <h4 className="PText">Javascript/API/CSS Frameworks</h4>
          </div>
        </div>
        <div className="work-box dnd">
          <div>
            <a
              href="https://dexzax.github.io/dnd-character-creation/"
              target="_blank"
            >
              D&D Group Project
            </a>
            <h4 className="PText">Javascript/API/CSS Frameworks</h4>
          </div>
        </div>
        <div className="work-box dnd">
          <div>
            <a
              href="https://dexzax.github.io/dnd-character-creation/"
              target="_blank"
            >
              D&D Group Project
            </a>
            <h4 className="PText">Javascript/API/CSS Frameworks</h4>
          </div>
        </div>
        <div className="work-box dnd">
          <div>
            <a
              href="https://dexzax.github.io/dnd-character-creation/"
              target="_blank"
            >
              D&D Group Project
            </a>
            <h4 className="PText">Javascript/API/CSS Frameworks</h4>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Portfolio;
