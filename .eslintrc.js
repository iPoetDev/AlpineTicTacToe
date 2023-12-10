// Copyright (c) 2023.

module.exports = {
    root: true,
    extends: ['standard', 'prettier'],
    rules: {
        'vue/html-self-closing': [
            'warn',
            {
                html: {
                    void: 'never',
                    normal: 'any',
                    component: 'any',
                },
                svg: 'always',
                math: 'always',
            },
        ],
    },
}
