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
        <p class="intro">44 read, 6 to go</p>
      </div>
      <div className={styles.bookGrid}>
        <div className={styles.vertical}>
          <a href="#">
            <img
              src={require("../images/books/nassimTaleb_FooledByRandomness.png")}
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img
              src={require("../images/books/nassimTaleb_TheBlackSwan.png")}
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a href="#">
            <img
              src={require("../images/books/nassimTaleb_TheBedOfProcrustes.png")}
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img
              src={require("../images/books/nassimTaleb_Anti-fragile.png")}
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img
              src={require("../images/books/nassimTaleb_SkinInTheGame.png")}
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img src={require("../images/books/yuvalNoahHarari_Sapiens.png")} />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img
              src={require("../images/books/yuvalNoahHarari_HomoDeus.png")}
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img
              src={require("../images/books/annLeckie_AncillaryJustice.png")}
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img
              src={require("../images/books/annLeckie_AncillaryMercy.png")}
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img
              src={require("../images/books/annLeckie_AncillarySword.png")}
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img src={require("../images/books/annLeckie_Provernance.png")} />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img
              src={require("../images/books/nKJemisin_TheFifthSeason.png")}
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img
              src={require("../images/books/nKJemisin_TheObeliskGate.png")}
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a href="#">
            <img src={require("../images/books/nKJemisin_TheStoneSky.png")} />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img
              src={require("../images/books/niallFergerson_TheSquareAndTheTower.png")}
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a href="#">
            <img
              src={require("../images/books/niallFergerson_Civilization.png")}
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img
              src={require("../images/books/walterIsaacson_SteveJobs.png")}
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img src={require("../images/books/edCatmull_CreativityInc.png")} />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img src={require("../images/books/issacAsimov_iRobot.png")} />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img
              src={require("../images/books/kevinKelly_WhatTechnologyWants.png")}
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a href="#">
            <img
              src={require("../images/books/kevinKelly_TheInvertible.png")}
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img
              src={require("../images/books/graysonPerry_TheDecentOfMan.png")}
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img src={require("../images/books/maxTegmark_Life3.png")} />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img src={require("../images/books/malcomGladwell_Blink.png")} />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img src={require("../images/books/naomiKlien_NoLogo.png")} />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img
              src={require("../images/books/richardDawkins_TheBlindWatchMaker.png")}
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img src={require("../images/books/georgeOrwell_1984.png")} />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img src={require("../images/books/yevgenyZamyatin_We.png")} />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img
              src={require("../images/books/danielKahneman_ThinkingFastAndSlow.png")}
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img
              src={require("../images/books/jordanBPeterson_12RulesForLife.png")}
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img
              src={require("../images/books/gailHoneyman_EleanorOliphantIsCompletlyFine.png")}
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img
              src={require("../images/books/christopherMcDugall_BornToRun.png")}
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img
              src={require("../images/books/georgeRRMartin_AGameOfThrones.png")}
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img
              src={require("../images/books/charlesDickens_ATaleOfTwoCities.png")}
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img
              src={require("../images/books/davidAllen_GettingThingsDone.png")}
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img src={require("../images/books/edwinAAbbott_Flatland.png")} />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img
              src={require("../images/books/clayShirky_CognitiveSurplus.png")}
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img
              src={require("../images/books/charlesMackay_MemoirsOfExtraorinaryPopularDelusions.png")}
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a href="#">
            <img
              src={require("../images/books/bruceChatwin_InPatagonia.png")}
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img
              src={require("../images/books/charlesBukowski_HamOnRye.png")}
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a href="#">
            <img
              src={require("../images/books/hunterSThompson_TheRumDiary.png")}
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img
              src={require("../images/books/jayMcInerney_BrightLightsBigCity.png")}
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img
              src={require("../images/books/andreAciman_callMeByYourName.png")}
            />
          </a>
        </div>
        <div className={styles.vertical}>
          <a href="#">
            <img
              src={require("../images/books/claireTomalin_SamuelPepysTheUnequalledSelf.png")}
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a href="#">
            <img
              src={require("../images/books/jaredDiamond_GunsGermsAndSteel.png")}
            />
          </a>
        </div>
        <div className={styles.unread}>
          <a href="#">
            <img
              src={require("../images/books/johnVonNeumann_TheoryOfGamesAndEconomicBehavior.png")}
            />
          </a>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);
