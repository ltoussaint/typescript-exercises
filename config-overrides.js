const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = function override(config) {
    config.plugins.push(
        new MonacoWebpackPlugin({
            languages: ['typescript', 'json']
        })
    );

    if (process.env.NODE_ENV === 'production') {
        config.output.publicPath = '/typescript-exercises.github.io/';
    }

    return config;
};
