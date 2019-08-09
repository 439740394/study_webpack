module.exports = {
  plugins:[
    require('autoprefixer')({
      "overrideBrowserslist": [
        "defaults",
        "not ie <= 9",
        "last 5 versions",
        "> 1%",
        "iOS >= 6"
      ]
    })
  ]
}
