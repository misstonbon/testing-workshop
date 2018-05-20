module.exports = {
"testEnvironment": "jsdom", //this is default so it can also be removed
moduleNameMapper: {
'\\.css': require.resolve('./test/style-mock.js'),
    },
};