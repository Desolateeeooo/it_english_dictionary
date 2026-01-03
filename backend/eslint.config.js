import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier/flat';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  prettier,
  globalIgnores(['dist', 'node_modules', '*.config.js', '*.config.ts']),
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  {
    files: ['**/*.ts'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,  // Node.js globals
        ...globals.es2022,
      },
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      // TypeScript
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports' },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
        },
      ],
      
      // Node.js/Express specific
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      '@typescript-eslint/no-require-imports': 'off', // Allow require() if needed
      
      // Import/Export
      'import/prefer-default-export': 'off',
      
      // General
      'quotes': ['error', 'single'],
      'indent': ['error', 2],
      'semi': ['error', 'always'],
    },
  },
]);