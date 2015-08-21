'use strict';

function external(node) {
  if (!node || !node.getAttribute) return false;

  var target = node.getAttribute('target');
  if (target && target !== '_self') return true;

  if (node.getAttribute('rel') === 'external') return true;

  var link = node.getAttribute('href');

  // tel or mailto or https
  if (link.match(/^\w+:/)) return true;

  // protocoless
  if (link.match(/^\/\//)) return true;

  return false;
}

module.exports = external;
