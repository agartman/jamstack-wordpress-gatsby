module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "68.183.211.11:8080",
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        
      },
    },
    'gatsby-plugin-react-helmet'],
}
