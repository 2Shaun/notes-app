- `<script>` tags have an option `type` with possible values of `text/javascript` (script) or `module` (module). scripts don't allow import statements, so `type='module'` is required for those.
- javascript imports make http requests for external `.js` files (these can be cached)

## Server Push

- inlining css with the `style` option or inlining javascript with `<script>` in an HTML page allows the content to be pulled in via one http request. the caveat to this is that caching policies are not applied to these external requests, but the first impression of the website is faster
- server
