# Linters et Formatters

Les **linters** et **formatters** améliorent la qualité du code en trouvant les erreurs, bugs et problèmes de style (linters) et en corrigeant automatiquement le formatage comme l'indentation et l'espacement (formatters). Ils assurent la cohérence, la lisibilité et la détection précoce des erreurs.

**Exemples :** ESLint, Prettier, Biome, Rome...

## Pourquoi utiliser des Linters et Formatters ?

### 🔍 **Linters** (ESLint, TSLint...)

- **Détection d'erreurs** - Variables non utilisées, imports manquants
- **Respect des bonnes pratiques** - Conventions de nommage, patterns recommandés
- **Sécurité** - Détection de vulnérabilités potentielles
- **Cohérence d'équipe** - Même style de code pour tous

### 🎨 **Formatters** (Prettier, Biome...)

- **Formatage automatique** - Indentation, espaces, retours à la ligne
- **Gain de temps** - Plus besoin de formater manuellement
- **Évite les débats** - Style uniforme défini une fois pour toutes
- **Lisibilité** - Code plus propre et plus facile à lire

## Configuration Prettier (Formatter)

Voici ma configuration Prettier personnelle qui privilégie la lisibilité et la cohérence (par exemple) :

### `.prettierrc.js`

```javascript
module.exports = {
 // Utiliser des tabs au lieu d'espaces
 useTabs: true,
 tabWidth: 2,
 
 // Virgules finales (ES5 compatible)
 trailingComma: 'es5',
 
 // Guillemets simples pour JS/TS
 singleQuote: true,
 jsxSingleQuote: false, // Guillemets doubles pour JSX
 
 // Pas de point-virgules
 semi: false,
 
 // Largeur de ligne maximale
 printWidth: 120,
 
 // Espacement dans les objets { foo: bar }
 bracketSpacing: true,
 
 // Parenthèses pour les arrow functions
 arrowParens: 'avoid', // x => x au lieu de (x) => x
 
 // Propriétés d'objets
 quoteProps: 'as-needed', // Guillemets seulement si nécessaire
 
 // Gestion des retours à la ligne
 proseWrap: 'preserve',
 endOfLine: 'auto',
 
 // Formatage des langages embarqués
 embeddedLanguageFormatting: 'auto',
 htmlWhitespaceSensitivity: 'css',
 
 // Pragmas (commentaires spéciaux)
 requirePragma: false,
 insertPragma: false,
 
 // Plugin pour Tailwind CSS (tri des classes)
 plugins: ['prettier-plugin-tailwindcss'],
}
```

### Explication des choix

- **`useTabs: true`** - Les tabs s'adaptent aux préférences d'indentation de chacun
- **`singleQuote: true`** - Plus propre en JavaScript/TypeScript
- **`semi: false`** - Moins de bruit visuel, JS moderne
- **`printWidth: 120`** - Écrans modernes permettent des lignes plus longues
- **`trailingComma: 'es5'`** - Facilite les diffs Git
- **`arrowParens: 'avoid'`** - Plus concis pour les fonctions à un paramètre

## Configuration ESLint (Linter)

Configuration ESLint moderne avec TypeScript et React :

### `eslint.config.js`

