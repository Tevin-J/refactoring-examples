const { renamingFunctionSimpleMechanics } = require('./01_example/index');
const { renamingFunctionMigrationMechanics } = require('./02_example/index');
const { addingParameter } = require('./03_example/index');

module.exports = () => {
  renamingFunctionSimpleMechanics();
  renamingFunctionMigrationMechanics();
  addingParameter();
};
