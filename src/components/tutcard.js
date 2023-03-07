import React from "react";
import ReactHtmlParser from "react-html-parser";
import { StaticImage } from "gatsby-plugin-image";

// styles
import "../styles/tutCard.css";

// components
import { AiFillGithub } from "react-icons/ai";
import { MdVideoLibrary } from "react-icons/md";
import { MdCloudDone } from "react-icons/md";
import { TbAlpha, TbBeta } from "react-icons/tb";

// markup
const Tutcard = ({ tut }) => {
  return (
    <div className="tutCard">
      <div className="additionals">
        {tut.repository != "" ? (
          <a title="GitHub Repo" target="_blank" href={tut.repository}>
            <AiFillGithub height={300} />
          </a>
        ) : null}
        {tut.videos != "" ? (
          <a title="Videos" target="_blank" href={tut.videos}>
            <MdVideoLibrary height={300} />
          </a>
        ) : null}
      </div>

      <div className="tutCardImg">
        <StaticImage
          className="img"
          src="../images/clifford.jpg"
          height={300}
          alt={tut.name}
        ></StaticImage>
      </div>
      <div className="tutCardText">
        <a title={tut.name} target="_blank" href={tut.webpage}>
          <h3>{ReactHtmlParser(tut.name)}</h3>
        </a>
        <p>{ReactHtmlParser(tut.description)}</p>
      </div>
      <div
        className={`status ${
          tut.status == "stable"
            ? "stable"
            : tut.status == "beta"
            ? "beta"
            : "alpha"
        }`}
        title={
          tut.status == "stable"
            ? "stable"
            : tut.status == "beta"
            ? "beta"
            : "alpha"
        }
      >
        {tut.status == "stable" ? (
          <MdCloudDone />
        ) : tut.status == "beta" ? (
          <TbBeta />
        ) : (
          <TbAlpha />
        )}
      </div>
    </div>
  );
};

export default Tutcard;