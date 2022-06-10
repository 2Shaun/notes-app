**javascript runtime environment** - executes JS code and defines global objects (for example, Chrome's **V8** defines `window` and node defines `process`)
**V8** - javascript runtime environment for Google Chrome, compiles javascript directly to machine code (binary)
**SpiderMonkey** - JS runtime environment for Firefox
# Node Runtime Environment
- you may use `#!/usr/bin/env node` at the beginning of a `.js` file and make it executable with `chmod u+x` to directly run it in the shell
- `dotenv` npm package can consume .env files add add them to `process.env`
**signals** - notifications sent between processes in the POSIX standard
- `process.argv` is an array which lets you access arguments sent in the terminal
- the `minimist` npm package lets you easily parse arguments such as `name=joe` and create an argument object of key value pairs