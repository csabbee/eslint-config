import stylistic from '@stylistic/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'

export default [
  {
    plugins: {'@stylistic': stylistic},
    files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
    rules: {
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/semi-spacing': ['error', {
        before: false, after: true,
      }],
      '@stylistic/quotes': ['error', 'single'],
      'prefer-const': 'error',
      '@stylistic/array-bracket-newline': ['error', 'consistent'],
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/array-element-newline': ['error', 'consistent'],
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      '@stylistic/arrow-spacing': 'error',
      '@stylistic/brace-style': 'error',
      '@stylistic/comma-spacing': ['error', {
        before: false, after: true,
      }],
      '@stylistic/comma-style': ['error', 'last'],
      '@stylistic/computed-property-spacing': ['error', 'never'],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/function-call-spacing': ['error', 'never'],
      '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],
      '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
      indent: ['error', 2],
      '@stylistic/indent-binary-ops': ['error', 2],
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/key-spacing': ['error', {
        beforeColon: false, afterColon: true, mode: 'strict',
      }],
      '@stylistic/keyword-spacing': ['error', {
        before: true, after: true,
      }],
      '@stylistic/linebreak-style': ['error', 'unix'],
      '@stylistic/lines-around-comment': ['error', {
        beforeBlockComment: true,
        beforeLineComment: true,
      }],
      '@stylistic/lines-between-class-members': ['error', 'always'],
      '@stylistic/member-delimiter-style': ['error',
        {
          multiline: {delimiter: 'none'},
          singleline: {
            delimiter: 'semi',
            requireLast: false,
          },
          multilineDetection: 'brackets',
        }],
      '@stylistic/new-parens': 'error',
      '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
      '@stylistic/no-extra-parens': ['error', 'all', { ignoreJSX: 'multi-line' }],
      '@stylistic/no-floating-decimal': 'error',
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/no-multiple-empty-lines': 'error',
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-whitespace-before-property': 'error',
      '@stylistic/object-curly-newline': ['error', {
        consistent: true, minProperties: 2,
      }],
      '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
      '@stylistic/operator-linebreak': ['error', 'after'],
      '@stylistic/padded-blocks': ['error', 'never'],
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/rest-spread-spacing': ['error', 'never'],
      '@stylistic/space-before-blocks': 'error',
      '@stylistic/space-before-function-paren': ['error', {
        anonymous: 'never', named: 'never', asyncArrow: 'always',
      }],
      '@stylistic/space-in-parens': ['error', 'never'],
      '@stylistic/space-infix-ops': 'error',
      '@stylistic/switch-colon-spacing': 'error',
      '@stylistic/template-curly-spacing': ['error', 'never'],
      '@stylistic/template-tag-spacing': ['error', 'never'],
      '@stylistic/type-annotation-spacing': 'error',
      '@stylistic/type-generic-spacing': ['error'],
      '@stylistic/type-named-tuple-spacing': ['error'],
    },
    languageOptions: { parser: typescriptParser },
  },
  {
    plugins: {'@stylistic': stylistic},
    files: ['**/*.jsx', '**/*.tsx'],
    rules: {
      '@stylistic/jsx-child-element-spacing': 'error',
      '@stylistic/jsx-closing-bracket-location': [1, {
        selfClosing: 'tag-aligned', nonEmpty: 'tag-aligned',
      }],
      '@stylistic/jsx-closing-tag-location': 'error',
      '@stylistic/jsx-curly-brace-presence': ['error', {
        props: 'never', children: 'never', propElementValues: 'always',
      }],
      '@stylistic/jsx-curly-newline': ['error', {
        multiline: 'consistent', singleline: 'consistent',
      }],
      '@stylistic/jsx-curly-spacing': ['error', {
        when: 'never', children: true,
      }],
      '@stylistic/jsx-equals-spacing': ['error', 'never'],
      '@stylistic/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
      '@stylistic/jsx-indent': ['error', 2],
      '@stylistic/jsx-indent-props': ['error', 2],
      '@stylistic/jsx-max-props-per-line': ['error', {
        maximum: {
          single: 4, multi: 1,
        },
      }],
      '@stylistic/jsx-pascal-case': 'error',
      '@stylistic/jsx-props-no-multi-spaces': 'error',
      '@stylistic/jsx-quotes': ['error', 'prefer-double'],
      '@stylistic/jsx-self-closing-comp': ['error', {
        component: true, html: true,
      }],
      '@stylistic/jsx-sort-props': ['error', {
        callbacksLast: true,
        shorthandFirst: true,
        multiline: 'first',
        ignoreCase: true,
      }],
      '@stylistic/jsx-tag-spacing': ['error', { beforeSelfClosing: 'proportional-always' }],
      '@stylistic/jsx-wrap-multilines': ['error', {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        prop: 'parens-new-line',
      }],
    },
  },
  {
    plugins: {'@stylistic': stylistic},
    ignores: ['**/*.json'],
    rules: {'@stylistic/comma-dangle': ['error', 'always-multiline']},
  },
]
