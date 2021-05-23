// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const valEl = document.querySelector('#value');
const decrEl = document.querySelector('[data-action="decrement"]');
const incrEl = document.querySelector('[data-action="increment"]');

let counterValue = 0;

function decrement() {
    counterValue -= 1;
    valEl.textContent = counterValue;
}

function increment() {
    counterValue += 1;
    valEl.textContent = counterValue;
}

decrEl.addEventListener('click', decrement);
incrEl.addEventListener('click', increment);