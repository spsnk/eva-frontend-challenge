# Eva Frontend Challenge

## Original server code

The original code provided for the server is in the `./server/` folder. A small modification was made on `./server/src/api.js` line 43 so browsers like Google Chrome don't block the API Requests made through the localhost server due to CORS.

## Frontend code

The react app src code is provided on the `./client/` folder.

### Release/Deployment

A built version is provided on the `./build/` folder, ready to be served on the root route in apache, nginx or other static http servers. There is an included `.htaccess` file with optimized cache headers for apache.

### Documentation

Simple HTML documentation generated with JSDoc is provided through `./client/docs/index.html` and on the source files.

### Building/Serving

The client source code can be built and served with the command `./client$ yarn && yarn build && yarn serve`.

### Tests

Tests can be run with command `./client$ yarn && yarn test`.
