# Module Bundlers

Les **module bundlers** combinent plusieurs fichiers JavaScript en bundles optimisés pour les navigateurs. Ils gèrent les dépendances, la transformation du code, et le code splitting pour les performances. Ils permettent d'utiliser les fonctionnalités JavaScript modernes, d'améliorer les temps de chargement, et de rationaliser les workflows de développement.

**Exemples :** Webpack, Rollup, Parcel, Vite, esbuild, SWC...

## Pourquoi utiliser un Module Bundler ?

### **Problèmes résolus**

- **Gestion des dépendances** - Résolution automatique des imports/exports
- **Compatibilité navigateur** - Transformation ES6+ vers ES5
- **Optimisation** - Minification, tree-shaking, code splitting
- **Développement moderne** - Hot reload, source maps, TypeScript
- **Performance** - Bundling intelligent, lazy loading

### **Sans bundler (problèmes)**

```html
<!-- Gestion manuelle des dépendances -->
<script src="lib/jquery.js"></script>
<script src="lib/lodash.js"></script>
<script src="utils/helpers.js"></script>
<script src="components/header.js"></script>
<script src="components/footer.js"></script>
<script src="app.js"></script>
<!-- Ordre important, pas de modules, pollution globale -->
```

### **Avec bundler**

```javascript
// Imports modernes
import { debounce } from 'lodash'
import { fetchUser } from './api/users'
import Header from './components/Header'

// Code moderne, gestion automatique des dépendances
```

## Les principaux bundlers

### **Vite** (Recommandé pour nouveaux projets)

**Avantages :**

- Démarrage ultra-rapide (ESM natif en dev)
- Hot reload instantané
- Configuration minimale
- Support TypeScript/JSX natif
- Rollup en production
-

**Inconvénients :**

- Plus récent (moins de ressources)
- Moins de plugins que Webpack

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['lodash', 'date-fns']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
```

### **Webpack** (Le plus populaire)

**Avantages :**

- Écosystème énorme
- Configuration très flexible
- Loaders pour tout (CSS, images, fonts...)
- Code splitting avancé
- Hot Module Replacement

**Inconvénients :**

- Configuration complexe
- Temps de build lents sur gros projets
- Courbe d'apprentissage élevée

```javascript
// webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true
  },
  
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource'
      }
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ],
  
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  
  devServer: {
    port: 3000,
    hot: true,
    open: true
  }
}
```

### **Rollup** (Idéal pour librairies)

**Avantages :**

- Bundles très optimisés
- Tree-shaking excellent
- Configuration simple
- Parfait pour les librairies
- ES modules natifs

**Inconvénients :**

- Moins de fonctionnalités pour les apps
- Écosystème plus petit
- Code splitting limité

```javascript
// rollup.config.js
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.js',
  
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm',
      sourcemap: true
    },
    {
      file: 'dist/bundle.umd.js',
      format: 'umd',
      name: 'MyLibrary',
      sourcemap: true
    }
  ],
  
  plugins: [
    resolve({
      browser: true,
      preferBuiltins: false
    }),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env']
    }),
    terser() // Minification
  ],
  
  external: ['react', 'react-dom'] // Dépendances externes
}
```

### **Parcel** (Zero-config)

**Avantages :**

- Configuration zéro
- Très rapide
- Support multi-format natif
- Hot reload excellent
- Cache intelligent

**Inconvénients :**

- Moins de contrôle
- Écosystème plus petit
- Personnalisation limitée

```json
// package.json (suffit pour Parcel !)
{
  "scripts": {
    "dev": "parcel src/index.html",
    "build": "parcel build src/index.html --dist-dir dist"
  }
}
```

### **esbuild** (Ultra-rapide)

**Avantages :**

- Vitesse extrême (écrit en Go)
- Support TypeScript/JSX natif
- API simple
- Minification très rapide

**Inconvénients :**

- Fonctionnalités limitées
- Pas de Hot reload natif
- Écosystème naissant

```javascript
// build.js
const esbuild = require('esbuild')

esbuild.build({
  entryPoints: ['src/index.js'],
  bundle: true,
  outfile: 'dist/bundle.js',
  minify: true,
  sourcemap: true,
  target: 'es2015',
  loader: {
    '.png': 'file',
    '.svg': 'text'
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  }
}).catch(() => process.exit(1))
```

## Concepts clés

### 📥 **Entry Points**

```javascript
// Point d'entrée unique
entry: './src/index.js'

// Points d'entrée multiples
entry: {
  app: './src/app.js',
  admin: './src/admin.js',
  vendor: ['react', 'lodash']
}
```

### 📤 **Output**

```javascript
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: '[name].[contenthash].js', // Cache busting
  publicPath: '/assets/',
  clean: true // Nettoie le dossier de sortie
}
```

### **Loaders (Webpack)**

```javascript
module: {
  rules: [
    // JavaScript/TypeScript
    {
      test: /\.(js|ts)x?$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    },
    
    // CSS/SCSS
    {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    },
    
    // Images
    {
      test: /\.(png|jpg|gif|svg)$/,
      type: 'asset/resource',
      generator: {
        filename: 'images/[name].[hash][ext]'
      }
    },
    
    // Fonts
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      type: 'asset/resource',
      generator: {
        filename: 'fonts/[name].[hash][ext]'
      }
    }
  ]
}
```

### 🔌 **Plugins**

```javascript
plugins: [
  // Génère le HTML
  new HtmlWebpackPlugin({
    template: './public/index.html',
    minify: true
  }),
  
  // Extrait le CSS
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css'
  }),
  
  // Variables d'environnement
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  
  // Analyse du bundle
  new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    openAnalyzer: false
  })
]
```

### **Code Splitting**

```javascript
// Splitting automatique
optimization: {
  splitChunks: {
    chunks: 'all',
    cacheGroups: {
      // Vendors (node_modules)
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all'
      },
      
      // Code commun
      common: {
        minChunks: 2,
        chunks: 'all',
        name: 'common'
      }
    }
  }
}

