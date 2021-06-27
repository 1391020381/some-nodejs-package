"use strict";

require("core-js/modules/es.object.assign.js");

const a = 1;
const b = Object.assign({}, {
  b: 1
});

const fn = function fn() {
  return 1;
};