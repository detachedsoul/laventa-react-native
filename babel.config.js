const config = require('./tsconfig.json');

const { baseUrl, paths } = config.compilerOptions

const getAliases = () => {
    return Object.entries(paths).reduce((aliases, alias) => {
        const key = alias[0].replace('/*', '');
        const value = baseUrl + alias[1][0].replace('*', '');
        return {
            ...aliases,
            [key]: value,
        };
    }, {});
};

module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: ["nativewind/babel", [
            "module-resolver",
            {
                root: ['./'],
                extensions: [
                    '.js',
                    '.jsx',
                    '.ts',
                    '.tsx',
                    '.android.js',
                    '.android.tsx',
                    '.ios.js',
                    '.ios.tsx',
                ],
                alias: getAliases()
            }
        ]
    ],
};
