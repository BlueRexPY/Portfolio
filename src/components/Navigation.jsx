import React from "react";

const Navigation = () => {
  return (
    <div className="row nav">
      <div className="row">
        <a
          target="_blank"
          href="https://mail.google.com/mail/?view=cm&source=mailto&to=ruslanryscovbluerex@gmail.com"
          rel="noreferrer"
        >
          EMAIL
        </a>
        <a
          target="_blank"
          href="https://github.com/BlueRexPY/"
          rel="noreferrer"
        >
          GITHUB
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ruslan-rystsov-088b61206/"
          rel="noreferrer"
        >
          LINKEDIN
        </a>
        <a target="_blank" href="https://t.me/Blex_PY" rel="noreferrer">
          TELEGRAM
        </a>
      </div>
      <div className="row" id="hide">
        <a href="#about">ABOUT</a>
      </div>
      <div className="row" id="hide">
        <a href="#projects">PROJECTS</a>
      </div>
    </div>
  );
};

export default Navigation;
