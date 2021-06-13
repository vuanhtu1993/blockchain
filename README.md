# Where I take course about blockchain and vue
1. Improve your focus while studying or working using the [Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique#:~:text=The%20Pomodoro%20Technique%20is%20a,length%2C%20separated%20by%20short%20breaks.).
2. Storybook about vue component
3. Understanding Web3

Start using: https:vuanhtu1993.github.io/blockchain

/user-images.githubusercontent.com/22479477/120112887-38d49d80-c14e-11eb-8f78-9ef569a7a290.mp4

## Setup
Install the dependencies:
```
npm install
```

Compiles and hot-reloads for development
```
npm run serve
```

Compiles for production
```
npm run build
```

Run Linter
```
npm run lint
```

## Deploy to the github page
1. Create vue.config.js if not existed
2. Add following code to the config
```javascript
publicPath: process.env.NODE_ENV === 'production'
? '/blockchain'
: '/'
```
4. yarn add -D gh-pages
5. yarn build
6. Add "deploy": "gh-pages -d dist" to the script
3. Add "homepage": "https://github.com/vuanhtu1993/blockchain" to the package.json
