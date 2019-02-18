import React from "react";
import Header from "../components/header";
import Woolworths from "../components/workLight";
import IG from "../components/workDark";
import Articles from "../components/articles";
import Footer from "../components/footer";
import SEO from "../components/SEO";

export default () => (
  <div>
    <SEO />
    <Header />
    <Woolworths />
    <IG />
    <Articles />
    <Footer />
  </div>
);
