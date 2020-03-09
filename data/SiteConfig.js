const config = {
  siteTitle: "Developers Playground", // Site title.
  siteTitleShort: "Dev's Playground", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Developer's Playground", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://developers-playground.com", // Domain of your website without pathPrefix.
  pathPrefix: "/developers-playground-material", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "A blog about programming, computer science and engineering.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Developers Playground RSS feed", // Title of the RSS feed
  siteFBAppID: "", // FB Application ID for using app insights
  siteGATrackingID: "UA-41876962-3", // Tracking code ID for google analytics.
  disqusShortname: "https-developers-playground", // Disqus shortname.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Sascha", // Username to display in the author segment.
  userEmail: "sascha@developers-playground.com", // Email used for RSS feed's author segment
  userTwitter: "pitufocabeza1", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Munich, Germany", // User location to display in the author segment.
  userAvatar: "https://pbs.twimg.com/profile_images/1236709748483002369/CBX-rO_5_200x200.jpg", // User avatar to display in the author segment.
  userDescription:
    "Hi, I'm Sascha, a young professional industrial engineer working in the aerospace industry. Computer Science, Web Development and Programming are my hobbies.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/pitufocabeza/developers-playground-material",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/pitufocabeza1",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:sascha@developers-playground.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2020. Developers Playground" // Copyright string for the footer of the website and RSS feed.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
