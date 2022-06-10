# Notes App built with Remix

## Why Remix?

After becoming accustomed to writing notes in Latex and Markdown, I wanted a public site to access the rendered content. The goal was to make the `./app/routes/` directory the same as my local `~/notes` directory. I wanted the Latex, Markdown, and image content to be publicly accessible without changing my note-taking workflow. Remix seemed like the right tool for the job.

## Technical Details

**`recursiveReaddir`** - accepts a path and creates a `File[]` array where

```ts
type File = {
  name: string;
  contents: File[];
};
```

I use `fs.readdir` to read the contents of `~/routes` and render the side navigation panel server-side. If it's a directory, `contents` will contain the files inside. If it's not a directory, `contents` will be `[]`.

`RecursiveAccordion` accepts this recursive structure, calling

```js
<Accordion>
  <RecursiveAccordion files={file.contents} />
</Accordion>
```

if it is a directory and

```js
<Link>{filename}</Link>
```

if it is a markdown file.
