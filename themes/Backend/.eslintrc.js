module.exports = {
    'rules': {
        'eol-last': ['error', 'always'],
        'linebreak-style': ['error', 'unix'],
        'object-curly-spacing': ['error', 'always'],
        'key-spacing': 'error',
        'object-curly-newline': ['error', { 'consistent': true }],
        'no-multiple-empty-lines': ['error', { 'max': 1 }],
        'func-call-spacing': 'error',
        'keyword-spacing': 'error',
        'comma-spacing': 'error',
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'operator-linebreak': ['error', 'after', { 'overrides': { '?': 'before', ':': 'before' } }],
    }
};
