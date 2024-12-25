# @samui/web

This is the web app.

## Developing

Start a server in development mode.

```shell
pnpm install
pnpm turbo compile:js compile:typedefs
pnpm dev
```

Press <kbd>o</kbd> + <kbd>Enter</kbd> to open the app in a browser. Edits to the source code will automatically reload
the app.

## Building for deployment

Build a static bundle and HTML for deployment to a webserver.

```shell
pnpm install
pnpm turbo build
```

The contents of the `dist/` directory can now be uploaded to a webserver.
