module.exports = {
  plugins: [
    // 'gatsby-plugin-sharp',
    // 'gatsby-transformer-sharp',
    // 'gatsby-transformer-json',
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: './data/'
    //   }
    // },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '2y3275eg',
        dataset: 'production',
        watchMode: true
      }
    }
  ]
};
