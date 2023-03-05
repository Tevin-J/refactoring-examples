exports.example1 = () => {
  let _title = 'untitled';
  function title() {
    return _title;
  }
  function setTitle(arg) {
    _title = arg;
  }

  let result = '';
  const obj = {
    articleTitle: 'title1',
  };
  result += `<h1>${title()}</h1>`;
  setTitle(obj['articleTitle']);
  console.log('\nchapter6, 05_renameVariable, example1\n', result, _title);
};
