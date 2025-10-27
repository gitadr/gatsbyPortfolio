import React, { useEffect, useRef } from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styles from "./photos.module.css";
import Navigation from "../components/navbar";
import Footer from "../components/footer";
import Seo from "../components/seo";

const MasonryItem = ({ children, aspectRatio }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const node = itemRef.current;
    if (!node) {
      return undefined;
    }

    const updateSpan = () => {
      const grid = node.parentElement;
      if (!grid) {
        return;
      }

      const styles = window.getComputedStyle(grid);
      const rowHeight = parseFloat(styles.getPropertyValue("--grid-auto-rows")) || 8;
      const gapValue =
        parseFloat(
          styles.getPropertyValue("grid-row-gap") ||
            styles.getPropertyValue("row-gap") ||
            styles.getPropertyValue("gap")
        ) || 0;
      const nodeWidth = node.getBoundingClientRect().width;

      let estimatedHeight = node.scrollHeight || node.getBoundingClientRect().height;

      if (aspectRatio && Number.isFinite(aspectRatio)) {
        estimatedHeight = aspectRatio * nodeWidth;
      }

      const span = Math.max(
        1,
        Math.ceil((estimatedHeight + gapValue) / (rowHeight + gapValue))
      );

      node.style.setProperty("--grid-row-span", span);
    };

    updateSpan();

    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(updateSpan);
      observer.observe(node);

      return () => {
        observer.disconnect();
      };
    }

    window.addEventListener("resize", updateSpan);
    return () => {
      window.removeEventListener("resize", updateSpan);
    };
  }, [aspectRatio]);

  return (
    <div ref={itemRef} className={styles.masonryItem}>
      {children}
    </div>
  );
};

const Photos = ({ data }) => {
  const photos = [...data.favPhotos.edges].sort((a, b) =>
    b.node.base.localeCompare(a.node.base, "en", { numeric: true })
  );
  const imageCount = photos.length; // Count the number of images

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
          {photos.map(({ node }) => {
            const altText = node.base
              .replace(/\.[^/.]+$/, "")
              .replace(/[-_]/g, " ");
            const { gatsbyImageData } = node.childImageSharp;
            const { width, height } = gatsbyImageData;
            const aspectRatio = width && height ? height / width : undefined;

            return (
              <MasonryItem key={node.id} aspectRatio={aspectRatio}>
                <GatsbyImage
                  className={styles.photo}
                  image={gatsbyImageData}
                  alt={altText}
                />
              </MasonryItem>
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
              formats: [AUTO, WEBP]
              breakpoints: [480, 768, 1024]
              quality: 70
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
