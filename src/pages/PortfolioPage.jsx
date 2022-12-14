import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PROJECTS_STORE } from "../utils/consts";

const PortfolioPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const project = PROJECTS_STORE.find((e) => e.name === params.name);
  const { name, description, stack, github, live, previwe } = project;
  return (
    <div className="fullScrean projectPage">
      <div>
        <img
          draggable="false"
          src={previwe}
          alt="previwe"
          className="previwe"
        />
      </div>
      <div className="textBoxProject col">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="skillList">
          {stack.map((e) => {
            return <h6 className="skillItem">{e}</h6>;
          })}
        </div>
        <div className="buttonSide">
          {github !== "" ? (
            <a href={github} target="_blank">
              GITHUB
            </a>
          ) : (
            ""
          )}
          {live !== "" ? (
            <a href={live} target="_blank">
              LIVE
            </a>
          ) : (
            ""
          )}
        </div>
        <div className="buttonSide">
          <p onClick={() => navigate("/home/")}>{"<"} Back</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
