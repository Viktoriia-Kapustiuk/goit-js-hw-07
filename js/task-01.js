const category = document.querySelectorAll(".item");
console.log(`'В списке ${category.length} категории.'`);

const categoryList = [...category].map(categ => `Категория: ${categ.children[0].textContent}
Количество элементов:${categ.children[1].children.length}`).join("\n");
console.log(categoryList);