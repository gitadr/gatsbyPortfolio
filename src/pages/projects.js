import React from "react";
import styles from "./projects.module.css";
import Navigation from "../components/navbar";
import Project1 from "../components/projectOne";
import Project2 from "../components/projectTwo";
import Project3 from "../components/projectThree";
import Footer from "../components/footer";
import Seo from "../components/seo";

const Projects = () => {
  return (
    <div>
      <section className={styles.projects}>
        <div className={styles.container}>
          <Navigation />
        </div>
        <Project3 />
        <Project2 />
        <Project1 />
      </section>
      <Footer />
    </div>
  );
};
export default Projects;

export const Head = () => (
  <Seo
    title="Projects – Aaron Root"
    description="Selected product design case studies and initiatives."
    pathname="/projects"
  />
);
