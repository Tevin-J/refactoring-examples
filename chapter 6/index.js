const extractFunction = require('./01_extract-function/index');
const inlineFunction = require('./02_inline-function/index');
const extractVariable = require('./03_extract-variable');

exports.chapter6 = function () {
  extractFunction();
  inlineFunction();
  extractVariable();
};
