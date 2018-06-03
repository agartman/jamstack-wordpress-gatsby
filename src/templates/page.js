import React, { Component } from "react";

class PageTemplate extends Component {
  render() {
    const {title} = this.props.data.wordpressPage;
    return (
      <div>
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
      </div>
    )
  }
}

export default PageTemplate;

export const pageQuery = graphql`
  query currentPageQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
