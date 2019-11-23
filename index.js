/* global hexo */

'use strict';

var renderer = require('./lib/renderer')(hexo);

hexo.config.marked = Object.assign({
  gfm: true,
  pedantic: false,
  breaks: true,
  smartLists: true,
  smartypants: true,
  modifyAnchors: '',
  autolink: true,
  sanitizeUrl: false,
  headerIds: true,
  // TODO: enable prependRoot by default in v3
  prependRoot: false,
  external_link: {
    enable: false,
    exclude: []
  }
}, hexo.config.marked);

require('./lib/filter')(hexo);
hexo.extend.renderer.register('md', 'html', renderer, true);
hexo.extend.renderer.register('markdown', 'html', renderer, true);
hexo.extend.renderer.register('mkd', 'html', renderer, true);
hexo.extend.renderer.register('mkdn', 'html', renderer, true);
hexo.extend.renderer.register('mdwn', 'html', renderer, true);
hexo.extend.renderer.register('mdtxt', 'html', renderer, true);
hexo.extend.renderer.register('mdtext', 'html', renderer, true);
