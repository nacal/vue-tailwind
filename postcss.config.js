const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.vue'
  ],
  defaultExtractor: (content) => {
    const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
    return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
  },
  whitelistPatterns: [ /-(leave|enter|appear)(|-(to|from|active))$/, /^(?!cursor-move).+-move$/, /^router-link(|-exact)-active$/ ],
})

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
  ]
}
