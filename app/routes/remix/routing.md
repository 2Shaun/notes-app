- how does the directory structure in `app/routes` dictate the path segments in the URL?
- index routes (`index.ts`) matches exactly the

## route

- route === module

## url

- separate from route

## path

- a segment of a URL for which a route matches

## child route

- to be rendered in an `<Outlet />` component

## parent route

- a component containing an `<Outlet />` component

## index route

- contains no `<Outlet />` component as it matches the path of the directory it is contained

## dynamic segment

- represented with a `$[segment_name].tsx`, the value in the URL segment for which it matches can be obtained with `params`. `params` is obtained with the `useParams` hook
- this will not match anything after `/`

## splat

- represented by `$.tsx`, this will match ever

## ?index query

- if there is a directory and a route which matches a path, the index route match will be represented by a `?index` in the url

## nestless routing

- a `.` can be used in file names to create a component hierarchy which does not map to the corresponding path, i.e., the `/` in the URL matches a `.` in the file name

## pathless routing

- `__` can be used to create a directory hierarchy which is not represented in paths

## actions

- calling `useLoaderData` instructs Remix to call your code, so you have to export the `loader` you defined
- many Remix hooks are front end javascript that call serverside code?
- `action`s can be "controllers" that switch based on button `id`s
