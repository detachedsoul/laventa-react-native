module.exports = {
	root: true,
	extends: "@react-native-community",
	rules: {
		indent: ["error", "tab"],
		"prettier/prettier": [
			4,
			{
				arrowParens: "always",
				bracketSameLine: false,
				bracketSpacing: true,
				singleQuote: false,
				trailingComma: "all",
				tabWidth: 4,
				useTabs: true,
				semi: true,
				jsxSingleQuote: false,
				singleAttributePerLine: true,
				printWidth: 80,
			},
		],
	},
};
