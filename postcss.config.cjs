console.info(`\x1b[32m ${__filename} \x1b[30m`);
const isProd = process.env.NODE_ENV === 'production';
const minifyEnabled = isProd;
//
// const postcssReverseProps = require('./src/postcss-reverse-props.cjs');
/*
let postcss = require('postcss')
postcss(plugins).process(css, { from, to }).then(result => {
  console.log(result.css)
})
*/
/* The entire CSS file will be processed by postcss-plugins from left to right in order. */
// A searchable catalog of PostCSS plugins https://www.postcss.parts/
const plugins = [
    /* other plugins */
    // postcssReverseProps({
    //     'data': 'first',
    // }),
    // postcssReverseProps({
    //     'data': 'second',
    // }),
    /* */
    // postcss-import just inlines the @import to the start of the file.
    require('postcss-import'),
    // postcss-simple-vars plugin is designed for Sass-like variables, replacing the deprecated precss plugin.
    require('postcss-simple-vars'),
    require('postcss-nested-props'),
    require('tailwindcss/nesting')(require('postcss-nesting')({
        noIsPseudoSelector: false,
    })),
    require('tailwindcss')({ config: 'tailwind.config.cjs' }),
    require('postcss-preset-env')(
        {
            // Plugin Options
            debug: true,
            autoprefixer: {
                // https://github.com/postcss/autoprefixer#options
                add: true,
            },
            // The stage can be 0 (experimental) through 4 (stable), or false. Setting stage to false will disable every polyfill. Doing this would only be useful if you intended to exclusively use the features option.
            stage: false,
            features: {
                // https://github.com/csstools/postcss-preset-env#features
                // https://github.com/csstools/postcss-plugins/blob/main/plugin-packs/postcss-preset-env/FEATURES.md
                // https://preset-env.cssdb.org/features/

                // postcss-custom-properties https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-properties#readme
                'custom-properties': { preserve: true },
                // postcss-nesting
                'nesting-rules': false,
            },
        },
    ),
];

if (minifyEnabled) {
    plugins.push(require('cssnano')(require('./cssnano.config.cjs')));
}

module.exports = {
    parser: 'postcss-scss',
    plugins,
};
