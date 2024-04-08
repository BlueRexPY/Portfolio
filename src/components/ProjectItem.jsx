import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ProjectItem = (props) => {
  const { name, stack, logo } = props.project;
  const navigate = useNavigate();
  return (
    <div className="projectItem">
      <div className="infoSide">
        <div>
          <img
            draggable="false"
            className="projectLogo"
            src={logo}
            alt="logo"
          />
        </div>
        <div className="col fs projectItemSide">
          <h2>{name}</h2>
          <p>{stack.join(", ")}</p>
        </div>
      </div>
      <div
        className="row sb readMore"
        onClick={() => {
          navigate("/project/" + name);
        }}
      >
        <p>
          <b>Read more</b>
        </p>
        <p>{">"}</p>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    stack: PropTypes.array,
    github: PropTypes.string,
    live: PropTypes.string,
    preview: PropTypes.string,
    logo: PropTypes.string,
  }),
};

export default ProjectItem;
