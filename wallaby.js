module.exports = function (w) {
  return {
    "files": [
      "tsconfig.json",
      "src/**/*.ts"
    ],
    "tests": [
      "__tests__/**/*.test.ts"
    ],
    "env": {
      "type": "node",
      "runner": "node"
    },
    "testFramework": "jest",  
    "debug": true
  };
};