import React from "react";
import CaseStudyLayout from "../components/caseStudyLayout";
import styles from "../styles/caseStudy.module.css";
import { StaticImage } from "gatsby-plugin-image";

const DesignSystem = () => {
  return (
    <CaseStudyLayout>
          <section>
            <h1>Building a design system architecture that scales</h1>
            <p className="intro">
              IG offers a multitude of products, from native apps to web-based
              trading platforms. As the company expanded to 17 glFormation, IG’s
              design system, was created to unify these platforms, foster a
              shared understanding of design principles, and enable teams to
              work more efficiently..
            </p>
          </section>
          <StaticImage
            src="../images/caseStudies/caseStudy_DesignSystem_Hero.jpg"
            alt="Placeholder"
            className={styles.caseStudy_LargeImage}
          />
          <div className="borderKeyline" />
          <section>
            <h2>Project history</h2>
            <p>
              I joined the team at IG to help redesign the web trading platform.
              My role was to define the visual language and lead the UI design
              for the platform. This would set the design direction for IG's
              other applications and formed the basis of the broader mobile and
              web platform style guides.
            </p>
            <p>
              Although the platforms shared common styles, individual teams made
              decisions in isolation, leading to inconsistencies and
              duplication. Key principles were not documented and were only
              shared with new starters on an ad hoc basis. Ultimately, as the
              number of products grew, design processes needed to scale too.
            </p>
          </section>
          <StaticImage
            src="../images/caseStudies/caseStudy_DesignSystem_OldVsNew.jpg"
            alt="Placeholder"
            className={styles.caseStudy_LargeImage}
          />
          <section>
            <h2>Creating a brief</h2>
            <p>
              As the mobile UI lead, I worked with the Head of Product Design to
              create a system to unify and consolidate our principles. We needed
              a project brief, success criteria, senior stakeholder buy-in and a
              dedicated team to help make it happen.
            </p>

            <p>
              The main objectives of the project were to improve the consistency
              of our products, build trust and create a cohesive experience for
              clients. We also wanted to improve our internal process by making
              the design process more transparent and collaborative. Crucially,
              we needed to scale our design output. Aligning creative and
              development teams globally meant we could avoid duplicating
              similar components across different platforms.
            </p>

            <p>
              We created three indicators to judge the progress and success of
              the project, giving us a benchmark to improve upon.
            </p>
            <ul>
              <li>
                <p>
                  <b>Better onboarding</b> – Does Formation give new starters
                  the information they need?
                </p>
              </li>
              <li>
                <p>
                  <b>Consistent patterns</b> – Will subsequent design audits
                  reveal fewer inconsistencies?
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
          <StaticImage
            src="../images/caseStudies/caseStudy_DesignSystem_Planning.jpg"
            alt="Placeholder"
            className={styles.caseStudy_MediumImage}
          />
          <div className="borderKeyline" />

          <section>
            <h2>The process</h2>
            <p>
              After creating the brief, my next task was to plan and help hire
              for the project. After we had formed a team, the remaining work
              fell into one of three main stages.
            </p>
            <p>
              First was the design audit – combing through the different facets
              of IG's products and services, highlighting inconsistencies. The
              second was organising workshops to discuss the design direction
              and building consensus around the outcomes. The final steps were
              documenting the chosen approach and working closely with the
              engineering teams to create codified components for the different
              development libraries.
            </p>
          </section>
          <StaticImage
            src="../images/caseStudies/caseStudy_DesignSystem_AuditOne.jpg"
            alt="Placeholder"
            className={styles.caseStudy_MediumImage}
          />
          <section>
            <h3>Consolidation</h3>
            <p>
              As described above, the design audit was key to evaluating the
              live apps. We assessed the marketing websites and communications,
              web trading and investment platforms as well as the mobile web and
              native apps. The focus was on finding inconsistencies in the
              patterns and styles used. This covered all of the basics including
              typography, colour, iconography, brand elements and tone of voice.
            </p>
            <p>
              Next was a review of our design thinking and values. We had many
              project principles. Some aligned, others didn't. Working with the
              Head of Product Design, we pulled together all of the unwritten
              rules we used as a team to critique each others work.
            </p>
            <p>
              Throughout this process we were collaborating with our
              international colleagues, presenting the system at regular
              intervals to teams around the world.
            </p>
          </section>
          <StaticImage
            src="../images/caseStudies/caseStudy_DesignSystem_AuditTwo.jpg"
            alt="Placeholder"
            className={styles.caseStudy_MediumImage}
          />
          <section className={styles.mobileDesign}>
            <div className={styles.workText}>
              <h3>Building consensus</h3>
              <p>
                For the design system to succeed, it was important to build
                consensus from across the business. After the product and design
                thinking had been audited, I found advocates from each area of
                the business to offer insight and expertise – as well as act as
                ambassadors for the project
              </p>
            </div>
            <div className={styles.workImage}>
              <StaticImage
                src="../images/caseStudies/caseStudy_DesignSystem_consensusDiagram.jpg"
                alt="Placeholder"
              />
            </div>
          </section>
          <section>
            <h2>Formation</h2>
            <p>
              Once IG's brand elements, patterns and principles had been agreed,
              they needed to documented. The first option was to build a custom
              framework and CMS. This would have made Formation the first
              'product' designed and built using the new design system – a great
              way to test and 'dogfood' our principles . Unfortunately, due to
              time restrictions, Frontify's ready made solution was the obvious
              MVP.
            </p>
          </section>
          <StaticImage
            src="../images/caseStudies/caseStudy_DesignSystem_Intro.jpg"
            alt="Placeholder"
            className={styles.caseStudy_MediumImage}
          />
          <section>
            <p>
              An important part of designing Formation was creating a structure
              that would enable it to efficiently scale with IG's growth.
              Formation needed to include a live inventory of UI components,
              style guides, assets, code snippets, developer guidelines and
              more. After a number of workshops and card sorting exercises we
              settled on three core sections: Foundations, Patterns and
              Components.
            </p>
            <p>
              These three sections formed the core of the design system and
              represented different levels of complexity, offering greater
              detail and specifics around elements as you progressed.
            </p>
            <h3>01 Foundations</h3>
            <p>
              Foundations are the high-level principles and building blocks of
              any products design and development. They incorporate brand-wide
              rules that shape patterns and help to design consistent
              components.
            </p>
            <h3>02 Patterns</h3>
            <p>
              A pattern is a general, repeatable solution to a
              commonly-occurring problem. Patterns are agnostic solutions that
              can be used in many different situations. While each case will be
              different, it's important to ensure consistency in behaviour.
            </p>
            <h3>03 Components</h3>
            <p>
              A component can be a button, header, search box, icon or other
              piece of UI that can be wrapped in re-usable, well-tested and
              consistent looking code. Smaller components are easier to design,
              test and reuse, but in some cases it larger components can be
              useful if they are repeated throughout a company's digital estate.
            </p>
          </section>
          <section className={styles.mobileDesign}>
            <div className={styles.workText}>
              <h3>Leveraging React</h3>
              <p>
                React is a powerful Javascript library for building user
                interfaces. It's also fast becoming a common language between
                designers and developers. With the release of prototyping tools
                such as Framer X it's now possible to design, prototype, develop
                and deploy a new component as part of one extended workflow. At
                IG I experimented with integrating production react components
                into the design system using Framer X.
              </p>
            </div>
            <div className={styles.workImage}>
              <StaticImage
                src="../images/caseStudies/caseStudy_DesignSystem_React.jpg"
                alt="Placeholder"
              />
            </div>
          </section>
          <section>
            <h2>Price Ticks</h2>
            <p>
              The need to show market price changes is a constant across IG
              products. For this reason it proved to be a perfect example of how
              to create innovative patterns using Formation. When designing the
              price ticks we referenced the existing foundations and patterns to
              design and build new components.
            </p>
          </section>
          <StaticImage
            src="../images/caseStudies/caseStudy_DesignSystem_Foundations.jpg"
            alt="Placeholder"
            className={styles.caseStudy_MediumImage}
          />
          <StaticImage
            src="../images/caseStudies/caseStudy_DesignSystem_Patterns.jpg"
            alt="Placeholder"
            className={styles.caseStudy_MediumImage}
          />
          <StaticImage
            src="../images/caseStudies/caseStudy_DesignSystem_Components.jpg"
            alt="Placeholder"
            className={styles.caseStudy_MediumImage}
          />
          <div className="borderKeyline" />
          <section>
            <h2>Outcome & Learnings</h2>
            <p>
              Building design systems is tricky. It relies on a huge amount of
              hard work and collaboration from across a business. It also
              requires a certain kind of mindset. Unlike the brand guidelines
              and style guides that came before, design systems are living
              entities that need to constantly evolve to stay relevant and
              useful.
            </p>
            My biggest learning from the project are:
            <h3>Start early, update often</h3>
            <p>
              It's so much easier to record thinking as it happens rather than
              retrospectively document changes. Make sure when you start a new
              project that you set a side time to document changes relevant to
              the design system.
            </p>
            <h3>Build a strong support base</h3>
            <p>
              Creating a design system isn't a job for one person or even a
              small team. It requires support and buy-in from a multitude of
              teams and stakeholders. Find people that are motivated and get
              them to help you build awareness for the project.
            </p>
            <h3>Get the level of detail right</h3>
            <p>
              Figuring out the right amount of detail to include in Formation
              was one of the biggest headaches of the project. Include too much
              and your system become dense and obtuse. Don't include enough and
              your team are left asking questions. The eureka moment for me was
              splitting the system into detail-specific sections. This allowed
              us to include a various amounts of detail at different stages on a
              'need to know' bases.
            </p>
          </section>

    </CaseStudyLayout>
  );
};

export default DesignSystem;
