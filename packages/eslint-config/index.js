module.exports = {
	env: {
		commonjs: true,
		es2021: true,
		node: true
	},
	extends: ['eslint:recommended', 'prettier'],
	overrides: [
		Object.assign(
			{
				files: ['**/*.test.js', '**/*.spec.js'],
				env: { jest: true },
				plugins: ['jest']
			},
			require('eslint-plugin-jest').configs.recommended
		)
	],
	parserOptions: {
		ecmaVersion: 'latest'
	},
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always']
	}
};
