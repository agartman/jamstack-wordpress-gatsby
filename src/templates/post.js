import React, { Component } from "react";
import { graphql } from 'gatsby'
import Layout from './../layouts';
class PostTemplate extends Component {
  render() {
    const { title, content, acf: {facebook} } = this.props.data.wordpressPost;
    return (
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <h3 dangerouslySetInnerHTML={{ __html: facebook }} />
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Layout>
    );
  }
}

export default PostTemplate;

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      slug
      title
      content
      date
      acf {
        facebook
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
