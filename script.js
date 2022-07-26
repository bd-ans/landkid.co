let listBtn = document.getElementById('list-btn');
let openBox = document.getElementById('open-box');
let closeBtn = document.getElementById('closeBtn');
let body = document.getElementsByTagName('body')[0];
let openboxInner = document.getElementById('openbox-inner');

listBtn.onclick = function() {
  openBox.classList.remove('d-none');
  openBox.classList.add('d-block');
  body.classList.add('overflow-hidden');
};

closeBtn.onclick = function() {
  openBox.classList.remove('d-block');
  openBox.classList.add('d-none');
  body.classList.remove('overflow-hidden');
};

openBox.style.height = window.innerHeight + 'px';