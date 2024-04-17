module.exports = {
  plugins: ['import'],
  rules: {
    'no-console': 0,
    'import/no-unresolved': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'unknown'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
          },
          {
            pattern: 'antd',
            group: 'external',
          },
          {
            pattern: 'antd/es',
            group: 'external',
          },
          {
            pattern: 'lodash',
            group: 'external',
          },
          {
            pattern: '@/components/**',
            group: 'internal',
          },
          {
            pattern: '@/utils/**',
            group: 'internal',
          },
          {
            pattern: '@/hooks/**',
            group: 'internal',
          },
          {
            pattern: '@/api/**',
            group: 'internal',
          },
          {
            pattern: '@/constant/**',
            group: 'internal',
          },
        ],
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
  },
  extends: [
    'eslint-config-ali/typescript/react',
    'prettier',
    // 'prettier/@typescript-eslint',
    // 'prettier/react',
  ],
};
