module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Pole Mini La Rochelle","short_name":"PMLR","start_url":"/","background_color":"#663399","theme_color":"#333","icon":"src/images/LOGO_PMLR_COULEUR_N_B.jpg"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
