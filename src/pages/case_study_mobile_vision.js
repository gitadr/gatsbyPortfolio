import React from "react";
import CaseStudyLayout from "../components/caseStudyLayout";
import styles from "../styles/caseStudy.module.css";
import { StaticImage } from "gatsby-plugin-image";
import mobileVisionDemo from "../images/caseStudies/caseStudy_mobileVision_Demo.gif";
import Seo from "../components/seo";
import LazyAnimatedImage from "../components/lazyAnimatedImage";

const MobileVision = () => {
  return (
    <CaseStudyLayout>
          <section>
            <h1>Creating a vision for the future of mobile trading</h1>
            <p className="intro">
              A product team needs a clear roadmap to build a good app, but
              building an exceptional app requires a shared purpose and ambition
              In my role as the lead mobile UI designer, I worked to create a
              collaborative design vision that would inspire change and help
              reshape how people trade on mobile.
            </p>
          </section>
          <StaticImage
            src="../images/caseStudies/caseStudy_mobileVision_Hero.jpg"
            alt="Concept screens illustrating the IG mobile trading vision"
            className={styles.caseStudy_LargeImage}
          />
          <section>
            <h2>Creating a brief</h2>
            <p>
              The aim of the project was to create a long-term vision for
              mobile. A set of core concepts that could be integrated into the
              apps within 18–24 months. IG's mobile platforms had been
              stagnating and there was a desire to create a product that would
              be truly innovative. We prioritised streamlining key trading tasks
              and aligning the visual identity, functionality and common
              interaction. It was also important to understand traders'
              motivations in order to encourage behaviour that made them more
              successful and ultimately more profitable.
            </p>
            <h3>Key user tasks</h3>
            <p>
              To focus our efforts, we identified four key user tasks. These
              'red routes' are the foundational user journeys that made our
              product most valuable and captured 90% of our traders' actions.
            </p>
            <ul>
              <li>
                <p>01 Register and manage an account</p>
              </li>
              <li>
                <p>02 Identify opportunities to trade</p>
              </li>
              <li>
                <p>03 Open a new position</p>
              </li>
              <li>
                <p>04 Monitor, edit and close positions</p>
              </li>
            </ul>
          </section>
          <div className="borderKeyline" />
          <section>
            <h2>State of play</h2>
            <p>
              The mobile trading apps hadn't been redesigned for years. They
              were experiencing growing pains caused by multiple discrete
              features added in quick succession. From a technical perspective,
              the codebase had become bloated and hard to maintain. From a
              design perspective, the look and feel of the apps was dated and
              disparate.
            </p>

            <p>
              The iOS and Android apps had diverged, and some key flows had
              become convoluted. The architecture of both apps differed, but
              both were oriented around a hub-and-spoke style of navigation. The
              information hierarchy was relatively flat and dense. There was
              emphasis on showing a limited number of data points on as many
              markets as possible.
            </p>
          </section>
          <section className={styles.mobileDesign}>
            <div className={styles.workText}>
              <h3>Platform alignment</h3>
              <p>
                A big consideration was platform alignment. The recent redesign
                of the web trading platforms had been a catalyst for new
                features and ways of organising content.
              </p>

              <p>
                The mobile vision needed to integrate these features in a
                cohesive way, while respecting the nuances of the native
                operating systems. Creating a consistent but not uniformed
                experience.
              </p>
            </div>
            <div className={styles.workImage}>
              <StaticImage
                src="../images/caseStudies/caseStudy_mobileVision_NWTP.jpg"
                alt="Comparison of IG web and mobile trading experiences"
              />
            </div>
          </section>
          <section>
            <h2>Research</h2>
            <p>
              Domain knowledge is scarce in the world of leveraged trading so
              finding experienced traders was crucial. We started by organising
              senior stakeholder interviews, including current or former
              traders, to get insight on their views of the apps. While I was
              initially keen to get their perspective on the apps' strengths and
              weaknesses, it also proved to be an opportunity to promote the
              project and its objectives..
            </p>

            <p>
              The next task was collecting qualitative and quantitative data
              from clients. Again, starting with the existing app, we focused on
              trading data such as the number of trades placed, markets traded,
              average session times, popular devices etc. Next I worked with the
              UX research team to organise and facilitate high-value client
              interviews as well as focus groups for both existing and potential
              clients. IG hadn’t conducted mobile-specific research before, so I
              helped create a mobile testing rig. This included screen recording
              software, camera and audio equipment and networked test devices.
            </p>

            <h3>Key findings</h3>
            <p>
              We managed to collate a huge amount of research. Some findings
              were predictable. Others proved to be controversial and
              contradicted much of the conventional thinking that had gone
              before. Three of the most interesting data points are listed
              below. These findings greatly influenced the ideation workshops
              and design sprints that followed.
            </p>
          </section>
          <StaticImage
            src="../images/caseStudies/caseStudy_mobileVision_research.jpg"
            alt="Research synthesis wall capturing trader interviews and insights"
            className={styles.caseStudy_LargeImage}
          />
          <section>
            <h2>Design Sprints</h2>
            <p>
              Once we had a solid base of research to reference and the main
              objectives had been clearly defined, the next step was to create
              some design concepts.
            </p>

            <p>
              It is important to have a broad set of skills and influences in
              the early stages of the ideation process. I organised and
              facilitated several design sprints to maximise the participation
              of team members and stakeholders, therefore generating the highest
              quality design concepts.
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
              Day two started with a recap of the team's design principles and
              project goals. Sketching sessions and 'Crazy 8' style design
              exercises followed.
            </p>
            <p>
              Day three was all about reviewing the ideas so far and planning
              the prototyping stage. This included paper prototypes or
              storyboarding exercises and was accompanied by a mid week review
              with stakeholders.
            </p>
          </section>
          <StaticImage
            src="../images/caseStudies/caseStudy_mobileVision_ideation.jpg"
            alt="Design sprint sketches and storyboards exploring trading flows"
            className={styles.caseStudy_MediumImage}
          />
          <section>
            <h3>Prototyping</h3>
            <p>
              All of day four and the morning of day five were dedicated to
              prototyping and planning testing sessions. It's important that
              prototype fidelity is considered early on. There needs to be
              enough detail to prove the concept, but not so much that you waste
              time at the expense of iterating and improving a concept.
            </p>
            <p>
              Framer is my prototyping tool of choice. It gives maximum
              flexibility, providing nested scrolling, pagination and modal
              dialogues out of the box. You can also use the physics engine and
              custom interactions to make something bespoke. The most valuable
              aspect during the mobile vision project was the ability to
              prototype with live data using IG's trading API.
            </p>
          </section>
          <StaticImage
            src="../images/caseStudies/caseStudy_mobileVision_prototype.jpg"
            alt="Framer prototype showing interactive IG trading screens"
            className={styles.caseStudy_MediumImage}
          />
          <section className={styles.mobileDesign}>
            <div className={styles.workText}>
              <h2>Demo Day</h2>
              <p>
                Demo day was the highlight the week. A chance for the team to
                show off what they had been working on with the wider business,
                receive feedback and celebrate achievements. Where possible,
                prototypes circulated so that the demo audience could see them
                up close on their own devices.
              </p>

              <p>
                It was also an important time to reflect and calculate our next
                steps. Are the concepts ready for further testing? Do they need
                another round of iteration? Or have you proven that the concept
                shouldn't be pursued at all?
              </p>
            </div>
            <div className={styles.workImage}>
              <LazyAnimatedImage
                src={mobileVisionDemo}
                alt="Mobile vision demo animation from the design sprint"
                width={400}
                height={665}
              />
            </div>
          </section>
          <section>
            <h2>User testing</h2>
            <p>
              Testing sessions fell into one of two categories. The first
              happened early and often. We guerilla tested concepts as much as
              possible internally, recruiting IG dealers to validate technical
              concepts. The second focused on client's personal trading habits
              and preferences. These were organised in batches at key stages of
              the project.
            </p>
            <p>
              In both cases, we needed a way of recording the sessions. As
              mentioned, this was a first for IG, so considerable time was spent
              developing a robust testing setup that could be used both in the
              office and remotely.
            </p>
            <p>
              For the later stages of testing we used Framer prototypes to plug
              into the trading API, pulling in live market data and user details
              such as positions, balances and watchlists. This level of detail,
              again, was new ground for IG and required the input from several
              teams.
            </p>
            <p>
              The effort was rewarded with exceptionally realistic testing
              sessions. Clients responded to prototypes based on their
              experiences using their own accounts and trading history.
            </p>
          </section>
          <StaticImage
            src="../images/caseStudies/caseStudy_mobileVision_userTesting.jpg"
            alt="User testing sessions validating the mobile trading vision"
            className={styles.caseStudy_MediumImage}
          />
          <div className="borderKeyline" />
          <section>
            <h2>Keep innovating</h2>
            <p>
              One of the biggest risks of the project was investing in solutions
              that could become technologically redundant. Due to the long
              timelines, the proposed concepts would need to stand the test of
              time. Our best bet was to focus on creating robust design
              principles and execute them using the latest mobile technologies.
            </p>
            <p>
              Working closely with the development teams we regularly created
              proof of concepts based on the latest OS capabilities. We
              integrated features such as biometric verification, inline
              payments and native widgets to make key user tasks as frictionless
              as possible.
            </p>
          </section>
          <section className={styles.mobileDesign}>
            <div className={styles.workText}>
              <h3>Swift nights</h3>
              <p>
                Originally set up as an opportunity for the iOS team to brush up
                on their skills, Swift Nights quickly became an important part
                of the mobile vision project.
              </p>
              <p>
                By regularly attending the events – and encouraging other
                designers to do the same – we gained invaluable insight into the
                latest OS features and became a stronger, more rounded team in
                the process.
              </p>
            </div>
            <div className={styles.workImage}>
              <StaticImage
                src="../images/caseStudies/caseStudy_mobileVision_Swift.jpg"
                alt="Swift Nights workshop bringing designers and engineers together"
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
            <h3>Medium-fidelity designs</h3>
          </section>
          <StaticImage
            src="../images/caseStudies/caseStudy_mobileVision_after.jpg"
            alt="Medium fidelity mockups of the reimagined IG mobile app"
            className={styles.caseStudy_LargeImage}
          />
          <section>
            <p className="caps">Smart Onbording</p>
            <h2>Explore and personalise straight away</h2>
            <p>
              IG has always invested in supporting new clients. This
              historically had to be done without any upfront understanding of a
              client's trading knowledge or experience. By allowing clients to
              tailor the app at login, based on experience or trading style, IG
              can offer a more personalised experience.
            </p>
            <h3>Summary</h3>
            <ul>
              <li>
                <p>Tailor your initial experience</p>
              </li>
              <li>
                <p>Preview app before creating an account</p>
              </li>
              <li>
                <p>Understand more about clients before calling</p>
              </li>
            </ul>
          </section>
          <section>
            <p className="caps">Trade Everywhere</p>
            <h2>Streamline the deal flow</h2>
            <p>
              Executing an order at the right second can make the difference
              between a profit or a loss. So quantifying the opportunity cost of
              interactions was vital. By keeping the ticket in context and
              aligning the design with IG's other platforms, we have drastically
              reduced the cognitive load and time needed to place a deal.
            </p>
            <h3>Summary</h3>
            <ul>
              <li>
                <p>One tap deal ticket</p>
              </li>
              <li>
                <p>Stay in context</p>
              </li>
              <li>
                <p>Align details with the web platform</p>
              </li>
            </ul>
          </section>
          <section>
            <p className="caps">Market Centric Analysis</p>
            <h2>Bring together analysis & exposure per market</h2>
            <p>
              One of the biggest changes proposed in the design vision was a
              move from feature to task-based navigation. During the research we
              found that the vast majority of users only trade in three to five
              markets.
            </p>

            <p>
              This contradicts previous thinking and opens new design
              opportunities. We switched from showing a small amount of data on
              many markets, to showing a lot of information on the most
              important markets.
            </p>

            <p>
              This change also allowed us to move away from the hub-and-spoke
              style navigation to point-to-point focused one. This drastically
              reduced the amount of steps in key user flows, allowing us to make
              switching between markets easier.
            </p>
            <h3>Summary</h3>
            <ul>
              <li>
                <p>Collate market information on one screen</p>
              </li>
              <li>
                <p>Only see relevant content</p>
              </li>
              <li>
                <p>Swipe between markets and charts</p>
              </li>
            </ul>
          </section>
          <section>
            <p className="caps">Consolidate Trading Activity</p>
            <h2>Trading Activity in one place</h2>
            <p>
              The second new section is Monitor. In the current app, pending,
              open and closed orders are all separate areas of the app. With the
              new architecture they are brought together in one 'Trades' tab.
              The 'Trades' tab focuses on the task of managing exposure and
              allows users to see the entire history of an order easily.
            </p>
            <h3>Summary</h3>
            <ul>
              <li>
                <p>Open, pending and closed orders all in one place</p>
              </li>
              <li>
                <p>More information available on lists</p>
              </li>
              <li>
                <p>Customise to your trading strategy</p>
              </li>
            </ul>
          </section>
          <section>
            <p className="caps">Discover new opportunities</p>
            <h2>Awareness of other interesting markets</h2>
            <p>
              A consequence of reducing the prominence of watchlists is that it
              becomes harder to find opportunities in unfamiliar markets. To
              compensate for this, we proposed a task-based section called
              'Discover'. There, users could see trending markets , breaking
              news and press coverage as well as details about upcoming economic
              events – all without leaving the app.
            </p>
            <h3>Summary</h3>
            <ul>
              <li>
                <p>Explore without leaving the app</p>
              </li>
              <li>
                <p>Markets relevant to trading activity</p>
              </li>
              <li>
                <p>Task rather than feature based navigation</p>
              </li>
            </ul>
          </section>
          <section>
            <p className="caps">Manage Accounts</p>
            <h2>Visual Account health and inline funding</h2>
            <p>
              The final task-based section of the app is account management.
              Here we grouped all of a user's common account-based tasks and
              visualised key balance values. We also designed ways to allow some
              tasks to be done in context. A good example is payments. Instead
              of navigating away from a task to deposit funds, users can
              leverage Apple or Google Pay to deposit straight from a deal
              ticket.
            </p>
            <h3>Summary</h3>
            <ul>
              <li>
                <p>Graphical account health</p>
              </li>
              <li>
                <p>Inline funding</p>
              </li>
              <li>
                <p>Account activities in one place</p>
              </li>
            </ul>
          </section>
          <section>
            <p className="caps">Increase engagement</p>
            <h2>Reduce Friction and increase visibility of IG</h2>
            <p>
              Another key statistic from the research showed that a large
              proportion of sessions were for under ten seconds. These short but
              frequent logins were to check account health and balances. The
              last recommendation was to reduce the need to log in to see
              account health information by integrating better with the mobile
              OS. This would include using home page widgets, richer
              notifications and shortcuts.
            </p>
            <h3>Summary</h3>
            <ul>
              <li>
                <p>Monitor and research without frequent login</p>
              </li>
              <li>
                <p>Widgets expose key information outside the app</p>
              </li>
              <li>
                <p>Show charts in notifications</p>
              </li>
            </ul>
          </section>
    </CaseStudyLayout>
  );
};

export default MobileVision;

export const Head = () => (
  <Seo
    title="Creating a vision for the future of mobile trading – Aaron Root"
    description="Design research, sprints, and prototypes that reimagined IG's mobile trading experience."
    pathname="/case_study_mobile_vision"
    type="article"
  />
);
