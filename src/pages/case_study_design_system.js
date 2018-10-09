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
            IG offers a multitude of products, from native apps to web-based
            trading platforms. As the company expanded to 17 global locations,
            maintaining design consistency became a challenge. Formation, IG's
            design system, was created to unify these platforms, allowing them
            to ship better products faster.
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
            My role was to define the visual language and lead the UI design for
            the platform. This would set the design direction for IG's other
            applications and formed the basis of the broader mobile and web
            platform style guides.
          </p>
          <p>
            Although the platforms shared common styles, individual teams made
            decisions in isolation, leading to inconsistencies and duplication.
            Key principles where not documented and were only shared with new
            starters on an ad hoc basis. Ultimately, as the number of products
            grew, design processes needed to scale too.
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
            As a Lead UI Designer, I worked with the Head of Product Design to
            create a system to unify and consolidate our principles. We needed a
            project brief, success criteria, senior stakeholder buy-in and a
            dedicated team to help make it happen.
          </p>

          <p>
            The main objectives of the project were to improve the consistency
            of our products, build trust and create a cohesive experience for
            clients. We also want to improve our internal process simplifying
            the making the design process more transparent and collaborative.
            Crucially, we needed to upscale our design output. Aligning creative
            and development teams globally ment we could avoid recreating
            similar components on different platforms.
          </p>

          <p>
            We created three indicators to judge the progress and success of the
            project, giving us a benchmark to improve upon.
          </p>
          <ul>
            <li>
              <p>
                <b>Better onboarding</b> – Does Formation give new starters the
                information they need?
              </p>
            </li>
            <li>
              <p>
                <b>Consistent patterns</b> – Well Subsequent design audits
                reveal less inconsistencies?
              </p>
            </li>
            <li>
              <p>
                <b>Simplified code</b> – Can we build better apps using less
                CSS?
              </p>
            </li>
          </ul>
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
            After creating the brief, my next task was to plan and help hire for
            the project. After we had formed a team, the remaining work fell
            into one of three main stages.
          </p>
          <p>
            First was the design audit – combing through the different facets of
            IG's products and services, highlighting inconsistencies. The second
            was organising workshops to discuss the design direction and
            building consensus around the outcomes. The final step was
            documenting the chosen approach and working closely with the
            engineering teams to create codified components for the different
            development libraries.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_DesignSystem_AuditOne.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <section>
          <h3>Consolidation</h3>
          <p>
            As described above, the design audit was key to evaluating the live
            apps. We assessed the marketing websites and communications, web
            trading and investment platforms as well as the mobile web and
            native apps. The focus was on finding inconsistencies in the
            patterns and styles used. This covered all of the basics including
            typography, colour, iconography, brand elements and tone of voice.
          </p>
          <p>
            Next was a review of our design thinking and values. We had many
            project principles. Some aligned, others didn't. Working with the
            Head of Product design, we pulled together all of the unwritten
            rules we used as a team to critique each others work.
          </p>
          <p>
            Throughout this process we were collaborating with our international
            design and development teams, presenting the system at regular
            intervals to teams around the world.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_DesignSystem_AuditTwo.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <section className={styles.mobileDesign}>
          <div className={styles.workText}>
            <h3>Building consensus</h3>
            <p>
              For the design system to succeed, it was important to build
              consensus from across the business. After the products and design
              thinking had been audited, I found advocates from each area of the
              business to offer insight and expertise - as well as act as
              ambassadors for the project
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
            Once a consensus had been formed on IG's design foundations,
            patterns and principles, it was time to start documenting.
          </p>
          <p>
            The technicalities of building the design system proved challenging.
            The preferred option was to build a custom framework and CMS. The
            design system itself would have been the first 'product' designed
            and built using the newly established patterns and principles. But
            due to time restrictions, an off the self solution was used instead.
          </p>
          <p>
            The system was aptly named Formation and included three main
            sections. collaborative set of principles and guidelines, with a
            comprehensive live inventory of UI components, style guides, assets,
            code snippets, developer guidelines and more. Formation was the
            system tied all of these areas together, becoming the one source of
            truth.
          </p>
          <p>
            The system was aptly named Formation and included three main
            sections:
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
            different situations. While each case will be different, it's
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
              React is powerful Javascript library for building user interfaces.
              It is also fast becoming a common language between designers and
              developers. With the release of prototyping tools such as Framer X
              it's now possible to design, prototype, develop and deploy a new
              component as part of one extended workflow. At IG I experimented
              with integrating production react components into the design
              system using Framer X.
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
