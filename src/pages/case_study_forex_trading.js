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
          <h1>Launching a Forex trading app lorem ipsum</h1>
          <p>
            Trading is hard. Designing trading applications isn't any easier.
            Executing an order at the right second can make the difference
            between a profit or a loss. As a result, quantifying the opportunity
            cost of interactions becomes vital.
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
            Create a long-term vision for mobile that better supports our users'
            varying trading behaviours and knowledge, and the execution of key
            trading tasks, while aligning visual identity, functionality, and
            interaction across all of IG's trading platforms.
          </p>
          <p>
            Testable prototypes of varying fidelity are to be produced, so that
            we may better explore and validate the vision, and promote a shared
            understanding of it, for the benefit of our teams and stakeholders.
            Crosplatform alignment - Define red routes
          </p>
          <p>
            Testable prototypes of varying fidelity are to be produced, so that
            we may better explore and validate the vision, and promote a shared
            understanding of it, for the benefit of our teams and stakeholders.
            Crosplatform alignment - Define red routes
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_forexTrading_research.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <div class="borderKeyline" />
        <section>
          <h2>Exsisting designs</h2>
          <p>
            Nulla tincidunt pharetra vestibulum. Nunc mauris elit, laoreet sit
            amet luctus in, ornare nec nisi. Interdum et malesuada fames ac ante
            ipsum primis in faucibus.
          </p>
          <h3>iOS App</h3>
          <p>
            Nulla tincidunt pharetra vestibulum. Nunc mauris elit, laoreet sit
            amet luctus in, ornare nec nisi. Interdum et malesuada fames ac ante
            ipsum primis in faucibus.
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
            Nulla tincidunt pharetra vestibulum. Nunc mauris elit, laoreet sit
            amet luctus in, ornare nec nisi. Interdum et malesuada fames ac ante
            ipsum primis in faucibus.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_forexTrading_android_before.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <section className={styles.mobileDesign}>
          <div className={styles.workText}>
            <h3>Formation Design System</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              commodo est id massa porttitor ultrices. Curabitur nec lobortis
              purus, non egestas neque. Vivamus sollicitudin consequat magna,
              nec mattis nunc luctus eu. Cras et risus faucibus, aliquet risus
              ut, egestas dolor.
            </p>
          </div>
          <div className={styles.workImage}>
            <img
              src={require("../images/caseStudies/caseStudy_forexTrading_designSystem.jpg")}
              alt="Placeholder"
            />
          </div>
        </section>
        <section>
          <h2>Iterating the mobile vision</h2>
          <p>
            Nulla tincidunt pharetra vestibulum. Nunc mauris elit, laoreet sit
            amet luctus in, ornare nec nisi. Interdum et malesuada fames ac ante
            ipsum primis in faucibus.
          </p>
          <p>
            Cras et risus faucibus, aliquet risus ut, egestas dolor. Phasellus
            cursus nunc lacus, iaculis volutpat justo consequat id. Morbi
            hendrerit blandit odio a suscipit. Vestibulum vulputate tempor
            lorem. Quisque et nibh bibendum, tincidunt enim quis, congue nisi.
          </p>
          <ul>
            <li>01 Identify new opportunities to trade</li>
            <li>02 Identify new opportunities to trade</li>
            <li>03 Identify new opportunities to trade</li>
            <li>04 Identify new opportunities to trade</li>
            <li>05 Identify new opportunities to trade</li>
            <li>06 Identify new opportunities to trade</li>
            <li>07 Identify new opportunities to trade</li>
          </ul>
        </section>
        <div class="borderKeyline" />
        <section>
          <h2>Market Widget</h2>
          <p>
            Nulla tincidunt pharetra vestibulum. Nunc mauris elit, laoreet sit
            amet luctus in, ornare nec nisi. Interdum et malesuada fames ac ante
            ipsum primis in faucibus.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_forexTrading_marketWidget.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_LargeImage}
        />
        <div class="borderKeyline" />
        <section>
          <h2>Deal Ticket</h2>
          <p>
            Nulla tincidunt pharetra vestibulum. Nunc mauris elit, laoreet sit
            amet luctus in, ornare nec nisi. Interdum et malesuada fames ac ante
            ipsum primis in faucibus.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_forexTrading_marketWidget.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_LargeImage}
        />
        <section>
          <p>
            Nulla tincidunt pharetra vestibulum. Nunc mauris elit, laoreet sit
            amet luctus in, ornare nec nisi. Interdum et malesuada fames ac ante
            ipsum primis in faucibus.
          </p>
          <p>
            Nulla tincidunt pharetra vestibulum. Nunc mauris elit, laoreet sit
            amet luctus in, ornare nec nisi. Interdum et malesuada fames ac ante
            ipsum primis in faucibus.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_forexTrading_pricesTicks.gif")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <div class="borderKeyline" />
        <section>
          <h2>Outcome & Learnings</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            pharetra facilisis augue id dapibus. Fusce mattis porta massa
            maximus fermentum. Sed a congue nisl. Nullam sit amet hendrerit
            libero. In hac habitasse platea dictumst. Curabitur varius nec
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_forexTrading_iOS_before.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <div class="borderKeyline" />
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
