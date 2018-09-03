import React from "react";
import styles from "./blogArticle.module.css";
import Author from "../components/author";
import Header from "../components/internalHeader";
import Footer from "../components/footer";

export default () => (
  <div className={styles.blogArticle}>
    <div className={styles.container}>
      <Header />
      <article>
        <section>
          <h1>Lorem ipsum dolor sit amet consectetur?</h1>
          <p className={styles.intro}>
            Trading is hard. Designing trading applications isn't any easier.
            Executing an order at the right second can make the difference
            between a profit or a loss. As a result, quantifying the opportunity
            cost of interactions becomes vital.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            gravida eu diam vestibulum sodales. Suspendisse velit odio,
            fringilla a viverra eget, ullamcorper quis dolor. Maecenas eget
            velit et sapien bibendum vestibulum. Nulla aliquam placerat sapien,
            ut gravida libero lacinia vel. Phasellus in porttitor erat, ut
            pretium erat. Fusce eget fermentum lacus. Etiam gravida lectus urna,
            sit amet feugiat dolor tincidunt non. Praesent sit amet eros elit.
            Nullam sit amet velit tincidunt, elementum lacus sed, posuere felis.
            Integer auctor auctor tempor. Donec sem justo, vehicula vitae libero
            eget, bibendum pellentesque leo. Curabitur eu arcu id nisi fermentum
            tincidunt. Pellentesque habitant morbi tristique senectus et netus
            et malesuada fames ac turpis egestas. Suspendisse quam felis,
            convallis nec felis eget, pellentesque iaculis diam. Praesent nisl
            purus, ultricies ac porta eu, rhoncus id velit. Vivamus ut consequat
            augue, a mattis tortor.
          </p>
          <p>
            Morbi ornare hendrerit turpis at euismod. Pellentesque rutrum in
            neque et elementum. Mauris fringilla ut tellus sit amet ornare.
            Curabitur molestie erat elit, nec malesuada leo faucibus et. Etiam
            ut turpis at ipsum rhoncus scelerisque. Aenean nec arcu lorem.
            Suspendisse eget porttitor tortor. Nam elit libero, congue sit amet
            pulvinar ac, lobortis sed tortor. Duis vitae viverra arcu.
          </p>

          <p>
            Donec dui dui, imperdiet a sollicitudin quis, porta at ipsum. Etiam
            arcu magna, varius sed ligula non, facilisis malesuada elit.
            Praesent sodales id lorem eu fringilla. Phasellus et iaculis ligula.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Aliquam congue tortor nec urna aliquet, sit
            amet ornare orci fringilla. Orci varius natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus. Etiam efficitur eu mi
            at efficitur. Curabitur consectetur id velit non vehicula. Quisque
            faucibus dolor nisl, a sodales urna laoreet vel. Morbi volutpat
            dignissim libero, eu tincidunt sapien sodales eget. Donec
            pellentesque cursus mi sed aliquet. Ut blandit ex vel velit pretium,
            ac scelerisque ex varius. Phasellus sed elit nisi.
          </p>
        </section>
        <Author />
      </article>
    </div>
    <Footer />
  </div>
);
