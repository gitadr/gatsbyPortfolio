import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styles from "./photos.module.css";
import Navigation from "../components/navbar";
import Footer from "../components/footer";
import Seo from "../components/seo";

const Photos = ({ data }) => {
  const imageCount = data.favPhotos.edges.length; // Count the number of images

  return (
    <div>
      <section className={styles.photos}>
        <div className={styles.container}>
          <Navigation />
          <h1>Photos</h1>
          <p className="intro">{`${imageCount} photos in 72 months`}</p>{" "}
          {/* Display the image count */}
        </div>
        <div className={styles.photosGrid}>
          {data.favPhotos.edges.map((image) => {
            const orientationClass =
              image.node.childImageSharp.gatsbyImageData.width ===
              image.node.childImageSharp.gatsbyImageData.height
                ? styles.big
                : image.node.childImageSharp.gatsbyImageData.width >
                  image.node.childImageSharp.gatsbyImageData.height
                ? styles.horizontal
                : styles.vertical;
            return (
              <div
                key={image.node.id}
                className={`galleryWrapper ${orientationClass}`}
              >
                <GatsbyImage
                  image={image.node.childImageSharp.gatsbyImageData}
                />
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Photos;

export const pageQuery = graphql`
  query {
    favPhotos: allFile(
      filter: {
        ext: { regex: "/(jpg)|(jpeg)|(png)/" }
        relativeDirectory: { eq: "photos" }
        sourceInstanceName: { eq: "images" }
      }
      sort: { name: DESC }
    ) {
      edges {
        node {
          id
          base
          publicURL
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              breakpoints: [320, 640, 960, 1280, 1600]
              quality: 80
            )
          }
        }
      }
    }
  }
`;

export const Head = () => (
  <Seo
    title="Photography – Aaron Root"
    description="Selected photography captured over the past 72 months."
    pathname="/photos"
    noindex
  />
);
