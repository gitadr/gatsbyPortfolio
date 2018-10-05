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
            With a wide product and service range it can be easy to lose track
            of the experience we provide. Having a central location for these
            assets and guides will help us to manage that experience, and the
            resulting consistency will help to build trust among our users.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_DesignSystem_Hero.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_LargeImage}
        />
        <div class="borderKeyline" />
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
          src={require("../images/caseStudies/caseStudy_DesignSystem_OldVsNew.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_LargeImage}
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
          src={require("../images/caseStudies/caseStudy_DesignSystem_Planning.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <div class="borderKeyline" />

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
          src={require("../images/caseStudies/caseStudy_DesignSystem_AuditOne.jpg")}
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
          src={require("../images/caseStudies/caseStudy_DesignSystem_AuditTwo.jpg")}
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
          <h2>Formation</h2>
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
          src={require("../images/caseStudies/caseStudy_DesignSystem_Intro.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <section>
          <h3>01 Foundations</h3>
          <p>
            Foundations are the high-level principles and building blocks of any
            products design and development. They incorporate brand-wide rules
            that shape patterns and help to design consistent components.
          </p>
          <h3>02 Patterns</h3>
          <p>
            A pattern is a general, repeatable solution to a commonly-occurring
            problem. Patterns are agnostic solutions that can be used in many
            different situations. While each use case will be different, it's
            important to ensure consistency in behaviour.
          </p>
          <h3>03 Components</h3>
          <p>
            A component can be a button, header, search box, icon or other piece
            of UI that can be wrapped in re-usable, well-tested and consistent
            looking code. Smaller components are easier to design, test and
            reuse, but in some cases it larger components can be useful if they
            are repeated throughout a company's digital estate.
          </p>
        </section>
        <section className={styles.mobileDesign}>
          <div className={styles.workText}>
            <h3>Leveraging React</h3>
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
              src={require("../images/caseStudies/caseStudy_DesignSystem_React.jpg")}
              alt="Placeholder"
            />
          </div>
        </section>
        <section>
          <h2>Price Ticks</h2>
          <p>
            In order for the design system to succeed it was important to build
            consensus from across the business. I set about finding advocates
            from each area that could offer their insight and expertise as well
            as act as ambassadors for the project as a whole.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_DesignSystem_Foundations.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <img
          src={require("../images/caseStudies/caseStudy_DesignSystem_Patterns.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <img
          src={require("../images/caseStudies/caseStudy_DesignSystem_Components.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <img
          src={require("../images/caseStudies/caseStudy_DesignSystem_Libraries.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <div class="borderKeyline" />
        <section>
          <h2>Outcome & Learnings</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            commodo est id massa porttitor ultrices. Curabitur nec lobortis
            purus, non egestas neque. Vivamus sollicitudin consequat magna, nec
            mattis nunc luctus eu. Cras et risus faucibus, aliquet risus ut,
            egestas dolor.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_DesignSystem_Symbols.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            commodo est id massa porttitor ultrices. Curabitur nec lobortis
            purus, non egestas neque. Vivamus sollicitudin consequat magna, nec
            mattis nunc luctus eu. Cras et risus faucibus, aliquet risus ut,
            egestas dolor.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_DesignSystem_deviceMockups.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />

        <Author />
      </article>
    </div>
    <Footer />
  </div>
);
