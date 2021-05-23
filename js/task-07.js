const fontSize = document.querySelector('#font-size-control');
let textStyle = document.querySelector('#text');

fontSize.addEventListener('input', editSize);

function editSize(e) {
  textStyle.style.fontSize=event.currentTarget.value+ "px" ;
}