# [Official Typescript Docs](typescriptlang.org)

- `interface`s enforce you to define each property and type match
- type `any` tells compiler to ignore variable
  - without `strictNullCheck`, the types `undefined` and `null` are treated like `any`
- inline types are anonymous types

```
let o: {
    propOne: string,
    propTwo: boolean,
}
```

- angle brackets, `<T>`, define a type parameter to be used in the rest of the expression

```
function lastElement<T>(arr: T[]): T {
    let retVal: T;

    arr.forEach(x => { retVal = x; });

    return retVal;
}
```

## [Typescript Deep Dive](https://basarat.gitbook.io/typescript/)

## `tsconfig.json`

### `target`

- the syntax that typescript will transpile to

### Module Resolution

- the syntax used for module resolution defined by `module` in `tsconfig.json`
- `import { a } from 'x'` (non-relative import)
  - can resolve to **ambient** modules
  - may be resolve relative to `baseUrl`
- `import { a } from './x'` (relative import)
  - use for your modules that will not change location
- `import *`
  - namespace import
- `import [word]`
  - default import
- modules can re-export from other modules without introducing local variables
- `node` uses a function called `require` which was inspired by `require.js`

#### Node Module Resolution

- non-relative imports check `node_modules`. consider `require('moduleA')`

1. node checks for `node_modules/moduleA.js`
2. node checks for a `main` value in `node_modules/moduleA/package.json` and loads that
3. node loads `node_modules/moduleA/index.js`

### Typescript Module Resolution

same as node but replacing `main` with `types` in `package.json` and `js` with `.d.ts` or `ts`

## Debugging

# Node Apps

- "Launch Program" throws "No such file or directory" errors
- "Run script" with `compilerOptions.sourceMaps == true` in `tsconfig`
- 
  - `ts-node` is capable of doing JIT transpilation to Javascript
  - `nodemon` is capable of running `ts-node` on file change
