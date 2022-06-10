# [Eq](https://dev.to/gcanti/getting-started-with-fp-ts-setoid-39f3)

- type classes are defined as Typescript interfaces
- something is a member of the type class `Eq` if it implements the `equals` function

```ts
interface Eq<A> {:w

  /** returns `true` if `x` is equal to `y` */
  readonly equals: (x: A, y: A) => boolean;
}
```

- notice that the `interface` attaches a name to a type signature. this is confusing because there is no logic about whether or not `x === y`, it simply accepts `x` and `y` and returns `true` or `false`
- gcanti states that instances of `Eq` must satisfy reflexivity, symmetry, and transitivity, but there is no mechanism to enforce that that I can see
- creating a new type which can only be returned by a specific function (set of functions) allows your type checker to assure that something was first funnelled through a function before it is used
  - `Shuffle : Deck -> ShuffledDeck`, `Deal : ShuffledDeck -> ShuffledDeck*Card` assures that a deck must be shuffled before it is dealt. notice that shuffle is **NOT** a boolean that anyone can set to true or false
