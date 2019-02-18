import React from "react";
import Header from "../components/header";
import IG from "../components/workIG";
import Articles from "../components/articles";
import Footer from "../components/footer";
import SEO from "../components/SEO";

export default () => (
  <div>
    <SEO />
    <Header />
    <IG />
    <Articles />
    <Footer />
  </div>
);
