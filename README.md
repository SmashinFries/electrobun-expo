# Electrobun + React Native / Expo

An example of running an [Expo](https://docs.expo.dev/) app on desktop with [Electrobun](https://github.com/blackboardsh/electrobun).

⚠️Production builds are currently untested⚠️

## Getting started

### Development

`bun run desktop:dev`

### Production Build

`bun run desktop:build`

## Observations
### Metro config
After making the rpc api with `defineRPC` and then running a dev build, I got the error: "Unable to resolve module ../shared/rpc.js". Turns out this is because electrobun is attempting to resolve `node_modules/electrobun/dist/api/shared/rpc.ts` but is importing as a `.js`.

To quickly counter this, I stripped the `.js` before resolving.

### Electrobun config
The views entrypoint should be your expo web server url (ex: `"http://localhost:8081"`) for development and `dist/index.html` for production builds. 

I had issues compiling due to files such as `favicon.ico` not bundling. Configuring the build.copy field solved this:

```ts
copy: {
    "dist": "views/" 
}
```