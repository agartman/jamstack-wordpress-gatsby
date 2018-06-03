module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "localhost:8000",
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        
      },
    },
    'gatsby-plugin-react-helmet'],
}
