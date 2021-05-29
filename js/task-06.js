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

const input = document.querySelector('#validation-input');

input.addEventListener('input', onInutChange);
function onInutChange(e) {
    const correctLength = this.dataset.length;
    if (e.currentTarget.value.length < correctLength) {
        input.classList.add("invalid");
        input.classList.remove("valid");

    } if (e.currentTarget.value.length == correctLength) {
        input.classList.add("valid");
        input.classList.remove("invalid");

    } if (e.currentTarget.value.length === 0) {
        input.classList.remove("valid");
        input.classList.remove("invalid");

    } if (e.currentTarget.value.length > correctLength) {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
}