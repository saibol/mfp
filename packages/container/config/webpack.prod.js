const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@http://${domain}/marketing/remoteEntry.js`
            },
            shared: packageJson.dependencies
        })
    ],
    output: {
        filename: '[name].[contenthash].js'
    }
};

module.exports = merge(commonConfig, prodConfig);