const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');
function createList(ingredients) {
    const itemName = ingredients.map(ingred => {
        let getItem = document.createElement('li');
        getItem.textContent = ingred;
        return getItem;

    });
    ingredientsList.append(...itemName);
}
createList(ingredients);