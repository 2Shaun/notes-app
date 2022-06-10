- when using an effect (`useEffect`) to fetch, typically we render a loader component while a state value is waiting to be populated. after the state value is populated from an HTTP response, we render a different component. this means that everything in this component needs to wait until the fetch completes. this presents a problem if that component has other components as children which do the same thing
- another solution is to wait until all possible `fetch` responses return (`Promise.all`) then render all components. this presents another problem however that we don't render until all responses are returned
- React suspense presents a solution which will fetch, try rendering, then resolve the fetch. this allows interactive elements of your app (which don't depend on http responses) to be rendered