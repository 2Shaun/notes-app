- when given a DOM node, you can create an event and dispatch it from that node, e.g., `node.dispatchEvent(e)`
- the event itself can be given settings like `cancellable`
- `event.target` is the node which dispatched the event
- `this` is the node which is currently handling the event
  - `<div className="parent"><div className="child"></div></div>`
    - here, if you click the child, that would be `event.target` but you are still technically clicking the parent. with an onclick handler, you could still reference the parent with `this`
- `render` from `react-testing-library` removes a lot of the boiler plate
- `screen` simulates `document.body`
  - you can see the entire content (with syntax highlighting) within `<body></body>` tags by running `screen.debug()`
- using things like `.firstChild` is bad in tests because you may want to change the `.firstChild` of your component

# npm packages

- `faker` for generating random data that satisfies some contraint
- `@jackfranklin/test-data-bot` for generating objects populated with random data from `faker`
  - `sequence(x => `jack${x}@gmail.com`)` caught your eye because it seems like an interesting way to utilize the iterator `x` to iterate a string
