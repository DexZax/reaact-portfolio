import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [categories] = useState([
    {
      name: "Projects",
      description: "All of my works throughout the course",
    },
  ]);

  const [currentPage, setCurrentPage] = useState("About");

  function renderPage () {
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <About />;
  }

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Nav>
      <main>
        <div>
          {renderPage()}
        </div>
      </main>
      <footer>
        <div><a href="https://www.linkedin.com/in/dexter-zacour-b64878251/" target = "_blank">linkedin</a></div>
        <div><a href="https://github.com/DexZax" target = "_blank">GitHub</a></div>
      </footer>
    </div>
  );
}

export default App;
