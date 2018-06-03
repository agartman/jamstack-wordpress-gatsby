const R = require(`ramda`);
const path = require(`path`);
const slash = require(`slash`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
      graphql(
        `
        {
            allWordpressPage {
              edges {
                node {
                  id
                  slug
                  status
                  template
                  date
                  
                }
              }
            }
            allWordpressPost {
              edges {
                node {
                  id
                  slug
                  status
                  template
                  date
                  acf {
                    title
                    body
                  }
                }
              }
            }
          }
          
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }
    
        const pageTemplate = path.resolve(`./src/templates/page.js`);
        R.forEach(edge => {
          createPage({
            path: `/${edge.node.slug}/`,
            component: slash(pageTemplate),
            context: {
              id: edge.node.id
            }
          });
        }, result.data.allWordpressPage.edges);
        const postTemplate = path.resolve(`./src/templates/post.js`);
        R.forEach(edge => {
          createPage({
            path: `/posts/${edge.node.slug}/`,
            component: slash(postTemplate),
            context: {
              id: edge.node.id,
              acf: edge.node.acf
            }
          });
        }, result.data.allWordpressPost.edges);
        resolve();
      });
  });
};
