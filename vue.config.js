const path = require('path')

// eslint-disable-next-line
const packageJson = require('./package.json')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        [packageJson.name]: path.resolve(__dirname, 'dist/soramitsu-vuetify-plugin.umd.js')
      }
    }
  }
}
