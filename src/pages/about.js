import React from "react";
import styles from "./about.module.css";
import Navigation from "../components/navbar";
import Footer from "../components/footer";
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
  return (
    <div>
      <section className={styles.about}>
        <div className={styles.container}>
          <Navigation />
          <section className={styles.aboutIntro}>
            <div className={styles.aboutIntroText}>
              <h1>Curriculum vitae</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                pretium enim quam, et fermentum felis consectetur et. Fusce
                finibus condimentum aliquam. Aliquam erat volutpat. Phasellus
                porttitor erat sed arcu molestie molestie.
              </p>

              <p>
                Suspendisse aliquam diam sit amet sem faucibus sodales. Etiam
                justo urna, elementum nec libero nec, condimentum congue dui.
                Sed aliquet massa ut sapien dapibus, a mollis dolor rhoncus.
                Pellentesque et velit quis eros maximus consequat.
              </p>
              <p>
                In porttitor nisl sem, at ultrices nisi ultricies sed. Nullam
                congue odio id risus placerat ullamcorper. Ut sollicitudin
                semper elementum. Phasellus sed interdum sapien. Maecenas semper
                molestie leo a volutpat dolor.
              </p>
            </div>

            <div className={styles.aboutIntroImage}>
              {" "}
              <StaticImage
                className={styles.journalImage}
                src="../images/about/aboutImage.jpg"
                alt="About image"
              />
            </div>
          </section>
          <section>
            <p class="caps">ROLES</p>
            <div className={styles.notePost}>
              <h2>
                Nearmap{" "}
                <span className={styles.role}>– Director of Design</span>
              </h2>
              <p className={styles.date}>May 2019 - Present</p>
            </div>
            <div className={styles.notePost}>
              <h2>
                WooliesX <span className={styles.role}>– Mobile Design</span>
              </h2>
              <p className={styles.date}>Oct 2018 - Apr 2019</p>
            </div>
            <div className={styles.notePost}>
              <h2>
                IG Markets <span className={styles.role}>– UI Design</span>
              </h2>
              <p className={styles.date}>May 2015 - Sept 2018</p>
            </div>
            <div className={styles.notePost}>
              <h2>
                AddisonGroup{" "}
                <span className={styles.role}>– Digital Design</span>
              </h2>
              <p className={styles.date}>Sep 2011 - May 2015</p>
            </div>
          </section>
          <section>
            <p class="caps">EDUCATION</p>
            <div className={styles.notePost}>
              <h2>
                University of Essex{" "}
                <span className={styles.role}>– BA Graphic Media</span>
              </h2>
              <p className={styles.date}>Oct 2008 –-Jul 2011</p>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default About;
