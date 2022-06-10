# Notes App built with Remix

## Technical Details

**`recursiveReaddir`** - accepts a path and uses `fs.readdir` to create a `.json` file containing a `File[]` array where

```ts
type File = {
  name: string;
  contents: File[];
};
```

`recursiveReaddir` is ran at build time to read the contents of `~/routes` and construct a file called `data.json` representing the file structure of `~/routes`. This file is then passed into the navigation panel which is rendered server-side. If it's a directory, `contents` will contain the files inside. If it's not a directory, `contents` will be `[]`.

`RecursiveAccordion` accepts this recursive structure defined in `data.json`, calling

```js
<Accordion>
  <RecursiveAccordion files={file.contents} />
</Accordion>
```

if it is a directory and

```js
<Link>{file.name}</Link>
```

if it is a markdown file. [MDX](https://mdxjs.com/) will turn the markdown files (parsing LaTeX) into javascript bundles which Remix will serve at the `Link`s. These bundles will be cached at Cloudflare HTTP edge servers.
