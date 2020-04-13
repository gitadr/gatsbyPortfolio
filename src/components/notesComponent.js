import React from "react";
import { StaticQuery Link } from "gatsby";

import Header from "../components/header";
import Project1 from "../components/projectOne";
import Project2 from "../components/projectTwo";
import Project3 from "../components/projectThree";
import Footer from "../components/footer";
import SEO from "../components/SEO";

class ArticleIndex extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;

    return (
      <div>
        <SEO />
        <Header />
        <Project1 />
        <Project2 />
        <Project3 />
        <section>
          <div class="container">
            <h1>Articles</h1>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug;
              return (
                <div key={node.fields.slug}>
                  <p class="caps">{node.frontmatter.date}</p>
                  <h2>
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h2>
                </div>
              );
            })}
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default ArticleIndex;
