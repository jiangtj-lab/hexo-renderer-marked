'use strict';

module.exports = ctx => {
  const { filter } = ctx.extend;

  filter.register('marked:image', (data, options) => {
    let { href, title, text } = data;
    if (!parse(href).hostname && !options.config.relative_link
      && options.prependRoot) {
      href = url_for.call(options, href);
    }
    return `<img src="${encodeURL(href)}" alt="${text}">`;
  });
};