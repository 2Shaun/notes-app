# (How to write a React component in Typescript)[https://kentcdodds.com/blog/how-to-write-a-react-component-in-typescript]

```javascript
const operations = {
  "+": (left, right) => left + right,
  "-": (left, right) => left - right,
  "*": (left, right) => left * right,
  "/": (left, right) => left / right,
};
```

- this is interesting to have in a React component because you can create a set of common functions that a component may use and pass a string as a prop to reference it
- before beginning the arrow function definition, you can use `<>` to define generic types, e.g.,

```typescript
<NewType extends OldType>(x: NewType) => x;
```
