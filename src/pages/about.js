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
                As a kid, I wanted to be an inventor—the eccentric type who
                single-handedly built ingenious contraptions in the shed. Soon,
                I realised that building with a team (my little brother) was a
                lot more fun. I could bounce ideas around, test prototypes, and
                generally share in the excitement of creating new things.
              </p>
              <p>
                At school, my love for problem solving led me to study maths and
                science. I enjoyed the rigor of the scientific process and the
                definitive outcome of a successful experiment. I was also deeply
                interested in all things art and design. Initially, I was a lot
                less successful academically in those subjects, but over time, I
                compensated for my lack of raw talent with an abundance of
                enthusiasm.
              </p>
              <p>
                It wasn’t until I began to learn about Web 2.0 and the
                human-centred design movement that I started to connect the dots
                between my two interests. The web gave me a new, accessible way
                to create—seamlessly merging science and technology with the
                iterative creativity of design. It felt like the perfect
                combination of the things I loved. I was hooked.
              </p>
              <p>
                I went on to have the career listed below, but it's the journey
                above that shaped my design philosophy and principles. I believe
                that the act of creating is both an art and a science. More
                importantly, that you will go further and faster in your
                endeavours if you have a strong team, a shared vision, and sense
                of excitement about what is possible.
              </p>
            </div>

            <div className={styles.aboutIntroImage}>
              {" "}
              <StaticImage
                className={styles.journalImage}
                src="../images/about/aboutImage1.jpg"
                alt="Kosciuszko National Park"
              />
              <h4>Kosciuszko National Park, Australia.</h4>
              <p class="caption">36°27'21"S 148°15'45"E</p>
              <p class="caption">
                Since 2018, i've been lucky enough to call Australia home. I
                live and work on the traditional lands of the the Gadigal people
                of the Eora nation. I’d like to take this opportunity to
                acknowledge the traditional owners of country throughout
                Australia and pay my respects to elders past, present and
                emerging.
              </p>
            </div>
            <div></div>
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
              <p className={styles.date}>Oct 2008 - Jul 2011</p>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default About;