// Dynamic imports (lazy loading)
const LazyComponent = lazy(() => import('./LazyComponent'))

// Webpack magic comments
const utils = import(
  /* webpackChunkName: "utils" */
  /* webpackPreload: true */
  './utils'
)
```

### 🌳 **Tree Shaking**

```javascript
// package.json - Marquer comme side-effect free
{
  "sideEffects": false
}

// Ou spécifier les fichiers avec side effects
{
  "sideEffects": [
    "*.css",
    "src/polyfills.js"
  ]
}

// Import spécifique pour tree shaking
import { debounce } from 'lodash' // Importe tout lodash
import debounce from 'lodash/debounce' // Importe seulement debounce
```

## Configuration complète Vite (Recommandée)

### `vite.config.js`

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react({
      // Fast Refresh
      fastRefresh: true
    })
  ],
  
  // Alias de chemins
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@assets': resolve(__dirname, 'src/assets')
    }
  },
  
  // Variables d'environnement
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version)
  },
  
  // Configuration du serveur de dev
  server: {
    port: 3000,
    open: true,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  
  // Configuration de build
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'terser',
    
    // Optimisation des chunks
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@mui/material', '@emotion/react'],
          utils: ['lodash', 'date-fns', 'axios']
        }
      }
    },
    
    // Configuration Terser
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  
  // Optimisation des dépendances
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['@vite/client', '@vite/env']
  },
  
  // CSS
  css: {
    modules: {
      localsConvention: 'camelCase'
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  }
})
```

## Scripts package.json

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "analyze": "vite-bundle-analyzer",
    
    "webpack:dev": "webpack serve --mode development",
    "webpack:build": "webpack --mode production",
    "webpack:analyze": "webpack-bundle-analyzer dist/stats.json",
    
    "rollup:build": "rollup -c",
    "rollup:watch": "rollup -c -w",
    
    "parcel:dev": "parcel src/index.html",
    "parcel:build": "parcel build src/index.html"
  }
}
```

## Optimisations avancées

### **Performance**

```javascript
// Lazy loading des routes
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))

// Preloading critique
const criticalData = import(
  /* webpackPreload: true */
  './critical-data'
)

// Prefetching pour plus tard
const nonCritical = import(
  /* webpackPrefetch: true */
  './non-critical'
)
```

### **Analyse des bundles**

```bash
# Webpack Bundle Analyzer
npm install -D webpack-bundle-analyzer
npx webpack-bundle-analyzer dist/stats.json

# Vite Bundle Analyzer
npm install -D vite-bundle-analyzer
npx vite-bundle-analyzer

# Rollup Plugin Visualizer
npm install -D rollup-plugin-visualizer
```

### **Configuration multi-environnement**

```javascript
// vite.config.js
export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production'
  
  return {
    plugins: [
      react(),
      ...(isProduction ? [
        // Plugins de production uniquement
      ] : [])
    ],
    
    build: {
      minify: isProduction ? 'terser' : false,
      sourcemap: !isProduction
    },
    
    define: {
      __DEV__: !isProduction
    }
  }
})
```

## Conseils pratiques

### **Bonnes pratiques**

- **Choisir selon le projet** - Vite pour nouveaux projets, Webpack pour legacy
- **Optimiser les chunks** - Séparer vendor, common, et pages
- **Utiliser le cache** - Contenthash pour le cache busting
- **Analyser régulièrement** - Surveiller la taille des bundles
- **Lazy loading** - Charger les composants à la demande

### **Pièges à éviter**

- **Sur-optimisation** - Ne pas optimiser prématurément
- **Bundles trop gros** - Surveiller la taille (< 250KB initial)
- **Trop de chunks** - Éviter la fragmentation excessive
- **Dépendances inutiles** - Auditer régulièrement

### **Debugging**

```javascript
// Source maps pour le debugging
devtool: 'eval-source-map', // Dev
devtool: 'source-map', // Production

// Verbose logging
stats: 'verbose',

// Analyse des performances
performance: {
  hints: 'warning',
  maxEntrypointSize: 250000,
  maxAssetSize: 250000
}
```

## Migration entre bundlers

### Webpack → Vite

```javascript
// Webpack
module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}

// Vite équivalent
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
```

## Ressources pour aller plus loin

- [Vite Documentation](https://vitejs.dev/)
- [Webpack Documentation](https://webpack.js.org/)
- [Rollup Documentation](https://rollupjs.org/)
- [Parcel Documentation](https://parceljs.org/)
- [esbuild Documentation](https://esbuild.github.io/)
- [Bundle Analysis Tools](https://github.com/webpack-contrib/webpack-bundle-analyzer)
- [Web Performance Guide](https://web.dev/performance/)


