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
        <p class="intro">39 read, 14 to go</p>
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
            href="https://www.goodreads.com/"
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
            href="https://www.goodreads.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/graysonPerry_TheDecentOfMan.png")}
              alt="Nassim Nicholas Taleb – The Black Swan"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/maxTegmark_Life3.png")}
              alt="Nassim Nicholas Taleb – The Black Swan"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/malcomGladwell_Blink.png")}
              alt="Nassim Nicholas Taleb – The Black Swan"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/naomiKlien_NoLogo.png")}
              alt="Nassim Nicholas Taleb – The Black Swan"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/richardDawkins_TheBlindWatchMaker.png")}
              alt="Nassim Nicholas Taleb – The Black Swan"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/georgeOrwell_1984.png")}
              alt="Nassim Nicholas Taleb – The Black Swan"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/yevgenyZamyatin_We.png")}
              alt="Nassim Nicholas Taleb – The Black Swan"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/danielKahneman_ThinkingFastAndSlow.png")}
              alt="Nassim Nicholas Taleb – The Black Swan"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/jordanBPeterson_12RulesForLife.png")}
              alt="Nassim Nicholas Taleb – The Black Swan"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/gailHoneyman_EleanorOliphantIsCompletlyFine.png")}
              alt="Nassim Nicholas Taleb – The Black Swan"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/christopherMcDugall_BornToRun.png")}
              alt="Nassim Nicholas Taleb – The Black Swan"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/georgeRRMartin_AGameOfThrones.png")}
              alt="Nassim Nicholas Taleb – The Black Swan"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/charlesDickens_ATaleOfTwoCities.png")}
              alt="Nassim Nicholas Taleb – The Black Swan"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/davidAllen_GettingThingsDone.png")}
              alt="Nassim Nicholas Taleb – The Black Swan"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/edwinAAbbott_Flatland.png")}
              alt="Nassim Nicholas Taleb – The Black Swan"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/clayShirky_CognitiveSurplus.png")}
              alt="Nassim Nicholas Taleb – The Black Swan"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/charlesMackay_MemoirsOfExtraorinaryPopularDelusions.png")}
              alt="Nassim Nicholas Taleb – The Black Swan"
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a
            href="https://www.goodreads.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/bruceChatwin_InPatagonia.png")}
              alt="Nassim Nicholas Taleb – The Black Swan"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/charlesBukowski_HamOnRye.png")}
              alt="Nassim Nicholas Taleb – The Black Swan"
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a
            href="https://www.goodreads.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/hunterSThompson_TheRumDiary.png")}
              alt="Nassim Nicholas Taleb – The Black Swan"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/jayMcInerney_BrightLightsBigCity.png")}
              alt="Nassim Nicholas Taleb – The Black Swan"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/andreAciman_callMeByYourName.png")}
              alt="Nassim Nicholas Taleb – The Black Swan"
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/claireTomalin_SamuelPepysTheUnequalledSelf.png")}
              alt="Nassim Nicholas Taleb – The Black Swan"
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a
            href="https://www.goodreads.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/jaredDiamond_GunsGermsAndSteel.png")}
              alt="Nassim Nicholas Taleb – The Black Swan"
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a
            href="https://www.goodreads.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/johnVonNeumann_TheoryOfGamesAndEconomicBehavior.png")}
              alt="Nassim Nicholas Taleb – The Black Swan"
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a
            href="https://www.goodreads.com/"
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
        <div className={styles.vertical}>
          <a
            href="https://www.goodreads.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/herodotus_TheHistories.png")}
              alt="Nassim Nicholas Taleb – The Black Swan"
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a
            href="https://www.goodreads.com/"
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
            href="https://www.goodreads.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/homer_TheIlliad.png")}
              alt="Nassim Nicholas Taleb – The Black Swan"
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a
            href="https://www.goodreads.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/homer_TheOdessey.png")}
              alt="Nassim Nicholas Taleb – The Black Swan"
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a
            href="https://www.goodreads.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/niccoloMachiavelli_ThePrince.png")}
              alt="Nassim Nicholas Taleb – The Black Swan"
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
      </div>
    </section>
    <Footer />
  </div>
);
