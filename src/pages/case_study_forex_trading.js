import React from "react";
import CaseStudyLayout from "../components/caseStudyLayout";
import styles from "../styles/caseStudy.module.css";
import { StaticImage } from "gatsby-plugin-image";
import forexTradingMvp from "../images/caseStudies/caseStudy_forexTrading_MVP_light.gif";
import { Link } from "gatsby";

const ForexTrading = () => {
  return (
    <CaseStudyLayout>
          <section>
            <h1>Launching FX trading apps in a new market</h1>
            <p className="intro">
              Launching a new product is always exciting. Sometimes it can
              provide unique design opportunities too. IG's application to offer
              regulated FX products to US clients gave my team the chance to
              implement our design vision and build two world-class trading
              apps.
            </p>
          </section>
          <StaticImage
            src="../images/caseStudies/caseStudy_forexTrading_hero.jpg"
            alt="Placeholder"
            className={styles.caseStudy_LargeImage}
          />
          <section>
            <h2>Challenge</h2>
            <p>
              The US FX industry has some of the most stringent regulatory
              conditions in the world. Adding to the technical and cultural
              complications of exporting a primarily European product, the
              challenges of launching in the US soon added up.
            </p>
            <p>
              As the lead UI designer for the mobile platforms, I was
              accountable for the design of IG’s new US-focused iOS and Android
              apps.
            </p>
            <p>
              Our first task was to establish the differences in terminology and
              regulatory requirements between our existing and proposed apps.
              Working with the wider mobile teams we compiled a specification
              for the new apps.
            </p>
            <p>
              The next step was creating a series of prototypes to test our
              assumptions. Due to the complexity of the trading regulations we
              needed a way to simulate the expected outcomes. The solution was
              to use Framer to adapt IG’s trading APIs so we could create a
              realistic example for clients to test. This was a huge undertaking
              and a technical first for IG.
            </p>
            <p>
              Once we had a set of prototypes to test, I worked with the UX
              research team to facilitate a series of user testing sessions in
              Chicago. They focused on validating our early assumptions and
              involved both experienced and new to category traders.
            </p>
          </section>
          <StaticImage
            src="../images/caseStudies/caseStudy_forexTrading_research.jpg"
            alt="Placeholder"
            className={styles.caseStudy_MediumImage}
          />
          <div className="borderKeyline" />
          <section>
            <h2>Existing designs</h2>
            <p>
              Although the early prototypes were based on the existing trading
              platforms, there was a strong desire from the product teams to
              move beyond what had been achieved before and create something
              truly innovative.
            </p>
            <h3>iOS App</h3>
            <p>
              The existing iOS app designs were dated. They lacked hierarchy,
              structure and conformed to an older navigation architecture.
            </p>

            <p>
              Based in the London office, the iOS development team wanted to
              start with a completely new code base. As a result of the recent
              'Swift Nights' the team felt confident that they could rewrite the
              app from the ground up.
            </p>

            <p>
              This meant the design team could focus on producing new work based
              on the recommendations of the mobile vision project.
            </p>
          </section>
          <StaticImage
            src="../images/caseStudies/caseStudy_forexTrading_iOS_before.jpg"
            alt="Placeholder"
            className={styles.caseStudy_MediumImage}
          />
          <section>
            <h3>Android App</h3>
            <p>
              The Android app suffered from many of the same design problems as
              iOS. Additionally, the progress made with Material Design was
              absent from the IG app..
            </p>
            <p>
              Based in the Krakow office, the Android development team wanted to
              clone the existing trading app, concentrating instead on
              refactoring the code to separate the UI and business logic
              elements.
            </p>
            <p>
              Although the outcome of the two apps would be the same, due to the
              difference in development strategy the design team needed to
              support the iOS and Android teams in different ways.
            </p>
          </section>
          <StaticImage
            src="../images/caseStudies/caseStudy_forexTrading_android_before.jpg"
            alt="Placeholder"
            className={styles.caseStudy_MediumImage}
          />
          <section className={styles.mobileDesign}>
            <div className={styles.workText}>
              <h3>Native first</h3>
              <p>
                Native apps should feel like part of your device, using default
                fonts, components and transitions where possible. This avoids
                redesigning common patterns such as toggles or list and allows
                designers to focus on trading-specific elements. Here time can
                be spent perfecting interactions and creating an experience that
                feels unique.
              </p>
            </div>
            <div className={styles.workImage}>
              <StaticImage
                src="../images/caseStudies/caseStudy_forexTrading_nativeFirst.jpg"
                alt="Placeholder"
              />
            </div>
          </section>
          <section>
            <h2>Iterating the mobile vision</h2>
            <p>
              The team had recently finished putting together a long-term vision
              for mobile. The new FX apps were the first chance to implement
              that vision in a comprehensive way.
            </p>
            <p>
              The project made seven recommendations that aimed to streamline
              key trading tasks and align the visual identity, functionality and
              common interaction of IG's mobile apps.
            </p>
            <ul>
              <li>
                <p>
                  <b>Smart onboarding</b> – Explore and personalise straight
                  away
                </p>
              </li>
              <li>
                <p>
                  <b>Trade everywhere</b> – Streamline the deal flow
                </p>
              </li>
              <li>
                <p>
                  <b>Market centric analysis</b> – Bring together analysis and
                  exposure per market
                </p>
              </li>
              <li>
                <p>
                  <b>Consolidate trading activity</b> – Trading Activity in one
                  place
                </p>
              </li>
              <li>
                <p>
                  <b>Discover new opportunities</b> – Awareness of other
                  interesting markets
                </p>
              </li>
              <li>
                <p>
                  <b>Manage accounts</b> – Visual account health and inline
                  funding
                </p>
              </li>
              <li>
                <p>
                  <b>Increase engagement</b> – Reduce friction and increase
                  visibility of IG
                </p>
              </li>
            </ul>
            <Link to="/case_study_mobile_vision" className="button">
              <span className="linkIcon" />
              <span className="text">Find out more</span>
            </Link>
          </section>
          <section className={styles.mobileDesign}>
            <div className={styles.workText}>
              <h3>Formation Design System</h3>
              <p>
                As well as the mobile vision, we had been working on adding
                mobile patterns to the design system. Formation was created to
                unify IG's platforms, create a shared understanding of design
                principles and enable teams to work more efficiently. Again, the
                new FX apps were a chance to put this to the test.
              </p>
              <Link to="/case_study_design_system" className="button">
                <span className="linkIcon" />
                <span className="text">Find out more</span>
              </Link>
            </div>
            <div className={styles.workImage}>
              <StaticImage
                src="../images/caseStudies/caseStudy_forexTrading_designSystem.jpg"
                alt="Placeholder"
              />
            </div>
          </section>
          <section>
            <h2>Market screens</h2>
            <p>
              One of the key changes we made as part of the redesign was a move
              to a more market-centric app structure. Rather than browsing by
              feature, e.g. news or positions, we presented all of the necessary
              market information on a single page.
            </p>
            <p>
              Arriving at a final design took time. Balancing the need for data
              density with a clear hierarchy was challenging. We achieved the
              final design after a number of iterations, testing different
              versions with clients along the way.
            </p>
          </section>
          <StaticImage
            src="../images/caseStudies/caseStudy_forexTrading_marketWidget.jpg"
            alt="Placeholder"
            className={styles.caseStudy_LargeImage}
          />
          <section className={styles.mobileDesign}>
            <div className={styles.workText}>
              <h2>Minimum Viable Product</h2>
              <p>
                One of the biggest challenges we faced as a design team was
                supporting the different development road maps of the iOS and
                Android teams. As mentioned, the teams took different approaches
                to the app’s development, which had a knock-on effect on feature
                delivery.
              </p>
              <p>
                The best way to address this was to create an MVP prototype for
                each platform. This allowed both teams to see the end goal, and
                work with the designers to adapt it to their development
                stories.
              </p>
            </div>
            <div className={styles.workImage}>
              <img
                src={forexTradingMvp}
                alt="Animated minimum viable product walkthrough for the FX trading app"
                loading="lazy"
              />
            </div>
          </section>
          <section>
            <h2>Outcome & Learnings</h2>
            <p>
              After months of hard work, we finally had something that we could
              take to market. The final apps were a product of the mobile vision
              and design system that proceeded them and were the best example of
              IG's aspiration to build category-defining apps.
            </p>
          </section>
          <StaticImage
            src="../images/caseStudies/caseStudy_forexTrading_overview.jpg"
            alt="Placeholder"
            className={styles.caseStudy_MediumImage}
          />

    </CaseStudyLayout>
  );
};

export default ForexTrading;
