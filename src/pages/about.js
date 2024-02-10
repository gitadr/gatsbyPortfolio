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
                single-handedly built ingenious contraptions in the shed. I soon
                came to realise though that building with a team (my little
                brother) was a lot more fun. I could bounce ideas around, test
                prototypes, and generally share in the excitement of creating
                new things.
              </p>
              <p>
                I also quickly realised I had different strengths to my team.
                Repairing the go-kart after taking a corner too quickly? Not my
                zone of genius. Designing a better way to steer the go-kart at
                speed? Much more my thing. This love of problem-solving led me
                to study maths and science in college. At first this was super
                exciting. I learnt about everthing from imaginary number to the
                double-slit experiment. But after a while I knew something was
                missing.
              </p>
              <p>
                Luckily, around the same time, I began to learn about Web 2.0
                and the human-centred design movement. I'd long been obsessed
                with how Apple could make using a computer feel like a magical
                experience, but computer programming had always felt
                inaccessible. Web design gave me a new, collaborative way to
                create. It felt like the perfect combination of all the things I
                loved—I was hooked.
              </p>
              <p>
                I went on to have the career listed below, but it's the journey
                above that shaped my philosophy and principles. I believe that
                the act of creating is both an art and a science. More
                importantly, that you will go further and faster in your
                endeavors if you have a strong team, a shared vision, and sense
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
