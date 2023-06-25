import React from "react";
import styles from "./about.module.css";
import Navigation from "../components/navbar";
import Footer from "../components/footer";

const About = () => {
  return (
    <div>
      <section className={styles.about}>
        <div className={styles.container}>
          <Navigation />
          <div className={styles.headerIntro}>
            <div class="sectionHeader">
              <h1>About</h1>
            </div>
            <p>
              For the past 12 years I have designed products that help people
              understand and action complex information. Whether that's
              geospatial insights or financial market data, my aim is always to
              create solutions that are simple, innovative and empowering.
            </p>

            <p>
              That experience has also taught me a lot about what it takes to
              build great teams. Especially the importance of creating a
              customer-centric culture, collaborative processes and a clear
              design vision. But, most of all, the value in compounding and
              scaling positive change.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default About;
