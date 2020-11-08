const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/foucher/Projects/site-pmlr/src/templates/blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/foucher/Projects/site-pmlr/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/foucher/Projects/site-pmlr/src/pages/404.js"))),
  "component---src-pages-blogs-js": hot(preferDefault(require("/home/foucher/Projects/site-pmlr/src/pages/blogs.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/foucher/Projects/site-pmlr/src/pages/index.js"))),
  "component---src-pages-photos-js": hot(preferDefault(require("/home/foucher/Projects/site-pmlr/src/pages/photos.js")))
}

