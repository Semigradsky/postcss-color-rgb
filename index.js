var postcss = require('postcss');

module.exports = postcss.plugin('postcss-color-rgb', function (opts) {
    opts = opts || {};

    // Work with options here

    return (root, result) => {
        root.walkDecls('color', decl => {
        });
    };
});
