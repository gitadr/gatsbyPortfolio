const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const slugifyFileName = value =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  } else if (
    node.internal.type === `File` &&
    node.sourceInstanceName === `images` &&
    node.relativeDirectory === `clippings`
  ) {
    const fallbackSlug = `clipping-${node.internal?.contentDigest?.slice(0, 8) || node.id}`;
    const rawSlugSource = node.name || `clipping`;
    const slugBaseCandidate = slugifyFileName(rawSlugSource);
    const slugBase = slugBaseCandidate || slugifyFileName(fallbackSlug);

    createNodeField({
      node,
      name: `slug`,
      value: `/${slugBase}/`
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            fileAbsolutePath
          }
        }
      }
      clippings: allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "clippings" }
          ext: { regex: "/(jpg)|(jpeg)|(png)/" }
        }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const filePath = node.fileAbsolutePath || "";
    const isQuote = filePath.includes(`${path.sep}quotes${path.sep}`);
    const pagePath = isQuote
      ? `/journal/quotes${node.fields.slug}`
      : node.fields.slug;
    const component = isQuote
      ? path.resolve(`./src/templates/quoteTemplate.js`)
      : path.resolve(`./src/templates/noteTemplate.js`);

    createPage({
      path: pagePath,
      component,
      context: {
        slug: node.fields.slug
      }
    });
  });

  result.data.clippings.edges.forEach(({ node }) => {
    if (!node.fields?.slug) {
      return;
    }

    createPage({
      path: `/journal/clippings${node.fields.slug}`,
      component: path.resolve(`./src/templates/clippingTemplate.js`),
      context: {
        slug: node.fields.slug
      }
    });
  });
};
