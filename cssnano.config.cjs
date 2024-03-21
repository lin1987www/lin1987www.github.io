console.info(`\x1b[32m ${__filename} \x1b[30m`);
module.exports = {
    preset: [
        // cssnano-preset-(default | advanced | lite) https://cssnano.co/docs/what-are-optimisations/
        // cssnano-preset-default https://www.npmjs.com/package/cssnano-preset-default
        'cssnano-preset-default',
        {
            // postcss-discard-comments https://github.com/cssnano/cssnano/tree/master/packages/postcss-discard-comments
            'discardComments': {
                // eslint-disable-next-line no-unused-vars
                remove: function (comment) { return true; },
            },
        },
    ],
};
