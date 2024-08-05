import React from "react";
import { image } from "../data/data.js"; // Adjust the import path as needed
import Links from "./Links";

function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && <p>{bio}</p>}
      <img src={image} alt="I made this" />
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}
