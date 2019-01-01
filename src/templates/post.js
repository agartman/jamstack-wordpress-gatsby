import React, { Component } from "react"

class PostTemplate extends Component {
  render() {
    const {facebook} = this.props.data.wordpressPost.acf;
    return (
      <div>
          <h1 dangerouslySetInnerHTML={{ __html: facebook }} />
      </div>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
query currentPostQuery($id: String!) {
  wordpressPost(id: { eq: $id }) {
    acf {
      facebook
    }
  }
  site {
    siteMetadata {
      title
    }
  }
}`
