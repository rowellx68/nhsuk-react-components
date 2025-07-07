// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import importPlugin, { importX } from 'eslint-plugin-import-x';

export default tseslint.config(
  eslint.configs.recommended,
  importX.flatConfigs.react,
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    jsx: true,
    semi: true,
    commaDangle: 'always-multiline',
  }),
  ...tseslint.configs.recommendedTypeChecked,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@stylistic/indent': 'off',
      '@stylistic/indent-binary-ops': 'off',
      '@stylistic/arrow-parens': 'off',
      '@stylistic/jsx-one-expression-per-line': 'off',
      '@stylistic/quote-props': 'off',
      '@stylistic/operator-linebreak': 'off',
      '@stylistic/jsx-wrap-multilines': 'off',
      '@stylistic/multiline-ternary': 'off',
      '@stylistic/brace-style': ['warn', '1tbs'],
    },
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: [
      '**/*.mjs',
      '**/*.js',
      '**/*.cjs',
      '**/vitest.config.*',
      '**/.storybook/*',
    ],
    extends: [tseslint.configs.disableTypeChecked],
  },
  {
    rules: {
      'import-x/order': 'error',
    },
    plugins: {
      'import-x': importPlugin,
    },
  },
  {
    files: ['**/*.tsx'],
    ignores: [
      '**/*.stories.tsx',
      '**/*.spec.tsx',
      '**/*.test.tsx',
      '**/.storybook/*',
    ],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@storybook/*'],
              message:
                'You can only use @storybook/* packages in stories or tests.',
            },
          ],
        },
      ],
    },
  },
  {
    ignores: ['**/dist/', '**/node_modules/', '**/src/resources/'],
  },
  storybook.configs['flat/recommended'],
);
