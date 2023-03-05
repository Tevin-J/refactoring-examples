exports.example1 = () => {
  let tpHd = 'untitled';
  let result = '';
  const obj = {};
  result += `<h1>${tpHd}</h1>`;
  tpHd = obj['articleTitle'];
  console.log('\nchapter6, 05_renameVariable, example1\n', result);
};
