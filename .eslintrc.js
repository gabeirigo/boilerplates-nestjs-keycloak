module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // Se estiver usando React
    'plugin:@typescript-eslint/recommended', // Se estiver usando TypeScript
    'prettier'
  ],
  parser: '@typescript-eslint/parser', // Se estiver usando TypeScript
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Se estiver usando React
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react', // Se estiver usando React
    '@typescript-eslint', // Se estiver usando TypeScript
    'prettier'
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        trailingComma: 'all',
        singleQuote: true,
        printWidth: 80,
        tabWidth: 4,
      },
    ],
    // Coloque outras regras específicas do projeto aqui
  },
};