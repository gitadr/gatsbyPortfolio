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
          <h1>Building a design system architecture that scales</h1>
          <p class="intro">
            Trading is hard. Designing trading applications isn't any easier.
            Executing an order at the right second can make the difference
            between a profit or a loss. As a result, quantifying the opportunity
            cost of interactions becomes vital.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_DesignSystem_header.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_LargeImage}
        />
        <section>
          <h2>Project history</h2>
          <p>
            I joined the team at IG to help redesign the web trading platform.
            My role was to define the visual language and lead the UI and
            interaction design for the platform. This later set the design
            direction of IG's other applications and formed the basis of the
            broader mobile and web platform style guides.
          </p>
          <p>
            Although the platforms shared common styles, individual teams made
            decisions in isolation, leading to inconsistencies and duplication.
            Key principles where not documented and shared lorem ipsum to new
            starters. Most importantly, our product offering was growing and our
            design processes needed to scale to match.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_DesignSystem_deviceMockups.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <section>
          <h2>Creating a brief</h2>
          <p>
            My role as a Lead UI Designer was to work with the Head of Product
            Design to create a system to unify and consolidate our principles
            and act as a single point of truth. We needed a project brief,
            success criteria, senior stakeholder buy-in and a dedicated team
            member to help make it happen.
          </p>

          <p>
            The main objectives of the project were to improve the consistency
            of our products, building trust and creating a familiar experience
            for clients. Streamline design workflows and build processes, saving
            time on recreating similar components on different platforms.
            Crucially, we needed to upscale our design output, aligning creative
            and development teams globally, allowing us to ship better products
            faster.
          </p>

          <p>
            We created three key performance indicators to judge the progress
            and success of the project, giving us a benchmark to improve upon.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_DesignSystem_KPIs.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <section>
          <h2>The process</h2>
          <p>
            After creating the brief, my next task was to plan and hire for the
            project. I foundThe remaining work into three main stages. First was
            a design audit, combing through the different facets of IG’s digital
            estate, highlighting inconsistencies in patterns and styles.
          </p>

          <p>
            The second was compiling those issues, organising workshops to
            discuss the appropriate design direction then building consensus
            around the chosen approach. Finally we documented those principles,
            design language and patterns. Working closely with the engineering
            teams to create codified components for the different development
            libraries.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_DesignSystem_Steps.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <section>
          <h3>Design audit</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            commodo est id massa porttitor ultrices. Curabitur nec lobortis
            purus, non egestas neque. Vivamus sollicitudin consequat magna, nec
            mattis nunc luctus eu. Cras et risus faucibus, aliquet risus ut,
            egestas dolor.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_DesignSystem_Audit.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <section className={styles.mobileDesign}>
          <div className={styles.workText}>
            <h3>Building concensus</h3>
            <p>
              In order for the design system to succeed it was important to
              build consensus from across the business. I set about finding
              advocates from each area that could offer their insight and
              expertise as well as act as ambassadors for the project as a
              whole.
            </p>
          </div>
          <div className={styles.workImage}>
            <img
              src={require("../images/caseStudies/caseStudy_DesignSystem_consensusDiagram.jpg")}
              alt="Placeholder"
            />
          </div>
        </section>
        <section>
          <h2>A product to service products</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            commodo est id massa porttitor ultrices. Curabitur nec lobortis
            purus, non egestas neque. Vivamus sollicitudin consequat magna, nec
            mattis nunc luctus eu. Cras et risus faucibus, aliquet risus ut,
            egestas dolor.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            commodo est id massa porttitor ultrices. Curabitur nec lobortis
            purus, non egestas neque. Vivamus sollicitudin consequat magna, nec
            mattis nunc luctus eu. Cras et risus faucibus, aliquet risus ut,
            egestas dolor.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_DesignSystem_Audit.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <section className={styles.mobileDesign}>
          <div className={styles.workText}>
            <h3>One day prototype</h3>
            <p>
              In order for the design system to succeed it was important to
              build consensus from across the business. I set about finding
              advocates from each area that could offer their insight and
              expertise as well as act as ambassadors for the project as a
              whole.
            </p>
          </div>
          <div className={styles.workImage}>
            <img
              src={require("../images/caseStudies/caseStudy_DesignSystem_sysytemPrototype.jpg")}
              alt="Placeholder"
            />
          </div>
        </section>
        <section>
          <h2>Formation</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            commodo est id massa porttitor ultrices. Curabitur nec lobortis
            purus, non egestas neque. Vivamus sollicitudin consequat magna, nec
            mattis nunc luctus eu. Cras et risus faucibus, aliquet risus ut,
            egestas dolor.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_DesignSystem_systemSections.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <section>
          <h3>Component libraries</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            commodo est id massa porttitor ultrices. Curabitur nec lobortis
            purus, non egestas neque. Vivamus sollicitudin consequat magna, nec
            mattis nunc luctus eu. Cras et risus faucibus, aliquet risus ut,
            egestas dolor.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_DesignSystem_structure.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <section>
          <h3>Outcome</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            commodo est id massa porttitor ultrices. Curabitur nec lobortis
            purus, non egestas neque. Vivamus sollicitudin consequat magna, nec
            mattis nunc luctus eu. Cras et risus faucibus, aliquet risus ut,
            egestas dolor.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_DesignSystem_frontify.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <section>
          <h2>Learnings</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            commodo est id massa porttitor ultrices. Curabitur nec lobortis
            purus, non egestas neque. Vivamus sollicitudin consequat magna, nec
            mattis nunc luctus eu. Cras et risus faucibus, aliquet risus ut,
            egestas dolor.
          </p>
        </section>

        <Author />
      </article>
    </div>
    <Footer />
  </div>
);
