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
            A product team needs a defined roadmap to build a good app. But to
            build an exceptional app, they also require shared purpose and
            ambition. In my role as lead UI designer at IG, I worked to create a
            collaborative design vision that would inspire change and help
            reshape how people trade on mobile.
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
            The aim of the project was to create a long-term vision for mobile.
            A set of core concepts that could be integrated into the apps within
            18-24 months. IG's mobile platforms had been stagnating and there
            was a desire to create a product that would be truly innovative. We
            prioritised streamlining key trading tasks and aligning the visual
            identity, functionality and common interaction. It was also
            important to understand traders motivations in order to encourage
            behaviour that made them more successful and ultimately more
            profitable.
          </p>
          <h3>Key user tasks</h3>
          <p>
            To focus our efforts we identified four key users task. These 'red
            routes' are the foundational user journeys that made our product
            most valuable and captured 90% or more of our traders actions.
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
            The mobile trading apps hadn't been redesigned for years. They were
            experiencing growing pains caused by multiple discrete features
            added in quick succession. From a technical perspective, the
            codebase had become bloated and hard to maintain. From a design
            perspective, the look and feel of the apps was dated and disparate.
          </p>

          <p>
            The iOS and Android apps had deviated and some key flow had become
            convoluted. The architecture on both apps again differed, but
            oriented around a hub and spoke style navigation. The information
            hierarchy was relatively flat and dense. There was emphasis on
            showing a limited number of data points on as many markets as
            possible.
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
              A big consideration was platform alignment. The recent redesign of
              the web trading platforms had been a catalyst for new features and
              ways of organising content.
            </p>

            <p>
              The mobile vision needed to integrate these features in a cohesive
              way, while respecting the nuances of the native operating systems.
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
            Domain knowledge is scarce in the world of leveraged trading so
            finding experienced traders is crucial. We started by organising
            senior stakeholder interviews, including current or former traders,
            to get insight on their views of the apps. While I was keen to get
            their perspective on the apps current strengths and weaknesses, it
            also proved to an opportunity to promote the project and its
            objectives.
          </p>

          <p>
            The next task was collecting qualitative and quantitative data from
            clients. Again, starting with the existing app, we focused on
            trading data such as the number of trade placed, markets traded,
            average session times, popular devices etc. Next I worked with the
            UX research team to organise and facilitate high value client
            interviews as well as focus groups for both existing and potential
            clients. IG hadn't conducted mobile specific research before so I
            helped create a mobile testing rig. This included screen recording
            software, camera and audio equipment and networked test devices.
          </p>

          <h3>Key findings</h3>
          <p>
            We managed to collate a huge amount of research. Some findings were
            predictable. Others proved to be controversial and contradicted much
            of the conventional thinking that had gone before. Three of the most
            interesting data points are listed below. These findings greatly
            influenced the ideation workshops and design sprints that followed.
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
            Once we had a solid base of research to reference and the main
            objectives had been clearly defined, the next step was to create
            some design concepts.
          </p>

          <p>
            It is important to have a broad set of skills and influences in the
            early stages of the ideation process. I organised and facilitated a
            number of design sprints in order maximise the possibility of
            different team members and stakeholder participating, therefore
            generating the highest quality design concepts.
          </p>
          <h3>Planning</h3>
          <p>
            The design sprints followed a common structure and lasted a week
            each. We started with a team kick off and research presentation,
            followed by a planning session for the sprint's goals, testing and
            demo sessions.
          </p>
          <h3>Ideation</h3>
          <p>
            Day 2 started with a recap of the team's design principles and
            project goals. Sketching sessions and 'Crazy 8' style design
            exercises followed.
          </p>
          <p>
            Day 3 was all about reviewing the ideas so far and planning the
            prototyping stage. This included paper prototypes or storyboarding
            exercises and was accompanied by a mid week review with
            stakeholders.
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
            All of Day 4 and the morning of Day 5 were dedicated to prototyping
            and planning testing sessions. It's important that prototype
            fidelity is considered early on. There needs to be enough detail to
            prove the concept, but not so much that you waste time at the
            expense of iterating and improving a concept.
          </p>
          <p>
            Framer is my prototyping tool of choice. It gives maximum
            flexibility, providing nested scrolling, pagination and modal
            dialogues out of the box. Or you can use the physics engine and
            custom interactions to make something bespoke. The most valuable
            aspect during the mobile vision project was the ability to prototype
            with live data using IG's trading API.
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
              Demo day was the highlight the week. A chance for the team to show
              off what they had been working on with the wider business, receive
              feedback and celebrate achievements. Where possible, prototypes
              circulated so that the demo audience could see them up close on
              their own devices.
            </p>

            <p>
              It was also an important time to reflect and calculate our next
              steps. Are the concepts ready for further testing? Do they need
              another round of iteration? Or have you proven that the concept
              shouldn't be pursued at all.
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
            Testing sessions fell into one of two categories. The first happened
            early and often. We gorilla tested concepts as much as possible
            internally, recruiting IG dealers to validate technical concepts.
            The second focused on client's personal trading habits and
            preferences. These were organised in batches, at key stages of the
            project.
          </p>
          <p>
            In both cases we needed a way of recording the sessions. As
            mentioned, this was a first for IG so considerable time was spent
            developing a robust testing setup that could be used both in the
            office and remotely.{" "}
          </p>
          <p>
            For the later stages of testing we used Framer prototypes to plug
            into the trading API, pulling in live market data and user
            preferences such as positions, balances and watchlists. This level
            of detail, again, was new ground for IG and required the input from
            several teams.{" "}
          </p>
          <p>
            The effort was rewarded with exceptionally realistic testing
            sessions. Clients responded to prototypes based on their experiences
            using their own accounts and trading history.
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
            One of the biggest risks of the project was investing in solutions
            that could become technologically redundant. Due to the long
            timelines, the proposed concepts would need to stand the test of
            time. Our best bet was to focus on creating robust design principles
            and execute them using the latest mobile technologies.
          </p>
          <p>
            Working closely with the development teams we regularly created
            proof of concepts based on the latest OS capabilities. We integrated
            features such as biometric verification, inline payments and native
            widgets to make key user tasks as frictionless as possible.
          </p>
        </section>
        <section className={styles.mobileDesign}>
          <div className={styles.workText}>
            <h3>Swift nights</h3>
            <p>
              Originally set up as an opportunity for the iOS team to brush up
              on their skills, Swift Nights quickly became an important part of
              the mobile vision project.
            </p>
            <p>
              By regular attending the events - and encouraging other designers
              to do the same - we gained invaluable insight into the latest OS
              features and became a stronger, more rounded team in the process.
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
            By the end of the workshops we had seven recommendations based
            around the original four red routes. We'd also experimented with a
            completely new app architecture and an aesthetic that aligned with
            the updated web trading platform.
          </p>
          <p>
            While the prototyping and testing was carried out on iOS devices,
            the user flows were designed to be agnostic. This allowed for
            consistency between platforms with variations limited to the
            interface based on OS guidelines.
          </p>
        </section>
        <img
          src={require("../images/caseStudies/caseStudy_mobileVision_after.jpg")}
          alt="Placeholder"
          className={styles.caseStudy_LargeImage}
        />
        <section>
          <p className="caps">Smart Onbording</p>
          <h2>Explore and personalise straight away</h2>
          <p>
            IG has always invested a lot in supporting new clients. This is
            often done with little understanding of the clients current trading
            knowledge or experience. By allowing clients to tailor their apps at
            account creation based on these factors, not only can IG offer an
            app more tailored to their needs, but can also provide the right
            kind of support from outset.
          </p>
          <ul>
            <li>Personalise your initial experience</li>
            <li>Preview app before creating an account</li>
            <li>Understand more about clients before calling</li>
          </ul>
        </section>
        <section>
          <p className="caps">Trade Everywhere</p>
          <h2>Streamline the deal flow</h2>
          <p>
            Executing an order at the right second can make the difference
            between a profit or a loss. As a result, quantifying the opportunity
            cost of interaction was vital. By keeping the ticket in context and
            aligning the design with IG's other platforms we have drastically
            reduced the cognitive load and time need to place a deal.
          </p>
          <ul>
            <li>One tap deal ticket</li>
            <li>Stay in context</li>
            <li>Align details with the web platform</li>
          </ul>
        </section>
        <section>
          <p className="caps">Market Centric Analysis</p>
          <h2>Bring together analysis & exposure per market</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            pharetra facilisis augue id dapibus. Fusce mattis porta massa
            maximus fermentum. Sed a congue nisl. Nullam sit amet hendrerit
            libero. In hac habitasse platea dictumst. Curabitur varius nec
          </p>
          <ul>
            <li>Collate market information on one screen</li>
            <li>Only see relevant content</li>
            <li>Swipe between markets and charts</li>
          </ul>
        </section>
        <section>
          <p className="caps">Conslidate Trading Activity</p>
          <h2>Trading Activity in one place</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            pharetra facilisis augue id dapibus. Fusce mattis porta massa
            maximus fermentum. Sed a congue nisl. Nullam sit amet hendrerit
            libero. In hac habitasse platea dictumst. Curabitur varius nec
          </p>
          <ul>
            <li>Positions, orders and alerts in one place</li>
            <li>More information available on lists</li>
            <li>Customise to your trading strategy</li>
          </ul>
        </section>
        <section>
          <p className="caps">Discover new opportunities</p>
          <h2>Awareness of other intersting markets</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            pharetra facilisis augue id dapibus. Fusce mattis porta massa
            maximus fermentum. Sed a congue nisl. Nullam sit amet hendrerit
            libero. In hac habitasse platea dictumst. Curabitur varius nec
          </p>
          <ul>
            <li>Explore without leaving the app</li>
            <li>Markets relevent to trading activity</li>
            <li>Task rather than feature based navigation</li>
          </ul>
        </section>
        <section>
          <p className="caps">Manage Accounts</p>
          <h2>Visual Account health and inline funding</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            pharetra facilisis augue id dapibus. Fusce mattis porta massa
            maximus fermentum. Sed a congue nisl. Nullam sit amet hendrerit
            libero. In hac habitasse platea dictumst. Curabitur varius nec
          </p>
          <ul>
            <li>Graphical account health</li>
            <li>Inline Funding</li>
            <li>Account activities in one place</li>
          </ul>
        </section>
        <section>
          <p className="caps">Increase engagement</p>
          <h2>Reduce Friction and increase visibility of IG</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            pharetra facilisis augue id dapibus. Fusce mattis porta massa
            maximus fermentum. Sed a congue nisl. Nullam sit amet hendrerit
            libero. In hac habitasse platea dictumst. Curabitur varius nec
          </p>
          <ul>
            <li>Monitor and research without frequent login</li>
            <li>Widgets expose key information outside the app</li>
            <li>Show charts in notifications</li>
          </ul>
        </section>

        <Author />
      </article>
    </div>
    <Footer />
  </div>
);