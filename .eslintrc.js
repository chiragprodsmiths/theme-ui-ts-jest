module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
		parserOptions: ['./tsconfig.json'],
	},
	settings: {
		react: {
			pragma: 'React',
			version: 'detect',
		},
	},
	extends: [
		'airbnb-typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'prettier',
		'prettier/@typescript-eslint',
	],
	plugins: ['react', 'react-hooks', '@typescript-eslint'],
	rules: {},
};
