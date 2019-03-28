module.exports = {
  presets: [
      [
        "@babel/preset-env",
        {
          "modules": false,
          targets: {
            browsers: ["> 0.25%"]
          }
        }
      ],
      "@babel/preset-react"
  ]
}