import "./projects.module.scss";
import { useState } from "react";
import Project from "./Project";
import { faReact, faJsSquare } from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
    /* eslint-disable */
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "8 great repos",
      url: "https://codesandbox.io/s/github/hamiat/eight-great-repos",
      iconText: faReact,
      color: "#61dafb",
    },
    {
      id: 2,
      title: "A funny story",
      url: "https://codesandbox.io/s/github/hamiat/theme-color-changer",
      iconText: faReact,
      color: "#61dafb",
    },
    {
      id: 3,
      title: "A simple player",
      url: "https://codesandbox.io/s/github/hamiat/custom-player",
      iconText: faJsSquare,
      color: "#f7df1e",
    },

    {
      id: 4,
      title: "OOP",
      url: "https://github.com/hamiat/code-assignment",
      iconText: faJsSquare,
      color: "#f7df1e",
    },
    {
      id: 5,
      title: "A short joke",
      url: "https://codesandbox.io/s/twilight-water-ztyqwt",
      iconText: faJsSquare,
      color: "#f7df1e",
    },
    {
      id: 6,
      title: "Slide on scroll",
      url: "https://codesandbox.io/s/lively-framework-u2p1vu",
      iconText: faJsSquare,
      color: "#f7df1e",
    },
  ]);
  return (
    <main>
      {projects.map((project) => (
        <Project {...project} key={project.id} />
      ))}
    </main>
  );
}
