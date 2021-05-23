// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inpName = document.querySelector('#validation-input');

inpName.addEventListener('input', onCheckNum);

function onCheckNum(e) {
    const correctNum = this.dataset.length;
    if (e.currentTarget.value.length <= correctNum) {
        inpName.classList.add('valid');
        inpName.classList.remove('invalid');  
    }
    if (e.currentTarget.value.length === 0) {
        inpName.classList.remove('valid');
        inpName.classList.remove('invalid');  
    }
    if (e.currentTarget.value.length > correctNum) {
        inpName.classList.remove('valid');
        inpName.classList.add('invalid');  
    }

}