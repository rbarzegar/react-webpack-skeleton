module.exports = {
   plugins: {
      "postcss-easy-import": {
         prefix: "_",
         extensions: ".css"
      },
      "postcss-nested": {},
      "postcss-sassy-mixins": {},
      "postcss-simple-vars": {},
      "postcss-cssnext": {},
      "rucksack-css": {
         responsiveType: true,
         shorthandPosition: false,
         quantityQueries: false,
         alias: false,
         inputPseudo: false,
         clearFix: true,
         fontPath: true,
         hexRGBA: true,
         easings: true
      }
   }
};