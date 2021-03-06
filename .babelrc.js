// for @babel/register, babel-loader
const _MOCHA_PATH = new RegExp('([\\\\/])node_modules\\1mocha\\1bin\\1_mocha$');
const isMochaRunning = process.argv.findIndex(arg => _MOCHA_PATH.test(arg)) > -1; // eslint-disable-line no-unused-vars

let presets = [
    [
        '@babel/preset-env',
        {
            debug: true,
            // When run a test, using {useBuiltIns: 'usage'} to instead of '@babel/plugin-transform-runtime'
            useBuiltIns: isMochaRunning ? 'usage' : 'entry',
            corejs: '3',
        }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
];

let plugins = [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-json-strings',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-optional-chaining',
    [
        '@babel/plugin-transform-runtime',
        {
            'helpers': false,
            'regenerator': true,
        }
    ],
    '@babel/plugin-transform-regenerator',
    '@babel/plugin-transform-async-to-generator',
    // ['react-intl-auto', {
    //     'removePrefix': 'app/'
    // }],
    // ["react-intl", {
    //     "messagesDir": "./translations/messages/"
    // }],
];

if (isMochaRunning) {
    // NOTE: Once we drop support for Babel <= v6 we should
    // update this to import from @babel/plugin-syntax-dynamic-import.
    // this plugin is already moved to @babel/plugin-syntax-dynamic-import.
    // plugins.push('dynamic-import-node');
}

module.exports = {presets, plugins};
