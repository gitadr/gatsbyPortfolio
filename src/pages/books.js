import React from "react";
import styles from "./books.module.css";
import Header from "../components/internalHeader";
import Footer from "../components/footer";

export default () => (
  <div>
    <section className={styles.books}>
      <div className={styles.container}>
        <Header />
        <h1>Reading List</h1>
        <p class="intro">39 read, 13 to go</p>
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
            href="https://www.goodreads.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/books/nassimTaleb_TheBlackSwan.png")}
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
              src={require("../images/books/nassimTaleb_TheBedOfProcrustes.png")}
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
              src={require("../images/books/nassimTaleb_Anti-fragile.png")}
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
              src={require("../images/books/nassimTaleb_SkinInTheGame.png")}
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
              src={require("../images/books/yuvalNoahHarari_Sapiens.png")}
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
              src={require("../images/books/yuvalNoahHarari_HomoDeus.png")}
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
              src={require("../images/books/annLeckie_AncillaryJustice.png")}
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
              src={require("../images/books/annLeckie_AncillaryMercy.png")}
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
              src={require("../images/books/annLeckie_AncillarySword.png")}
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
              src={require("../images/books/annLeckie_Provernance.png")}
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
              src={require("../images/books/nKJemisin_TheFifthSeason.png")}
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
              src={require("../images/books/nKJemisin_TheObeliskGate.png")}
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
              src={require("../images/books/nKJemisin_TheStoneSky.png")}
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
              src={require("../images/books/niallFergerson_TheSquareAndTheTower.png")}
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
              src={require("../images/books/niallFergerson_Civilization.png")}
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
              src={require("../images/books/walterIsaacson_SteveJobs.png")}
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
              src={require("../images/books/edCatmull_CreativityInc.png")}
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
              src={require("../images/books/issacAsimov_iRobot.png")}
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
              src={require("../images/books/kevinKelly_WhatTechnologyWants.png")}
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
              src={require("../images/books/kevinKelly_TheInvertible.png")}
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
      </div>
    </section>
    <Footer />
  </div>
);
