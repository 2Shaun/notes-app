# fp-ts

```ts

const chain: <E, A, B>(f: (a: A) => State<E, B>) => (fa: State<E, A>) => State<E, B> = 
f => generate => seed => {
    const[seed2, a] = generate(seed);
    const [seed3, b] = f(a)(seed2);
    return [seed3, b];

}
```
