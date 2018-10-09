import React from "react";
import styles from "./caseStudy.module.css";
import Header from "../components/internalHeader";
import Author from "../components/author";
import Footer from "../components/footer";
import { Link } from "gatsby";

export default () => (
  <div className={styles.caseStudy}>
    <div className={styles.container}>
      <Header />
      <article>
        <section>
          <h1>Launching FX trading apps in a new market</h1>
          <p className="intro">
            Launching a new product is always exciting. Sometimes it can provide
            unique design opportunities too. IG's application to offer regulated
            FX products to US clients gave my team the chance to implement our
            design vision and build two world-class trading apps.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_forexTrading_hero.jpg")}
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
            As the lead UI design for the mobile platforms, I was accountable
            for the design of the IG's new US focused iOS and Android Apps.
          </p>
          <p>
            Our first task was to establish the differences in terminology and
            regulatory requirements between our existing and proposed apps.
            Working with the wider mobile teams we compiled a specification for
            the new apps.
          </p>
          <p>
            The next step was creating a series of prototypes to test our
            assumptions. Due to the complexity of the trading regulations we
            needed a way to simulate the expected outcomes. The solutions was to
            use Framer to adapt our IG's trading API's so we could create a
            realistic example for clients to test. This was a huge undertaking
            and a technical first for IG.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_forexTrading_prototype.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <section>
          <p>
            Once we had a set of prototypes to test, I worked with the UX
            research team to facilitate a series of user testing sessions in
            Chicago. They focused on validating our early assumptions and
            involved both new and competitor clients.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_forexTrading_research.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <div class="borderKeyline" />
        <section>
          <h2>Existing designs</h2>
          <p>
            Although the early prototypes were based on the existing trading
            platforms, there was a strong design from the product teams to move
            beyond what had been achieved before and create something truly
            innovative.
          </p>
          <h3>iOS App</h3>
          <p>
            The existing iOS app designs where dated. They lacked hierarchy and
            structure and conformed to an older navigation architecture.
          </p>

          <p>
            Based in the London office, the iOS development team wanted to start
            with a completely new code base. As a result of the recent 'Swift
            Nights' the team felt confident that they could rewrite the app from
            the ground up.
          </p>

          <p>
            This meant the design team could focus on producing new work based
            on the recommendations of the mobile vision project.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_forexTrading_iOS_before.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <section>
          <h3>Android App</h3>
          <p>
            The android app suffered from many of the same design problems iOS.
            In addition, the progress made with Material Design was absent from
            IG app.
          </p>
          <p>
            Based in the Krakow office, the Android development team wanted to
            clone the existing trading app, concentrating instead on refactoring
            the code to separate the UI and business logic elements.
          </p>
          <p>
            Although the outcome for the two apps would be the same, due to the
            difference in development strategy the design team needed to support
            the iOS and Android teams in different ways.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_forexTrading_android_before.jpg")}
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
              designers to focus on trading-specific elements. Here time can be
              spent perfecting interactions and creating an experience that
              feels unique to IG.
            </p>
          </div>
          <div className={styles.workImage}>
            <img
              src={require("../images/caseStudies/caseStudy_forexTrading_nativeFirst.jpg")}
              alt="Placeholder"
            />
          </div>
        </section>
        <section>
          <h2>Iterating the mobile vision</h2>
          <p>
            The team had recently finished putting together a long-term vision
            for mobile. The new FX apps were the first chance to implement that
            vision in a comprehensive way.
          </p>
          <p>
            The project made seven recommendations that aimed to streamline key
            trading tasks and align the visual identity, functionality and
            common interaction of IG's mobile apps.
          </p>
          <ul>
            <li>
              <p>
                <b>Smart onboarding</b> – Explore and personalise straight away
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
              As well as the mobile vision, we had been working on adding mobile
              patterns to the design system. Formation was created to unify IG's
              platforms, create a shared understanding of design principles and
              enabling teams work more efficiently. Again, the new FX apps were
              a chance to put this to the test.
            </p>
            <Link to="/case_study_design_system" className="button">
              <span className="linkIcon" />
              <span className="text">Find out more</span>
            </Link>
          </div>
          <div className={styles.workImage}>
            <img
              src={require("../images/caseStudies/caseStudy_forexTrading_designSystem.jpg")}
              alt="Placeholder"
            />
          </div>
        </section>
        <section>
          <h2>Market screens</h2>
          <p>
            One of the key changes we made as part of the redesign was a move to
            a more market-centric app structure. Rather than browsing by
            feature, e.g. news or positions, we presented all of the necessary
            market information on a single page.
          </p>
          <p>
            Reaching a design took some time. It was hard to balance the need
            for data density with a clear hierarchy. We achieved the final
            design after a number of iterations, testing different versions with
            clients along the way.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_forexTrading_marketWidget.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_LargeImage}
        />
        <section className={styles.mobileDesign}>
          <div className={styles.workText}>
            <h2>Minimum Viable Product</h2>
            <p>
              One of the biggest challenges we faced as a design team was
              supporting the different development road maps of the iOS and
              Android teams. As mentioned, the teams took different approach to
              the apps development and this had a knock on effect on feature
              delivery.
            </p>
            <p>
              The best way to counter this, I found, was to create a MVP
              prototype for each platform. This allowed both teams to see the
              end goal, and work with the designers to adapt it to their
              development stories.
            </p>
          </div>
          <div className={styles.workImage}>
            <img
              src={require("../images/caseStudies/caseStudy_forexTrading_MVP_light.gif")}
              alt="Placeholder"
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
        <img
          src={require("../images/caseStudies/caseStudy_forexTrading_overview.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <Author />
      </article>
    </div>
    <Footer />
  </div>
);
