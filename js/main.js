'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const overul = document.getElementById('overul');
  const items = document.querySelectorAll('.app dd input');
  
  open.addEventListener('click', () => {
    overlay.classList.add('show');
  })
  ;
  close.addEventListener('click', () => {
    overlay.classList.remove('show');
  });

  overul.addEventListener('click', () => {
    overlay.classList.remove('show');
  });

  items.forEach(item => {
    item.addEventListener('click', () => {
      
      items.forEach(item => {
        item.classList.add('text-white');
      });
      
      item.classList.remove('text-white');
    });
  })
}