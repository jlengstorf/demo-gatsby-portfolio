module.exports = {
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'project',
        path: './data'
      }
    },
    'gatsby-transformer-json',
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