```javascript
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import noOnlyTestsPlugin from 'eslint-plugin-no-only-tests'
import queryPlugin from '@tanstack/eslint-plugin-query'
import perfectionist from 'eslint-plugin-perfectionist'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import promisePlugin from 'eslint-plugin-promise'
import tsParser from '@typescript-eslint/parser'
import { FlatCompat } from '@eslint/eslintrc'
import { fileURLToPath } from 'url'
import * as espree from 'espree'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
 baseDirectory: __dirname,
})

// Configuration commune des règles
const baseRules = {
 // React Hooks - Désactivé car parfois trop strict
 'react-hooks/exhaustive-deps': 'off',
 
 // Promises - Pas toujours nécessaire de retourner
 'promise/always-return': 'off',
 
 // Prettier integration
 'prettier/prettier': 'error',
 
 // Tests - Empêche les .only() en production
 'no-only-tests/no-only-tests': 'error',
 
 // Console - Autorise warn, error, info, debug
 'no-console': ['error', { allow: ['warn', 'error', 'info', 'debug'] }],
 
 // Accessibilité - Désactivé car parfois trop strict
 'jsx-a11y/anchor-has-content': 'off',
 'jsx-a11y/alt-text': 'off',
 
 // Next.js - Autorise les balises img natives
 '@next/next/no-img-element': 'off',
}

// Configuration du plugin Perfectionist (tri automatique)
const perfectionistRules = {
 // Tri des propriétés d'objets
 'perfectionist/sort-objects': [
  'warn',
  {
   type: 'natural',
   order: 'desc',
  },
 ],
 
 // Tri des imports (très utile !)
 'perfectionist/sort-imports': [
  'error',
  {
   type: 'line-length',
   order: 'desc',
   newlinesBetween: 'always',
   
   // Patterns internes au projet
   internalPattern: [
    '@/app/.*', 
    '@/components/.*', 
    '@/lib/.*', 
    '@/models/.*', 
    '@/services/.*', 
    '@/constants/.*'
   ],
   
   // Ordre des groupes d'imports
   groups: [
    'type',
    'react',
    'nanostores',
    ['builtin', 'external'],
    'internal-type',
    'internal',
    ['parent-type', 'sibling-type', 'index-type'],
    ['parent', 'sibling', 'index'],
    'side-effect',
    'style',
    'object',
    'unknown',
   ],
   
   // Groupes personnalisés
   customGroups: {
    value: {
     react: ['react', 'react-*'],
     nanostores: '@nanostores/.*',
    },
    type: {
     react: 'react',
    },
   },
  },
 ],
 
 // Tri des enums
 'perfectionist/sort-enums': [
  'error',
  {
   type: 'natural',
   order: 'desc',
  },
 ],
}

// Plugins communs
const basePlugins = {
 reactHooks: reactHooksPlugin,
 perfectionist,
 'no-only-tests': noOnlyTestsPlugin,
 jsxA11y: jsxA11yPlugin,
}

// Options du parser
const baseParserOptions = {
 sourceType: 'module',
 ecmaVersion: 'latest',
 ecmaFeatures: { jsx: true },
}

const eslintConfig = [
 // Extensions Next.js
 ...compat.extends('next/core-web-vitals', 'next/typescript'),
 
 // Fichiers à ignorer
 {
  ignores: [
   'node_modules/**', 
   '.next/**', 
   'out/**', 
   'build/**', 
   'next-env.d.ts'
  ],
 },
 
 // Configurations recommandées
 eslintPluginPrettierRecommended,
 ...queryPlugin.configs['flat/recommended'],
 promisePlugin.configs['flat/recommended'],
 
 // Configuration pour JavaScript
 {
  rules: {
   ...baseRules,
   ...perfectionistRules,
  },
  plugins: basePlugins,
  languageOptions: {
   parserOptions: baseParserOptions,
   parser: espree,
  },
  files: ['**/*.{js,jsx,mjs,cjs}'],
 },
 
 // Configuration pour TypeScript
 {
  rules: {
   ...baseRules,
   ...perfectionistRules,
   
   // Règles TypeScript spécifiques
   ...tsPlugin.configs.recommended.rules,
   ...tsPlugin.configs['recommended-type-checked'].rules,
   
   // TypeScript strict
   '@typescript-eslint/strict-boolean-expressions': 'error',
   '@typescript-eslint/prefer-optional-chain': 'error',
   '@typescript-eslint/prefer-nullish-coalescing': 'error',
   '@typescript-eslint/no-unused-vars': 'error',
   '@typescript-eslint/no-unsafe-member-access': 'error',
   '@typescript-eslint/no-unsafe-assignment': 'error',
   '@typescript-eslint/no-unsafe-argument': 'error',
   '@typescript-eslint/no-unnecessary-type-assertion': 'error',
   '@typescript-eslint/no-explicit-any': 'error',
  },
  plugins: {
   '@typescript-eslint': tsPlugin,
   ...basePlugins,
  },
  languageOptions: {
   parserOptions: {
    ...baseParserOptions,
    project: './tsconfig.json',
   },
   parser: tsParser,
  },
  files: ['**/*.{ts,tsx}'],
 },
]

export default eslintConfig
```

## Plugins utilisés

### 🔧 **Plugins ESLint essentiels**

- **`@typescript-eslint`** - Support TypeScript complet
- **`eslint-plugin-react-hooks`** - Règles pour les hooks React
- **`eslint-plugin-prettier`** - Intégration Prettier dans ESLint
- **`eslint-plugin-perfectionist`** - Tri automatique (imports, objets...)
- **`@tanstack/eslint-plugin-query`** - Règles pour TanStack Query
- **`eslint-plugin-jsx-a11y`** - Accessibilité JSX
- **`eslint-plugin-promise`** - Bonnes pratiques Promises
- **`eslint-plugin-no-only-tests`** - Évite les tests .only()

### 🎨 **Plugin Prettier**

- **`prettier-plugin-tailwindcss`** - Tri automatique des classes Tailwind

## Scripts package.json

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "code:check": "npm run lint && npm run format:check",
    "code:fix": "npm run lint:fix && npm run format"
  }
}
```

## Configuration IDE

### VS Code (`.vscode/settings.json`)

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

## Workflow recommandé

1. **Installation**

   ```bash
   npm install -D eslint prettier
   npm install -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
   npm install -D eslint-plugin-prettier eslint-config-prettier
   ```

2. **Configuration des fichiers** (`.prettierrc.js`, `eslint.config.js`)

3. **Scripts dans package.json** pour automatiser

4. **Configuration IDE** pour le formatage automatique

5. **Pre-commit hooks** (optionnel)

   ```bash
   npm install -D husky lint-staged
   ```

## Ressources pour aller plus loin

- 📚 [ESLint Documentation](https://eslint.org/docs/)
- 🎨 [Prettier Documentation](https://prettier.io/docs/)
- ⚡ [Biome - Alternative moderne](https://biomejs.dev/)
- 🔧 [ESLint Rules Reference](https://eslint.org/docs/rules/)
- 📖 [TypeScript ESLint Rules](https://typescript-eslint.io/rules/)
