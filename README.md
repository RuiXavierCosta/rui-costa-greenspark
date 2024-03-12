# rui-costa-greenspark

### Setup
- Decided to go with Vue 3, which I do not have a lot of experience with. I mostly worked with Vue 2, but it was on my list of things to learn, so I might as well!
- Did not use Vuex because `reactive` was enough for this case.
- Decided to go with Typescript just for the fun of it. There was really no need to use it in a project with this scale and scope.

1. Started by writting down everything I would need to do, and drawing out a mental roadmap;
2. Organized every design asset and deliverable I would need;
3. Created the project boilerplate and imported the previously mentioned assets;
4. Drew a boilerplate of the UI with placeholder elements;

## Technical issues
- Had some problems with the toggle and the checkbox specs because I didn't have a real-size active state. I only had the "States" mockups, wich were scaled up. This might have caused some problems with the implementation's accuracy;
- Also didn't have information about the toggle's dropshadow for the background, so I had to eyeball it :D;
- Did not test on multiple browsers or mobile devices;

### Note
- Implemented only some basic unit tests, nothing really fancy;
- Decided to implement an extra route with a "Public Profile" view;
- Wanted to do a bit of SVG animation, so I decided to add it to the "Public Profile" view;

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
