'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable import/no-mutable-exports */
var CURRENT = 'NULL';
/**
 * use  authority or getAuthority
 * @param {string|()=>String} currentAuthority
 */
var renderAuthorize = function renderAuthorize(Authorized) {
  return function (currentAuthority) {
    if (currentAuthority) {
      if (currentAuthority.constructor.name === 'Function') {
        exports.CURRENT = CURRENT = currentAuthority();
      }
      if (currentAuthority.constructor.name === 'String' || currentAuthority.constructor.name === 'Array') {
        exports.CURRENT = CURRENT = currentAuthority;
      }
    } else {
      exports.CURRENT = CURRENT = 'NULL';
    }
    return Authorized;
  };
};

exports.CURRENT = CURRENT;

exports.default = function (Authorized) {
  return renderAuthorize(Authorized);
};