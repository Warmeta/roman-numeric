module.exports = {
  
  // Allow the following global variables
  "env": {
    "browser": true, // browser global variables
    "es6": true, // es6 support.
    "node": true, // Node.js global variables and Node.js scoping.
    "mocha": true // adds all of the Mocha testing global variables.
  },

  "rules": {

    /**
     * Variables
     */
    "no-shadow": [2, {
      "builtinGlobals": true
    }],
    "no-unused-vars": [2, {
      "vars": "all",
      "args": "after-used"
    }],
    "no-use-before-define": [2, "nofunc"],

    /**
     * Possible errors
     */
    "comma-dangle": [2, "never"],
    "no-inner-declarations": [2, "both"],

    /**
     * Best practices
     */
    "curly": 2,
    "dot-notation": [2, {
      "allowKeywords": true,
      "allowPattern": "^[a-z]+(_[a-z]+)+$"
    }],
    "eqeqeq": [2, "allow-null"],
    "no-eq-null": 0,
    "no-redeclare": [2, {
      "builtinGlobals": true
    }],
    "wrap-iife": [2, "inside"],

    /**
     * Style
     */
    "indent": [2, 2, {
      "VariableDeclarator": {
        "var": 2,
        "let": 2,
        "const": 3
      }
    }],
    "func-names": 0,
    "no-multiple-empty-lines": [2, {
      "max": 1
    }],
    "no-extra-parens": [2, "functions"],
    "one-var": 0
  }
}
