import React from "react";
import styles from "./caseStudy.module.css";
import Header from "../components/internalHeader";
import Author from "../components/author";
import Footer from "../components/footer";
import SEO from "../components/SEO";

export default () => (
  <div className={styles.caseStudy}>
    <div className={styles.container}>
      <SEO />
      <Header />
      <article>
        <section>
          <h1>Designing high risk interactions.</h1>
          <p>
            Trading is hard. Designing trading applications isn't any easier.
            Executing an order at the right second can make the difference
            between a profit or a loss. As a result, quantifying the opportunity
            cost of interactions becomes vital.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_01_formationPreview.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_LargeImage}
        />
        <section>
          <h2>Reseach process</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            commodo est id massa porttitor ultrices. Curabitur nec lobortis
            purus, non egestas neque. Vivamus sollicitudin consequat magna, nec
            mattis nunc luctus eu. Cras et risus faucibus, aliquet risus ut,
            egestas dolor. Phasellus cursus nunc lacus, iaculis volutpat justo
            consequat id. Morbi hendrerit blandit odio a suscipit. Vestibulum
            vulputate tempor lorem. Quisque et nibh bibendum, tincidunt enim
            quis, congue nisi.
          </p>
          <p>
            Nulla tincidunt pharetra vestibulum. Nunc mauris elit, laoreet sit
            amet luctus in, ornare nec nisi. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Maecenas vestibulum leo at vulputate
            tempus. Maecenas ultricies quam at consequat dignissim. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Mauris vehicula rutrum
            quam, non volutpat lacus laoreet laoreet. Curabitur tempus vel magna
            vel fermentum. Mauris pellentesque pulvinar sapien Nunc mauris elit,
            laoreet sit amet luctus in, ornare nec nisi. Interdum et malesuada
            fames ac ante ipsum primis
          </p>
        </section>
        <section className={styles.mobileDesign}>
          <div className={styles.workText}>
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              commodo est id massa porttitor ultrices. Curabitur nec lobortis
              purus, non egestas neque. Vivamus sollicitudin consequat magna,
              nec mattis nunc luctus eu. Cras et risus faucibus, aliquet risus
              ut, egestas dolor.
            </p>
            <p>
              Phasellus cursus nunc lacus, iaculis volutpat justo consequat id.
              Morbi hendrerit blandit odio a suscipit. Vestibulum vulputate
              tempor lorem. Quisque et nibh bibendum, tincidunt enim quis,
              congue nisi.
            </p>
          </div>
          <div className={styles.workImage}>
            <img
              src={require("../images/workPlaceholder_mobile.jpg")}
              alt="Placeholder"
            />
          </div>
        </section>
        <section>
          <h3>Lorem ipsum</h3>
          <p>
            Nulla tincidunt pharetra vestibulum. Nunc mauris elit, laoreet sit
            amet luctus in, ornare nec nisi. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Maecenas vestibulum leo at vulputate
            tempus. Maecenas ultricies quam at consequat dignissim. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Mauris vehicula rutrum
            quam, non volutpat lacus laoreet laoreet. Curabitur tempus vel magna
            vel fermentum. Mauris pellentesque pulvinar sapien Nunc mauris elit,
            laoreet sit amet luctus in, ornare nec nisi. Interdum et malesuada
            fames ac ante ipsum primis
          </p>
        </section>
        <img
          src={require("../images/workPlaceholder.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <section>
          <h2>Reseach process</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            commodo est id massa porttitor ultrices. Curabitur nec lobortis
            purus, non egestas neque. Vivamus sollicitudin consequat magna, nec
            mattis nunc luctus eu. Cras et risus faucibus, aliquet risus ut,
            egestas dolor. Phasellus cursus nunc lacus, iaculis volutpat justo
            consequat id. Morbi hendrerit blandit odio a suscipit. Vestibulum
            vulputate tempor lorem. Quisque et nibh bibendum, tincidunt enim
            quis, congue nisi.
          </p>
        </section>
        <Author />
      </article>
    </div>
    <Footer />
  </div>
);
