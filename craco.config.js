const CracoLessPlugin = require('craco-less');
const themes=require('./src/lib/themes.js');

const primary=themes.primary

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': primary },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};