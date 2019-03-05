import React from "react";
import styles from "./books.module.css";
import Header from "../components/internalHeader";
import Footer from "../components/footer";
import SEO from "../components/SEO";

export default () => (
  <div>
    <section className={styles.books}>
      <div className={styles.container}>
        <SEO />
        <Header />
        <h1>Reading List</h1>
        <p class="intro">42 read, 18 to go</p>
      </div>
      <div className={styles.bookGrid}>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/38315.Fooled_by_Randomness"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/nassimTaleb_FooledByRandomness.png")}
              alt="Nassim Nicholas Taleb – Fooled By Randomness"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/242472.The_Black_Swan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/nassimTaleb_TheBlackSwan.png")}
              alt="Nassim Nicholas Taleb – The Black Swans"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/9402297-the-bed-of-procrustes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/nassimTaleb_TheBedOfProcrustes.png")}
              alt="Nassim Nicholas Taleb – The Bed Of Procrustes"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/15956427-antifragile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/nassimTaleb_Anti-fragile.png")}
              alt="Nassim Nicholas Taleb – Anti-Fragile"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/36064445-skin-in-the-game"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/nassimTaleb_SkinInTheGame.png")}
              alt="Nassim Nicholas Taleb – Skin In The Game"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/23692271-sapiens"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/yuvalNoahHarari_Sapiens.png")}
              alt="Yuval Noah Harari – Sapiens"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/31138556-homo-deus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/yuvalNoahHarari_HomoDeus.png")}
              alt="Yuval Noah Harari – Homo Deus"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/17333324-ancillary-justice"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/annLeckie_AncillaryJustice.png")}
              alt="Ann Leckie – Ancillary Justice"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/23533039-ancillary-mercy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/annLeckie_AncillaryMercy.png")}
              alt="Ann Leckie – Ancillary Mercy"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/20706284-ancillary-sword"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/annLeckie_AncillarySword.png")}
              alt="Ann Leckie – Ancillary Sword"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/25353286-provenance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/annLeckie_Provenance.png")}
              alt="Ann Leckie – Provenance"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/19161852-the-fifth-season/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/nKJemisin_TheFifthSeason.png")}
              alt="N.K. Jemisin – The Fifth Season"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/26228034-the-obelisk-gate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/nKJemisin_TheObeliskGate.png")}
              alt="N.K. Jemisin – The Obelisk Gate"
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a
            href="https://www.goodreads.com/book/show/31817749-the-stone-sky"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/nKJemisin_TheStoneSky.png")}
              alt="N.K. Jemisin – The Stone Sky"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/35629744-the-square-and-the-tower"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/niallFergerson_TheSquareAndTheTower.png")}
              alt="Niall Fergerson – The Square and the Tower"
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a
            href="https://www.goodreads.com/book/show/10475421-civilization"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/niallFergerson_Civilization.png")}
              alt="Niall Fergerson – Civilization"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/11084145-steve-jobs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/walterIsaacson_SteveJobs.png")}
              alt="Walter Isaacson – Steve Jobs"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/18077903-creativity-inc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/edCatmull_CreativityInc.png")}
              alt="Ed Catmull – Creativity Inc"
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a
            href="https://www.goodreads.com/book/show/17288649-creative-confidence"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/tomDavidKelley_creativeConfidence.png")}
              alt="Tom & David Kelley – Creative Confidence"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/41804.I_Robot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/issacAsimov_iRobot.png")}
              alt="Issac Asimov – iRobot"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/7954936-what-technology-wants"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/kevinKelly_WhatTechnologyWants.png")}
              alt="Kevin Kelly – What Technology Wants"
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a
            href="https://www.goodreads.com/book/show/27209431-the-inevitable"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/kevinKelly_TheInevitable.png")}
              alt="Kevin Kelly – The Inevitable"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/30118099-the-descent-of-man"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/graysonPerry_TheDecentOfMan.png")}
              alt="The Decent of Man – The Decent of Man"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/34272565-life-3-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/maxTegmark_Life3.png")}
              alt="Max Tegmark – Life 3.0"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/40102.Blink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/malcolmGladwell_Blink.png")}
              alt="Malcolm Gladwell – Blink"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/647.No_Logo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/naomiKlien_NoLogo.png")}
              alt="Naomi Klien – No Logo"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/117047.The_Blind_Watchmaker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/richardDawkins_TheBlindWatchMaker.png")}
              alt="Richard Dawkins – The Blind Watch Maker"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/40961427-1984"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/georgeOrwell_1984.png")}
              alt="George Orwell – 1984"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/76171.We"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/yevgenyZamyatin_We.png")}
              alt="Yevgeny Zamyatin – We"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/danielKahneman_ThinkingFastAndSlow.png")}
              alt="Daniel Kahneman – Thinking Fast and Slow"
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a
            href="https://www.goodreads.com/book/show/31670196-scale"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/geoffreyWest_Scale.png")}
              alt="GeoffreyWest – Scale.png"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/30257963-12-rules-for-life"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/jordanBPeterson_12RulesForLife.png")}
              alt="Jordan B Peterson – 12 Rules of Life"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/31434883-eleanor-oliphant-is-completely-fine"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/gailHoneyman_EleanorOliphantIsCompletlyFine.png")}
              alt="Gail Honeyman – Eleanor Oliphant Is Completely Fine"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/6289283-born-to-run"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/christopherMcDugall_BornToRun.png")}
              alt="Christopher McDougall – Born to run"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/13496.A_Game_of_Thrones"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/georgeRRMartin_AGameOfThrones.png")}
              alt="George R.R. Martin – A Game of Thrones"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/1953.A_Tale_of_Two_Cities"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/charlesDickens_ATaleOfTwoCities.png")}
              alt="Charles Dickens – A Tale of Two Cities"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/1633.Getting_Things_Done"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/davidAllen_GettingThingsDone.png")}
              alt="David Allen – Getting Things Done"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/433567.Flatland"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/edwinAAbbott_Flatland.png")}
              alt=" Edwin A. Abbott – Flatland"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/7614793-cognitive-surplus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/clayShirky_CognitiveSurplus.png")}
              alt="Cognitive Surplus – Clay Shirky"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/162120.Extraordinary_Popular_Delusions_and_the_Madness_of_Crowds"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/charlesMackay_MemoirsOfExtraorinaryPopularDelusions.png")}
              alt="Charles Mackay – Extraordinary Popular Delusions and the Madness of Crowds"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/79909.In_Patagonia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/bruceChatwin_InPatagonia.png")}
              alt="Bruce Chatwin – In Patagonia"
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a
            href="https://www.goodreads.com/book/show/76844.The_Songlines"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/bruceChatwin_Songlines.png")}
              alt="Bruce Chatwin – Songlines"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/38501.Ham_on_Rye"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/charlesBukowski_HamOnRye.png")}
              alt="Charles Bukowski – Ham on Rye"
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a
            href="https://www.goodreads.com/book/show/18864.The_Rum_Diary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/hunterSThompson_TheRumDiary.png")}
              alt="Hunter S Thomposon – The Rum Diary"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/86147.Bright_Lights_Big_City"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/jayMcInerney_BrightLightsBigCity.png")}
              alt="Jay McInerney  – Bright Lights, Big City"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/36336078-call-me-by-your-name"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/andreAciman_callMeByYourName.png")}
              alt="Andre Aciman – Call Me By Your Name"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/333295.Samuel_Pepys"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/claireTomalin_SamuelPepysTheUnequalledSelf.png")}
              alt="SamuelPepys – The Unequalled Self"
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a
            href="https://www.goodreads.com/book/show/1842.Guns_Germs_and_Steel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/jaredDiamond_GunsGermsAndSteel.png")}
              alt="Jared Diamond – Guns Germs And Steel"
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a
            href="https://www.goodreads.com/book/show/483055.Theory_of_Games_and_Economic_Behavior"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/johnVonNeumann_TheoryOfGamesAndEconomicBehavior.png")}
              alt="John von Neumann – Theory Of Games And Economic Behavior"
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a
            href="https://www.goodreads.com/book/show/49464.Save_the_Cat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/blakeSnyder_SaveTheCat.png")}
              alt="Blake Snyder – Save the Cat"
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a
            href="https://www.goodreads.com/book/show/38821039-the-making-of-a-manager"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/julieZhuo_TheMakingOfAManager.png")}
              alt="Julie Zhuo – The Making of a Manager"
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a
            href="https://www.goodreads.com/book/show/27789652-sprint"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/jakeKnapp_Sprint.png")}
              alt="Jake Knapp – Sprint"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/1362.The_Histories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/herodotus_TheHistories.png")}
              alt="herodotus – The Histories"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/book/show/30659.Meditations"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/marcusAurelius_Meditations.png")}
              alt="Marcus Aurelius – Meditations"
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a
            href="https://www.goodreads.com/book/show/1371.The_Iliad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/homer_TheIlliad.png")}
              alt="Homer – The Illiad"
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a
            href="https://www.goodreads.com/book/show/1381.The_Odyssey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/homer_TheOdyssey.png")}
              alt="Homer – The Odyssey"
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a
            href="https://www.goodreads.com/book/show/393134.The_Prince"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/niccoloMachiavelli_ThePrince.png")}
              alt="Niccolo Machiavelli – The Prince"
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a
            href="https://www.goodreads.com/book/show/5128.The_Doors_of_Perception_Heaven_and_Hell"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/aldous_Huxley_TheDoorsOfPerception.png")}
              alt="Aldous Huxley – The Doors of Perception"
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a
            href="https://www.goodreads.com/book/show/25772375-dune"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/frankHerbert_Dune.png")}
              alt="Frank Herbert – Dune"
            />
          </a>
        </div>

        <div className={styles.unread}>
          <a
            href="https://www.goodreads.com/book/show/20518872-the-three-body-problem"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/liuCixin_TheThreeBodyProblem.png")}
              alt="Liu Cixin – TheThreeBodyProblem"
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a
            href="https://www.goodreads.com/book/show/2888995-thoughts-on-design"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/paulRand_ThoughtsOnDesign.png")}
              alt="Paul Rand – Thoughts on Design"
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a
            href="https://www.goodreads.com/book/show/613547.Design_Form_and_Chaos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/paulRand_DesignFormChaos.png")}
              alt="Paul Rand – Design, Form & Chaos"
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a
            href="https://www.goodreads.com/book/show/163436.Paul_Rand"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/paulRand_ADesignersArt.png")}
              alt="Paul Rand – A Designers Art"
            />
          </a>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);
