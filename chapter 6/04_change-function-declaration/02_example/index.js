function circum(radius) {
  return 2 * Math.PI * radius;
}

exports.renamingFunctionMigrationMechanics = () => {
  const result = circum(3);
  console.log(
    '\nchapter6, 04_changeFunctionDeclaration, renamingFunctionMigrationMechanics\n',
    result
  );
  return result;
};
