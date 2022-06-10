# Intersections (&) and Unions (|)

- intersection types work for all values who match both types, i.e., whose properties map to one of the types :

```ts
interface ErrorHandling {
  success: boolean;
  error: string;
}

interface GetBoardsResponse {
  boards: string[];
}

interface GetRoomsResponse {
  rooms: string[];
}

function getBoards(): Promise<GetBoardsResponse & ErrorHandling> {
  /*
    ...
    */

  return new Promise((res, rej) => {
    res({
      // note that all properties map to either GetBoardsResponse or ErrorHandling
      success: true,
      error: "",
      boards: ["", "", "", ""],
    });
  });
}
```

## Union Types

- union types work for all values that map to one type, i.e., the set of properties must all belong to one type in the union
- when using union types, you can set a `string` property among all of them and switch statement to determine which type it is. if the return type is explicit and no default case is set, Typescript can check the code flow of the switch statement to determine if all possible types are accounted for

# fetch with typescript

- type script has utility types such as `Omit` and `Pick` which will let you omit/pick properties from other types
