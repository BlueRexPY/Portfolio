import React from "react";

const Navigation = () => {
  return (
    <div className="row nav">
      <div className="row">
        <a
          target="_blank"
          href="https://mail.google.com/mail/?view=cm&source=mailto&to=ruslanryscovbluerex@gmail.com"
        >
          EMAIL
        </a>
        <a target="_blank" href="https://github.com/BlueRexPY/">
          GITHUB
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ruslan-rystsov-088b61206/"
        >
          LINKEDIN
        </a>
        <a target="_blank" href="https://t.me/Blex_PY">
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
