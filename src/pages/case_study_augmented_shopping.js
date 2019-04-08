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
          <h1>Augmenting the in-store shopping experience</h1>
          <p className="intro">
            Continuous improvement initiatives are a great way to iterate and
            enhance existing features. Occasionally they become an opportunity
            to instigate more fundamental change too. The scanner project helped
            me turn a neglected feature into a catalyst for redefining the
            in-store experience.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_augmentedShopping_hero.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_LargeImage}
        />
        <section>
          <h2>Challenge</h2>
          <p>
            After joining the mobile team in October 2018, my first assignment
            was to redesign the app's barcode scanner. The team had begun
            collecting data on the existing implementation and the initial
            research pointed towards a few areas with room for improvement.
          </p>
          <p>The areas of focus were:</p>
          <ul>
            <li>Improving the scanner UI </li>
            <li>Giving better user feedback </li>
            <li> Providing more accurate product results</li>
          </ul>
        </section>
        <div class="borderKeyline" />
        <section>
          <h2>Discover & define</h2>
          <p>
            After reviewing the team's research, the next task was to explore
            and define the problem further. Part of that process was a heuristic
            review. The review highlighted key pain points but also indicated
            opportunities for improvement.
          </p>
          <h3>Existing designs</h3>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_augmentedShopping_heuristicReview.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <section>
          <h3>Heuristic review</h3>
          <h4>Flexibility and efficiency of use</h4>
          <p>
            One of the primary user tasks was to add items to your cart ready
            for checkout. Another was to add items to a shopping list to
            purchase at a later date. The former was fairly well supported with
            a link from the product search page. There wasn't any access to the
            scanner from the list section though.
          </p>
          <p>
            Another common user task was to scan multiple products
            consecutively. This behaviour was also overlooked. After each scan a
            user had to return to the search page and navigate to the scanner
            again.
          </p>
          <h4>Match between system and the real world</h4>
          <p>
            When a user launched the scanner for the first time the OS requires
            a user's permission to access the camera. In the existing
            implementation, the alert was presented immediately with little
            context around how and why the camera is needed.
          </p>
          <h4>Visibility of system status</h4>
          <p>
            A serious failing of the scanner was the lack of feedback. If an
            unlisted product was scanned nothing happened. If a listed product
            was scanned, the only feedback was a loading screen.
          </p>
          <h4>Help users recognise, diagnose, and recover from errors</h4>
          <p>
            If a product was successfully scanned the user is eventually
            presented with the results for that exact product. Due to the design
            of the product pages, if that product wasn't in stock, no
            alternative (sizes, flavour, brand etc) were offered.
          </p>
          <h4>Help and documentation</h4>
          <p>
            There are a number of issues that can prevent a barcode from being
            recognised. These include poor lighting, lack of focus or obscured
            barcodes. The current implementation had no way of giving timely,
            helpful information to the user in order to avoid these issues
          </p>
          <h4>Consistency and standards</h4>
          <p>
            The grocery app had recently been redesigned but the scanner was
            still using older styles. The navigation header was now inconsistent
            and the close button was in the wrong place.
          </p>
          <h4>Aesthetic and minimalist design</h4>
          <p>
            The interface for the current scanner was minimal, but basic. How
            could we overlay additional information for the user? Is there any
            value in framing the barcode better? Could more be done to shape the
            view to the scale and size of a barcode?
          </p>
        </section>
        <section>
          <h3>Best-in-class apps</h3>
          <p>
            Once we had a better understanding of the failings of our scanner, I
            started to review how other applications use a camera to aide
            customers. Although the use cases were quite different, there were a
            number of similarities in approach.
          </p>
        </section>

        <img
          src={require("../images/caseStudies/caseStudy_augmentedShopping_competitorReview.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />

        <section>
          <h3>Framing the problem</h3>
          <p>
            The last stage of the discovery process was reframing the problem.
            I'd started with a fairly narrow scope but after further exploration
            had found a number of other opportunities that could be worth
            investigating. I presented my findings to the app team for feedback
            and with their help, validated, defined and prioritised the
            problems.
          </p>
        </section>
        <div class="borderKeyline" />
        <section>
          <h2>Ideate & prototype</h2>
          <h3>Sketching sessions</h3>
          <p>
            I think it's useful to work through a number of concepts quickly
            when starting a new project. Sometimes that's with the team, other
            times that's on my own with a scrap of paper in front of sketch.
          </p>

          <p>
            An issue that concerned me from the best-in-class analysis was how
            much of the screen to obscure. The sketch below is some early
            considerations.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_augmentedShopping_designIterations.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <section>
          <h3>Concepts</h3>
          <p>
            Because the heuristic review highlighted a number of opportunities,
            I wanted to visualise some potential solutions in order for the team
            to evaluate and estimate the technical work involved before we
            defined the MVP.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_augmentedShopping_designIterations_3.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <section>
          <h3>Sweating the details</h3>
          <p>
            Once the scope had been better defined, I set about iterating on
            some of the smaller details of the scanners UI. An area I enjoyed
            experimenting with was the frame. After deciding that we wanted to
            keep the UI minimal, I produced a number of options. The designs
            below represent a few of the iterations.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_augmentedShopping_designIterations_2.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <section>
          <h3>Better feedback</h3>
          <p>
            An important objective of the project was to provide users better
            feedback around system status. Had the barcode scanned correctly?
            Was there an error? Was the product found?
          </p>
          <p>
            One way we looked at addressing this was using sound and haptic
            feedback. We tested a range of sounds and vibration options for
            different scenarios, settling on a subtle implementation for
            successful outcomes.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_augmentedShopping_designIterations_4.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <section>
          <h3>Prototyping with Origami</h3>
          <p>
            The last step was to produce a rough prototype of what the scanner
            would look like. Because the camera plays such an important part, I
            wanted to make sure we had a live camera in the prototype. This
            allowed us to test with more realistic scenarios , checking the
            accessibility of messaging and icons in different conditions.
          </p>

          <p>
            A stumbling block was that Framer does not have native camera
            support. So instead I turned to Facebook's Origimi, learning the
            basics and building the prototype over a few evenings.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_mobileVision_origami.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <section className={styles.mobileDesign}>
          <div className={styles.workText}>
            <h2>Guerrilla testing</h2>
            <p>
              Now we had a testable prototype, I could start to get better
              feedback. One of the advantages of working on a product like the
              grocery app is that you are rarely short of test participants.
            </p>
            <p>
              The first round of testing sessions included some Woolworths
              employees. With their insight we quickly began to see the
              potential for the scanner's in-store use. By adapting the API we
              could allow the scanner to read a range of additional bar codes,
              simplifying the number of scanning applications Woolworths needs
              to maintain.
            </p>
          </div>
          <div className={styles.workImage}>
            <img
              src={require("../images/caseStudies/caseStudy_augmented_shopping_Demo.gif")}
              alt="Placeholder"
            />
          </div>
        </section>
        <section>
          <h2>Opportunity</h2>
          <p>
            Woolworths processes billions of transactions every week but only a
            percentage are from online sales. As a mobile team we were always
            looking for ways to improve the experience of app users shopping
            in-store.
          </p>

          <p>
            These new scanner insights helped frame the problem in a different
            way. Combing the smart phone camera and emerging AR, machine
            learning and geolocation technologies, how could we build the
            groceries app of the future? After a number of workshops we narrowed
            our focus to 4 areas.
          </p>
          <h3>Key concepts</h3>
          <ol>
            <li>Personalising the in-store experience</li>
            <li>Improving lists</li>
            <li>Aiding in-store navigation</li>
            <li>Supporting better product choices</li>
          </ol>
        </section>
        <section className={styles.mobileDesign}>
          <div className={styles.workText}>
            <h2>Proof of concept</h2>
            <p>
              Once we had explored some potential ideas, the next task was to
              see if what could work. I was far too eager to wait until we had
              allocated development resource, so instead I scoured the internet
              looking for prototypes that could achieve our goal.
            </p>
            <p>
              Most of the traditional design tools weren't up to the task, so
              instead I turned to Xcode. By scanning Woolworth products using a
              AR mapping app and hacking a simple tutorial I was able to build
              this demo using an iPhone X and ARKit over the course of a weekend
            </p>
          </div>
          <div className={styles.workImage}>
            <img
              src={require("../images/caseStudies/caseStudy_augmentedShopping_POC.gif")}
              alt="Placeholder"
            />
          </div>
        </section>
        <section>
          <h2>Augmented in-store experience</h2>
          <p>
            After sharing the proof of concept with the team and working to
            validate the feasibility, the idea of augmenting the in-store
            experience began to gain traction.
          </p>

          <p>
            During company hack day, I lead a team in exploring how we could
            combine a number of concepts into a holistic in-store experience.
            The designs below were an early explorations in achieving the goals
            listed above. The final concepts where later presented to
            Woolworth's senior leadership.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_augmentedShopping_concepts.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_LargeImage}
        />
        <Author />
      </article>
    </div>
    <Footer />
  </div>
);
