module.exports = {
  // Specifies the parser to be used
  parser: '@typescript-eslint/parser',

  // Specifies the environments your code is designed to run in
  env: {
    browser: true,
    node: true,
    es2021: true
  },

  // Extends recommended configurations
  extends: [
    'eslint:recommended', 
    'plugin:@typescript-eslint/recommended', 
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'next/core-web-vitals' // Next.js specific linting rules
  ],

  // Specifies global variables
  globals: {
    React: 'writable'
  },

  // Specifies parser options
  parserOptions: {
    ecmaVersion: 2021, // Allows for modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true
    }
  },

  // Specifies additional plugins
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'jsx-a11y',
    'prettier'
  ],

  // Specifies custom rules
  rules: {
    // TypeScript rules
    '@typescript-eslint/explicit-function-return-type': 'off', // No need to force return type
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Warn for unused variables
    '@typescript-eslint/no-explicit-any': 'warn', // Warn for using `any` type
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'], // Enforce consistent type definitions

    // React rules
    'react/react-in-jsx-scope': 'off', // Not needed for Next.js (React auto-imported)
    'react/prop-types': 'off', // Not needed when using TypeScript
    'react-hooks/rules-of-hooks': 'error', // Ensure hooks are used correctly
    'react-hooks/exhaustive-deps': 'warn', // Ensure dependencies are listed correctly in hooks

    // Prettier integration
    'prettier/prettier': ['error', { endOfLine: 'lf' }],

    // Accessibility rules
    'jsx-a11y/anchor-is-valid': 'off', // Next.js <Link> handles this internally

    // General JS rules
    'eqeqeq': ['error', 'always'], // Enforce `===` and `!==`
    'no-console': 'warn', // Warn on console logs
    'curly': ['error', 'all'], // Require curly braces for all control statements
    'no-unused-vars': 'off', // Handled by TypeScript plugin
    'import/order': [
      'error',
      {
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always'
      }
    ]
  },

  // Specifies settings for specific plugins
  settings: {
    react: {
      version: 'detect' // Automatically detects the React version
    }
  },

  // Ignore specific files and folders
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    '.next/',
    '*.min.js'
  ]
};
