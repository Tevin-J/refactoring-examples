const extractFunction = require('./01_extract-function/index');
const inlineFunction = require('./02_inline-function/index');
const extractVariable = require('./03_extract-variable');
const changeFunctionDeclaration = require('./04_change-function-declaration');
const renameVariable = require('./05_rename-variable');
const introduceParameterObject = require('./06_introduce-parameter-object');
const combineFunctionsIntoClass = require('./07_combine-functions-into-class');

exports.chapter6 = function () {
  extractFunction();
  inlineFunction();
  extractVariable();
  changeFunctionDeclaration();
  renameVariable();
  introduceParameterObject();
  combineFunctionsIntoClass();
};
