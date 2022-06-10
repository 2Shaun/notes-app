- `document.createElement('root')` created a `<root>` node and not a `<div>`!
  - I had to set the `id` property of that `Element`
  - `Element` inherits from `Node` (there are `Node`s that aren't elements)
  - `<root>` was probably an `HTMLUnknownElement`
  - analogous to `React.createElement`
- `append` is analogous to react render from `ReactDOM`
- `React`, `ReactDOM`, and `Babel` are just javascript files
- `children` prop accepts an array of `ReactElement`s
  - they have to be created using `React.createElement` before being called in the `children` array
- `createElement` is not enough to render it to the DOM
- `<script>` tags can have a `type="text/babel"` to compile directly in the browser
- you can spread the children prop to populate a string within a tag, e.g., `let children = 'hello world'; let props = {children}; let element = <div {...props}>;`
  - you can override a `props` value by putting it AFTER the spread
- you can't have self closing `<div />` in HTML
- **component**
  - functions which return something that's renderable
  - `createElement` can accept strings as the first argument but it can also accept components (you can define components inline with `createElement` with an anonymous arrow function which returns something that's renderable)
  - if you define your components with a capital letter, `babel` will compile `<Component>` to `React.createElement(Component)`
    - this means if you have a component defined like `const message = ({children}) => <div>{children}</div>`, babel will compile `<message>` to `React.createElement('message')`, which is incorrect
- `React.Fragment`s allow you to have multiple **component**s at the same level
  - use these over `<div>`s because they don't add a node to the DOM
- making components with implicit returns

```javascript
() => <div />;
```

means you can't reasonably declare variables or use hooks

# `<form> onSubmit`

- `e.preventDefault()` prevents refreshing the page
- gets access to `e.target.elements` which is an object of all elements enclosed in the form with a `value` attribute
  - `e.target` is the form
  - `e.target.elements` contains the elements indexed by ordered they appear on the form but also by their `name` attribute
- `name` is for `<form>` fields only
- `id` is used to identify DOM nodes
