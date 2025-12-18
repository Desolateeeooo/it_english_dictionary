import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier/flat';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
	prettier,
	globalIgnores(['dist', 'node_modules', '*.config.js', '*.config.ts']),
	js.configs.recommended,
	...tseslint.configs.recommended,
	...tseslint.configs.stylistic,
	react.configs.flat.recommended,
	reactHooks.configs.flat.recommended,
	jsxA11y.configs.flat.recommended,
	reactRefresh.configs.vite,
	{
		files: ['**/*.{ts,tsx}'],
		plugins: {
			import: importPlugin,
		},
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.es2022,
			},
			parserOptions: {
				project: './tsconfig.json',
			},
		},
		settings: {
			react: {
				version: 'detect',
			},
			'import/resolver': {
				typescript: {
					alwaysTryTypes: true,
				},
			},
		},
		rules: {
			// React
			'react/react-in-jsx-scope': 'off',
			'react/prop-types': 'off',

			// TypeScript
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{ prefer: 'type-imports' },
			],
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
			],

			// Import/Export
			'import/order': [
				'error',
				{
					groups: [
						'builtin',
						'external',
						'internal',
						'parent',
						'sibling',
						'index',
						'object',
						'type',
					],
					'newlines-between': 'always',
					alphabetize: { order: 'asc' },
				},
			],

			// General
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			'quotes': ['error', 'single'], // Changed to single quotes (TypeScript standard)
			'indent': ['error', 2],
		},
	},
]);