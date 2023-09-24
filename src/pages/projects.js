import React from "react";
import styles from "./about.module.css";
import Navigation from "../components/navbar";
import Footer from "../components/footer";
import Project1 from "../components/projectOne";
import Project2 from "../components/projectTwo";

const Projects = () => {
  return (
    <div>
      <section className={styles.about}>
        <div className={styles.container}>
          <Navigation />
        </div>
        <Project2 />
        <Project1 />
        <Project2 />
      </section>
      <Footer />
    </div>
  );
};
export default Projects;
