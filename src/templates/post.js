import React, { Component } from "react"

class PostTemplate extends Component {
  render() {
    const {title, body} = this.props.data.wordpressPost.acf;
    return (
      <div>
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
          <div dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
query currentPostQuery($id: String!) {
  wordpressPost(id: { eq: $id }) {
    acf {
      title
      body
    }
  }
  site {
    siteMetadata {
      title
    }
  }
}`
