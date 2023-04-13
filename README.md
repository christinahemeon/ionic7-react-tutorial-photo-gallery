# Following Intro Ionic React Quickstart
Completed tutorial on April 6, 2023 following [Intro Ionic React Quickstart](https://ionicframework.com/docs/react/your-first-app) using Ionic 7.

## Issues following tutorial
Since I used Ionic 7, any reference to 'index.tsx' in the tutorial was implemented in 'main.tsx.'

I had an issue importing and using '@ionic/pwa-elements'; When running `ionic serve` I was met with the following errors in the console:
> Failed to load resource: the server responded with a status of 504 (Outdated Optimize Dep)

> TypeError: Failed to fetch dynamically imported module: http://localhost:8100/node_modules/.vite/deps/pwa-camera-modal.entry.js

> TypeError: Cannot read properties of undefined (reading 'isProxied')

This was solved by placing the following in vite.config.ts:
```
  optimizeDeps: {
    exclude: [`@ionic/pwa-elements/loader`],
  },
```
