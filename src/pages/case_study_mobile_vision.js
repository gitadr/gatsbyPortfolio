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
          <h1>Creating a vision for the future of mobile trading</h1>
          <p className="intro">
            Having an inspirational vision allows a product team to move beyond
            just delvering the next feature and instead build with intent. As a
            lead designer at IG I created a vision that would reshape how people
            trade on mobile.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_MobileVision_Hero.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_LargeImage}
        />
        <section>
          <h2>Creating a brief</h2>
          <p>
            The aim of the project was to create an long-term vision for mobile.
            A set of core concepts that could be integrated into the apps within
            18-24 months. IG's mobile platforms had been stagnating and the
            ambition was to create a product that would be truly innovative. We
            priorotised streamlining key trading tasks and aligning the visual
            identity, functionality and common interaction. We also wanted to
            better understand traders motivations and encouraging behaviour that
            made them more sucessful and ultimatly more profitable for IG.
          </p>
          <h3>Key user tasks</h3>
          <p>
            To focus our efforts we identified four key users task. These 'red
            routes' are the foundational user journeys that we belived made our
            product most valuable and captured 90% or more of our traders
            actions.
          </p>
          <ul>
            <li>01 Register and manage an account</li>
            <li>02 Identify opportunities to trade</li>
            <li>03 Open a new position</li>
            <li>04 Monitor, edit and close positions</li>
          </ul>
        </section>
        <div class="borderKeyline" />
        <section>
          <h2>State of play</h2>
          <p>
            The mobile trading apps hadn't been redesigned for some years and
            had developed from roadmap that encouraged short term, discrete
            feautures. From a technical perspective the codebase had become
            outdated and hard to maintain. From a design perspective the look
            and feel of the apps was dated and disparate.
          </p>

          <p>
            The iOS and Android apps had deviated and some key flow had become
            convoluted. The architecture on both apps again differed, but
            oriented around a hub and spoke style navigation. The information
            hierachy was relativly flat and dense. The was emphasis on showing a
            limited number of data points on as many markets as possible.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_mobileVision_before.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_LargeImage}
        />
        <section className={styles.mobileDesign}>
          <div className={styles.workText}>
            <h3>Platform alignment</h3>
            <p>
              A big consideration was platform alignment. The revent redesign of
              the web trading platforms had been a catalyst for new services and
              ways of organising content.
            </p>

            <p>
              The mobile vision needed to integrate these features in a cohesive
              way while respecting the nuances of the native operating systems.
              Creating a consistent but not uniformed experience.
            </p>
          </div>
          <div className={styles.workImage}>
            <img
              src={require("../images/caseStudies/caseStudy_mobileVision_NWTP.jpg")}
              alt="Placeholder"
            />
          </div>
        </section>
        <section>
          <h2>Research</h2>
          <p>
            Domain knowledge is scarce resource in the world of leveraged
            trading so finding experienced traders is crucial. We started by
            organising senior stakeholder interviews (many of which are current
            or former traders), to gain insight into their views of the existing
            apps. It was important to get their perspective on the strengths and
            weaknesses app but also proved to be a good opportunity to promote
            the project and its objectives.
          </p>

          <p>
            The next task was collecting qualitative and quantitate data from
            clients. Again starting with the existing app we focused in trading
            data such as the number of trade placed, markets traded, average
            session times, popular devices etc. Next I worked with the UX
            research team to organise and facilitate high value client
            interviews as well as focus groups for both existing and potential
            clients. IG hadn't conducted mobile specific research before so I
            helped create a mobile testing rig. This included screen recording
            software, camera and audio equipment and networked test devices.
          </p>

          <h3>Key findings</h3>
          <p>
            We managed to collate a huge amount of research. Some finding were
            predictable. Others proved to be hugly controversal and contridcted
            much of the conventional thinking that had gone before. Three of the
            most interesting data points are listed below. These findings
            greatly influnced the ideation workshops and design sprints that
            followed.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_mobileVision_research.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <div class="borderKeyline" />
        <section>
          <h2>Design Sprints</h2>
          <p>
            Once we had solid base of research to reference and the main
            objectives had been clearly defined, the next step was to create
            osome design conceptss.
          </p>

          <p>
            It is important to have a broad set of skills and influences in the
            early stages of the ideation process. I organised and facilitated a
            number of design sprints in order maximise the possibility of
            different team members and stakeholder participating and therefore
            generating the highest quality design concepts.
          </p>
          <h3>Planning</h3>
          <p>
            The design sprints followed a common structure and lasted a week
            each. We started with a team kick off and research presentation
            followed by a planning session for the sprints goals and
            testing/demo sessions.{" "}
          </p>
          <h3>Ideation</h3>
          <p>
            Tuesdays start with a recap of the teams design principles and
            project goals. This is followed by sketching sessions and 'Crazy 8'
            style design exercises.{" "}
          </p>
          <p>
            Wednesday is all about reviewing the ideas so far and planning the
            prototyping stage. This can include paper prototypes or
            storyboarding exercises but should include a mid week review to
            discuss with stakeholders.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_mobileVision_ideation.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <section>
          <h3>Prototyping</h3>
          <p>
            All day Thursday and Friday mornings are dedicated to prototyping
            and planning testing sessions. It's important prototype fidelity is
            considered early on. There needs to be enough detail to prove the
            concept, but not too high that you waste time at the expense of
            iterating and improving a concept.
          </p>
          <p>
            Framer is my prototyping tool of choice. It gives maximum
            flexibility. It provides nested scrolling, pagination and modal
            dialogues out of the box or you can use the physics engine and
            custom interactions to make something bespoke. The most valuable
            during the mobile vision project was ability to prototype with live
            data using IG's trading API.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_mobileVision_prototype.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <section className={styles.mobileDesign}>
          <div className={styles.workText}>
            <h2>Demo Day</h2>
            <p>
              Demo day is the highlight of my week. It's a chance for the team
              to show off what they have been working on with the wider
              business, receive feedback and celebrate the achivements of the
              week. Where possible prototypes circulated so that the demo
              audience can see them up close on their own devices.
            </p>

            <p>
              It's also an important time to refelct and work out next steps.
              Are the concepts ready for further testing? Do they need another
              round of iteration? Or have you proven that the concept shouldn't
              be pursued at all.
            </p>
          </div>
          <div className={styles.workImage}>
            <img
              src={require("../images/caseStudies/caseStudy_redRoute1.gif")}
              alt="Placeholder"
            />
          </div>
        </section>
        <section>
          <h2>User testing</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            pharetra facilisis augue id dapibus. Fusce mattis porta massa
            maximus fermentum. Sed a congue nisl. Nullam sit amet hendrerit
            libero. In hac habitasse platea dictumst. Curabitur varius nec
            turpis ultricies porta. Mauris sit amet tellus lectus. Nam ligula
            nisi, pulvinar quis elit cursus, dapibus faucibus justo. Suspendisse
            potenti. Nullam metus tortor, pretium at placerat eget, viverra quis
            magna.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_mobileVision_userTesting.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_MediumImage}
        />
        <div class="borderKeyline" />
        <section>
          <h2>Keep innovating</h2>
          <p>
            One of the biggest risks for the project was creating solutions that
            become technologically redundant. Due to the long timelines involved
            the proposed concepts would need to stand the test of time. The best
            hedge against *this* was to focus on strong design principles and
            execute them using the latest mobile technologies.
          </p>
          <p>
            Working closely with the development teams we regularly created
            proof of concepts based on the latest OS capabilities. Integrating
            features such as biometric verification, inline payments and native
            widgets into our designs, making interactions feel seamless. The
            adage that "...sufficiently advanced technology is indistinguishable
            from magic" has never felt more true.
          </p>
        </section>
        <section className={styles.mobileDesign}>
          <div className={styles.workText}>
            <h3>Swift nights</h3>
            <p>
              Originally set up as an opportunity of the iOS team to brush up on
              their Swift skills, Swift Nights quickly became an important part
              of the mobile vision project.
            </p>
            <p>
              By regular attending the events and encouraging other designers to
              do the same, we gained invaluable insight into latest OS features
              and became a stronger team in the process.
            </p>
          </div>
          <div className={styles.workImage}>
            <img
              src={require("../images/caseStudies/caseStudy_mobileVision_Swift.jpg")}
              alt="Placeholder"
            />
          </div>
        </section>
        <section>
          <h2>Design Vision</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            pharetra facilisis augue id dapibus. Fusce mattis porta massa
            maximus fermentum. Sed a congue nisl. Nullam sit amet hendrerit
            libero. In hac habitasse platea dictumst. Curabitur varius nec
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            pharetra facilisis augue id dapibus. Fusce mattis porta massa
            maximus fermentum. Sed a congue nisl. Nullam sit amet hendrerit
            libero. In hac habitasse platea dictumst. Curabitur varius nec
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_mobileVision_after.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_LargeImage}
        />
        <section>
          <p className="caption">Trade Everywhere</p>
          <h2>Streamline the deal flow</h2>
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
        <section>
          <p className="caption">Trade Everywhere</p>
          <h2>Streamline the deal flow</h2>
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
        <section>
          <p className="caption">Trade Everywhere</p>
          <h2>Streamline the deal flow</h2>
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
        <section>
          <p className="caption">Trade Everywhere</p>
          <h2>Streamline the deal flow</h2>
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
        <section>
          <p className="caption">Trade Everywhere</p>
          <h2>Streamline the deal flow</h2>
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
        <section>
          <p className="caption">Trade Everywhere</p>
          <h2>Streamline the deal flow</h2>
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
        <section>
          <p className="caption">Trade Everywhere</p>
          <h2>Streamline the deal flow</h2>
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
