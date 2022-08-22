import React from "react";
import ProjectItem from "../components/ProjectItem";
import { PROJECTS_STORE, SKILLS_CODE, SKILLS_TOOLS } from "../utils/consts";
import Navigation from "../components/Navigation";
const HomePage = () => {
  return (
    <>
      <Navigation />
      <div>
        <div className="fullScrean">
          <h1 className="MainText">RUSLAN RYSTSOV</h1>
          <img
            draggable="false"
            className="ruslanImg"
            src="https://cdn.discordapp.com/attachments/736633764930912257/1010706044093202472/image_16.png"
            alt="ruslan"
          />
        </div>
        <div className="fullScrean row se" id="about">
          <img
            draggable="false"
            className="reactImg"
            src="https://cdn.discordapp.com/attachments/736633764930912257/1010954736108839012/react.png"
            alt="React"
          />
          <div className="col textBox">
            <h3>
              Hi there, <br /> I'm <b>Ruslan</b> - Frontend Developer
            </h3>
            <p>
              About me:
              <br />
              I appreciate the opportunity for <br />
              development and friendly staff.
              <br />
              I also have experience with Python.
              <br />
            </p>
            <p>
              <b>Language skills:</b>
              <br />
              Ukrainian – native
              <br />
              English - B2
              <br />
            </p>
            <p>
              <b>Code Skills:</b>
              <br />
            </p>
            <div className="skillList">
              {SKILLS_CODE.map((e) => {
                return <h6 className="skillItem">{e}</h6>;
              })}
            </div>
            <p>
              <b>Tools Skills:</b>
              <br />
            </p>
            <div className="skillList">
              {SKILLS_TOOLS.map((e) => {
                return <h6 className="skillItem">{e}</h6>;
              })}
            </div>
          </div>
        </div>
        <div id="projects" className="fullScreanAuto projectList row wrap">
          {PROJECTS_STORE.map((e) => {
            return <ProjectItem project={e} />;
          })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
