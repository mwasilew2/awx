const path = require('path');

module.exports = {
    root: true,
    extends: [
        'airbnb-base'
    ],
    plugins: [
        'import'
    ],
    settings: {
        'import/resolver': {
            webpack: {
                config: path.join(__dirname, 'build/webpack.development.js')
            }
        }
    },
    env: {
        browser: true,
        node: true
    },
    globals: {
        angular: true,  
        d3: true,
        $: true,
        _: true,
        codemirror: true,
        jsyaml: true
    },
    rules: {
        'arrow-parens': 'off',
        'comma-dangle': 'off',
        indent: ['error', 4, {
            SwitchCase: 1
        }],
        'max-len': ['error', {
            code: 100,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],
        'no-continue': 'off',
        'no-mixed-operators': 'off',
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'no-underscore-dangle': 'off',
        'object-curly-newline': 'off',
        'space-before-function-paren': ['error', 'always']
    }
};
