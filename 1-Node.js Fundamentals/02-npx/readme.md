# npx vs npm

```sh
npx <command>
```

Executes `<command>` either from a local node_modules/.bin, or from a central cache, installing any packages needed in order for `<command>` to run.

By default, `npx` will check whether `<command>` exists in $PATH, or in the local project binaries, and execute that. If `<command>` is not found, it will be installed prior to execution.

- [Documentation](https://www.npmjs.com/package/npx)
- [Introduction to npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)
