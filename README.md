# url-path-name

Package that shows path info in an easy to use object

## Installation
```javascript
npm i url-path-info --save-dev
```

## Usage
Just require the `url-path-info` module. 

```javascript
const pathInfo = require('url-path-info');

pathInfo('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Mapid?foo=lorem&bar=&baz');

// => Output
{ href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Mapid?foo=lorem&bar=&baz',
  protocol: 'https:',
  host: 'developer.mozilla.org',
  params: 
   { 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Mapid?foo': 'lorem',
     bar: '',
     baz: '' },
  port: undefined,
  pathname: '/en-US/docs/Web/JavaScript/Reference/Global_Objects/Mapid',
  search: '?foo=lorem&bar=&baz',
  hash: ''
```

## Tests

```bash
npm test
```
