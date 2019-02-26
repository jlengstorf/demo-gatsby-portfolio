module.exports = {
  plugins: [
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
