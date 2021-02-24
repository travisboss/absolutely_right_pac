const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        phone: config.manifestPhone,
        email: config.manifestEmail,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
        refund_policy: config.manifestRefundPolicy,
        footer_line_one: config.manifestFooterLineOne,
        footer_line_two: config.manifestFooterLineTwo,
        index_line_one: config.manifestIndexLineOne,
        index_line_two: config.manifestIndexLineTwo,
        index_line_three: config.manifestIndexLineThree,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
