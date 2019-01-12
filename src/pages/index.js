import React from "react";
import Header from "../components/header";
import Work from "../components/work";
import Notes from "../components/notes";
import Footer from "../components/footer";

export default () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>My Title</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Header />
    <Work />
    <Notes />
    <Footer />
  </div>
);
