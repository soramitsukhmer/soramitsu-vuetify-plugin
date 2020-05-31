const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'soramitsu-vuetify-plugin': path.resolve(__dirname, '../dist/soramitsu-vuetify-plugin.umd.js')
      }
    }
  }
}
