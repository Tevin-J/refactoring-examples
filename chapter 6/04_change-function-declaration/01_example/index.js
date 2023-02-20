function circum(radius) {
  return 2 * Math.PI * radius;
}

exports.renamingFunctionSimpleMechanics = () => {
  const result = circum(3);
  console.log(
    '\nchapter6, 04_changeFunctionDeclaration, renamingFunctionSimpleMechanics\n',
    result
  );
  return result;
};
