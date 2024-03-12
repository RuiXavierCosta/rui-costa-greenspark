# rui-costa-greenspark

This template should help get you started developing with Vue 3 in Vite.

- Decided to go with Vue 3, which I do not have a lot of experience with. I mostly worked with Vue 2.
- Did not use Vuex because `reactive` was enough for this case.
- Decided to go with Typescript just for the fun of it. There was really no need to use it in a project with this scale and scope.
- Had some problems with the toggle and the checkbox specs because I didn't have a real-size active state. I only had the States mockups, wich were scaled up. This might have caused some problems with the implementation's accuracy.


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

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
