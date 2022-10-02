import react from "react";

function Resume() {
    return (
      <section>
        <h1 id="about">Resume</h1>
        <div>
        <h5>Download my resume:</h5>
        <a href= "https://docs.google.com/document/d/1nTxW_UXW6eXhMOtxN0QdQ25Asd7tTVMY1rJRyZG8xCM/edit?usp=sharing" target = "_blank">Resume</a>
        </div>
        <div>
        <h5>Front-end Proficencies</h5>
        <ul>
          <li>-HTML</li>
          <li>-CSS</li>
          <li>-JavaScript</li>
          <li>-JQuery</li>
          <li>-Responsive Design</li>
          <li>-React</li>
          <li>-Bootstrap</li>
        </ul>
        </div>
        <div>
          <h5>Back-End Proficencies</h5>
          <ul>
            <li>-API's</li>
            <li>-Node</li>
            <li>-Express</li>
            <li>-MySQL Sequalize</li>
            <li>-MongoDB, Mongoose</li>
            <li>-REST</li>
            <li>-GraphQL</li>
          </ul>
        </div>
      </section>
    );
  }

export default Resume;