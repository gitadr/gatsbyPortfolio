import React from "react";
import Header from "../components/header";
import Work from "../components/work";
import Notes from "../components/notes";
import Footer from "../components/footer";
import SEO from "../components/SEO";

export default () => (
  <div>
    <SEO />
    <Header />
    <Work />
    <Notes />
    <Footer />
  </div>
);
