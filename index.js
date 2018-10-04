/**
 * Created by ahadbokhari on 5/04/17.
 */
/**
 * returns path info in an easy to use object format
 * @param {str} string
 * @return {obj}
 */

const getParams = (query) => {
  if (!query) {
    return {}
  }

  return (/^[?#]/.test(query) ? query.slice(1) : query)
    .split('&')
    .reduce((params, param) => {
      let [ key, value ] = param.split('=');
      params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : ''
      return params;
    }, { })
}

module.exports = (path) => {
  if (!path) {
    return new Error('You need to pass a reasonable url to the function')
  }
  const match = path.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/)

  return match && {
    href: path,
    protocol: match[1],
    host: match[2],
    params: getParams(path),
    port: match[4],
    pathname: match[5],
    search: match[6],
    hash: match[7]
  }
}




