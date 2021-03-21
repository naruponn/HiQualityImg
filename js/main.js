'use strict';

{
  document.querySelector('button').addEventListener('click', () => {
    exe();
  });
  document.body.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      exe();
    }
  });

  function exe() {
    const li = document.createElement('li');
    const text = document.querySelector('input')
    const word = text.value;
    const qua = document.querySelector('select');
    const l = `https://www.google.com/search?as_st=y&tbm=isch&hl=ja&as_q=${word}&as_epq=&as_oq=&as_eq=&cr=&as_sitesearch=&safe=images&tbs=isz:lt,islt:${qua.value}`;

    console.log(l);
    window.open(l, '_blank');
    text.focus();
  }
}