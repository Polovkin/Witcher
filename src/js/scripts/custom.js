(function () {
  const button = document.querySelector('.main__btn-copy')

  button.addEventListener('click', function () {
    const code = document.getElementById('code')
    let range = document.createRange();

    range.selectNode(code);
    window.getSelection().addRange(range);

    try {
      let successful = document.execCommand('copy');
      let msg = successful ? 'удачно' : 'не удачно';
      console.log('копирование ' + msg);
    } catch (err) {
      console.log('Ошибка');
    }

    window.getSelection().removeAllRanges();
  })
}())




