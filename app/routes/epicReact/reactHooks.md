- hooks are used to update and store state
- `useEffect` runs after the DOM has been updated
- `sessionStorage` is saved until the page is closed
- `localStorage` persists through browser sessions (unless you're in a private browsing session in which tabs represent browser sessions)
  - empty cache and hard reload does not clear local/session storage (need to clear cookies for that)
  - `localStorage` comes with `getItem` (just accepts a string) and `setItem` (accepts a string and value)
  - you can set a state variable that persists through browser close by doing something like `useState(window.localStorage.getItem())` and a `useEffect(() => window.localStorage.setItem())`
- the second argument returned from `useState` is known as the state `dispatch` function
- every time a component runs (during the render phase), all of the variables inside it are defined again **arguments are given new values**
  - defining a new function was the first step you figured out to prevent stale state, but forcing the arguments to be redefined was the last step you needed
- there's a big difference between
  - initialState = `window.localStorage.getItem`
  - `getInitialState = () => window.localStorage.getItem`
    - `getInitialState` is not ran every render, but instead **defined** every render, which is much faster
    - this is the core idea to understanding the benefits of lazy initializers. setting a function as an argument to `useState` tells React to only run that functions instructions on the intial render
- if you want to set a function as the initial value for a piece of state, the lazy initializers functionality makes it so that you have to wrap it in a function
- **hook** a function that stores and manages state
  - custom hooks use other base React hooks
    - by prefixing custom hooks with `use`, you will gain eslint benefits of checking [rules of hooks](https://reactjs.org/docs/hooks-rules.html)
- calling a **hook** which calls `useEffect` at the top level will still run its callback as if `useEffect` were called at the top level
- you can use `%c` to add styles to console log messages
- when you return a function from a `useEffect`, React will call it when it's time to clean up that `useEffect` (unmounting and also rerender, i.e. parent state change)
- you made a noob mistake during this exercise, you defined `onClick={setSquares(squares(i))}` which calls the function instead of actually defining an `onClick`... this creates an infinite loop

# MOUNT PHASE

2. start render
3. lazy initializers

- lazy initializers are not ran on state updates

4. end render (update DOM then paint screen)
5. call `useEffect`s

- since `useEffect` is the last thing to run, if you initialize a `useRef` which points to a returned DOM node, it will be reference-able in the `useEffect`

# UPDATE

- a parent node may have `<Child /> ` aka `React.createElement(Child)` but the instructions of that `Child` node do not run until the parent node function has completed
- when a parent node has a ternary which may or may not return an element, it's possible for the parent to have already been mounted (update only) but the `<Child />` will have to be mounted, running only the `Child`s lazy initializers
  - recall that clean up effects are not ran on mount, so the `Child`'s clean up effects will not run however the `App`'s clean up effects will
- the term **derived state** is a bit misleading, they can be regular `const`s which are defined every render based on _actual_ React state
  - what you did was have a `useEffect` which had `squares` in its dependency array. you're basically adding an unnecessary render by updating state variables after `Board` rerenders because `squares` changed. these can just be set as regular `const`s when `Board` rerenders as a result of `squares` changing

# class component analogies

- `componentWillUnmount` ~ the return function in a `useEffect` callback
- `componentDidMount` ~ `useEffect` callback
- `createRef` ~ `useRef`
