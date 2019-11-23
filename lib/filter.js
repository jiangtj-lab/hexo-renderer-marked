'use strict';

const { encodeURL, highlight, slugize, stripHTML, url_for } = require('hexo-util');
const { parse, URL } = require('url');

module.exports = ctx => {
  const { filter } = ctx.extend;

  filter.register('marked:image', (data, options) => {
    let { href, text } = data;
    if (!parse(href).hostname && !options.config.relative_link
      && options.prependRoot) {
      href = url_for.call(options, href);
    }
    data.href = encodeURL(href);
    data.content = `<img src="${data.href}" alt="${text}">`;
  });
};