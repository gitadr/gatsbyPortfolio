import React from "react";
import Header from "../components/header";
import IG from "../components/workDark";
import Woolworths from "../components/workLight";
import Articles from "../components/articles";
import Footer from "../components/footer";
import SEO from "../components/SEO";

export default () => (
  <div>
    <SEO />
    <Header />
    <IG />
    <Woolworths />
    <Articles />
    <Footer />
  </div>
);
