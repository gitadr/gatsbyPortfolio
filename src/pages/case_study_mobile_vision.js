import React from "react";
import styles from "./caseStudy.module.css";
import Header from "../components/internalHeader";
import Author from "../components/author";
import Footer from "../components/footer";

export default () => (
  <div className={styles.caseStudy}>
    <div className={styles.container}>
      <Header />
      <article>
        <section>
          <h1>Designing the future of mobile trading platforms</h1>
          <p className="intro">
            Building towards a common goal helps teams focus and ship features
            in a considered way. As part of my role as lead UI designer at IG, I
            instigated a project to create a vision to reshape how people trade
            derivatives on mobile, allowing my team to design iteratively and
            with intent
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_MobileVision_Hero.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_LargeImage}
        />
        <section>
          <h2>Challenge</h2>
          <p>
            The aim of the project was to create an ambitious long-term vision
            for mobile that better supported users' key trading tasks while
            aligning the visual identity, functionality and core interaction
            across IG's trading platforms.
          </p>
          <p>
            In order to do so needed to first identify those user tasks and
            investigate emerging mobile technologies that could be leveraged to
            lorem ipsum. We also needed to better understand how clients were
            using IG's current trading app and learn more about their varying
            trading behaviours and motivations.
          </p>
          <p>
            Testable prototypes of varying fidelity are to be produced, so that
            we may better explore and validate the vision, and promote a shared
            understanding of it, for the benefit of our teams and stakeholders.
            Crosplatform alignment - Define red routes
          </p>
          <h3>Key user tasks</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            pharetra facilisis augue id dapibus. Fusce mattis porta massa
            maximus fermentum. Sed a congue nisl. Nullam sit amet hendrerit
            libero. In hac habitasse platea dictumst. Curabitur varius nec
          </p>
          <ul>
            <li>01 Identify new opportunities to trade</li>
            <li>02 Identify new opportunities to trade</li>
            <li>03 Identify new opportunities to trade</li>
            <li>03 Identify new opportunities to trade</li>
          </ul>
        </section>
        <section className={styles.mobileDesign}>
          <div className={styles.workText}>
            <h3>Platform alignment</h3>
            <p>
              NWTP has been a catalyst for new services and ways of organizing
              content. We need to design a vision for mobile that attempts to
              bring together all the moving parts.
            </p>
            <p>
              aligning the app icons, presentation and styling in the apps,
              content casing, off-line status, new menu design, fixing broken
              journeys as well as bug fixes etc
            </p>
          </div>
          <div className={styles.workImage}>
            <img
              src={require("../images/caseStudies/caseStudy_mobileVision_NWTP.jpg")}
              alt="Placeholder"
            />
          </div>
        </section>
        <section>
          <h2>Existing Design</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            pharetra facilisis augue id dapibus. Fusce mattis porta massa
            maximus fermentum. Sed a congue nisl. Nullam sit amet hendrerit
            libero. In hac habitasse platea dictumst. Curabitur varius nec
            turpis ultricies porta. Mauris sit amet tellus lectus. Nam ligula
            nisi, pulvinar quis elit cursus, dapibus faucibus justo. Suspendisse
            potenti. Nullam metus tortor, pretium at placerat eget, viverra quis
            magna.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_mobileVision_before.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_LargeImage}
        />
        <div class="borderKeyline" />
        <section>
          <h2>Research</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            pharetra facilisis augue id dapibus. Fusce mattis porta massa
            maximus fermentum. Sed a congue nisl. Nullam sit amet hendrerit
            libero. In hac habitasse platea dictumst. Curabitur varius nec
            turpis ultricies porta. Mauris sit amet tellus lectus. Nam ligula
            nisi, pulvinar quis elit cursus, dapibus faucibus justo. Suspendisse
            potenti. Nullam metus tortor, pretium at placerat eget, viverra quis
            magna.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_mobileVision_research.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <div class="borderKeyline" />
        <section>
          <h2>Prototyping</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            pharetra facilisis augue id dapibus. Fusce mattis porta massa
            maximus fermentum. Sed a congue nisl. Nullam sit amet hendrerit
            libero. In hac habitasse platea dictumst. Curabitur varius nec
            turpis ultricies porta. Mauris sit amet tellus lectus. Nam ligula
            nisi, pulvinar quis elit cursus, dapibus faucibus justo. Suspendisse
            potenti. Nullam metus tortor, pretium at placerat eget, viverra quis
            magna.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_mobileVision_prototype.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <section>
          <h2>User testing</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            pharetra facilisis augue id dapibus. Fusce mattis porta massa
            maximus fermentum. Sed a congue nisl. Nullam sit amet hendrerit
            libero. In hac habitasse platea dictumst. Curabitur varius nec
            turpis ultricies porta. Mauris sit amet tellus lectus. Nam ligula
            nisi, pulvinar quis elit cursus, dapibus faucibus justo. Suspendisse
            potenti. Nullam metus tortor, pretium at placerat eget, viverra quis
            magna.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_mobileVision_userTesting.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <section className={styles.mobileDesign}>
          <div className={styles.workText}>
            <h2>Design Concept</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              pharetra facilisis augue id dapibus. Fusce mattis porta massa
              maximus fermentum. Sed a congue nisl. Nullam sit amet hendrerit
              libero. In hac habitasse platea dictumst. Curabitur varius nec
            </p>
            <ul>
              <li>01 Identify new opportunities to trade</li>
              <li>02 Identify new opportunities to trade</li>
              <li>03 Identify new opportunities to trade</li>
              <li>03 Identify new opportunities to trade</li>
            </ul>
          </div>
          <div className={styles.workImage}>
            <img
              src={require("../images/caseStudies/caseStudy_redRoute1.gif")}
              alt="Placeholder"
            />
          </div>
        </section>
        <section>
          <h2>Recommendations</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            pharetra facilisis augue id dapibus. Fusce mattis porta massa
            maximus fermentum. Sed a congue nisl. Nullam sit amet hendrerit
            libero. In hac habitasse platea dictumst. Curabitur varius nec
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_MobileVision_recomendationOne.png")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <img
          src={require("../images/caseStudies/caseStudy_MobileVision_recomendationOne.png")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <img
          src={require("../images/caseStudies/caseStudy_MobileVision_recomendationOne.png")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <img
          src={require("../images/caseStudies/caseStudy_MobileVision_recomendationOne.png")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <section>
          <h2>Measuring success</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            pharetra facilisis augue id dapibus. Fusce mattis porta massa
            maximus fermentum. Sed a congue nisl. Nullam sit amet hendrerit
            libero. In hac habitasse platea dictumst. Curabitur varius nec
          </p>
          <ul>
            <li>01 Identify new opportunities to trade</li>
            <li>02 Identify new opportunities to trade</li>
            <li>03 Identify new opportunities to trade</li>
          </ul>
        </section>
        <Author />
      </article>
    </div>
    <Footer />
  </div>
);
