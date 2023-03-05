exports.example1 = () => {
  let tpHd = 'untitled';
  function title() {
    return tpHd;
  }
  function setTitle(arg) {
    tpHd = arg;
  }

  let result = '';
  const obj = {
    articleTitle: 'title1',
  };
  result += `<h1>${title()}</h1>`;
  setTitle(obj['articleTitle']);
  console.log('\nchapter6, 05_renameVariable, example1\n', result, tpHd);
};
