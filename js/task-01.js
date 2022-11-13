const categories = document.querySelector("#categories");
console.log("Number of categories: ", categories.children.length);

// const animals = categories.children[0].firstElementChild;
// console.log("Category :", animals.textContent);
// const animalNumber = animals.nextElementSibling.children.length;
// console.log("Elements : ", animalNumber);

// const products = categories.children[1].firstElementChild;
// console.log("Category :", products.textContent);
// const productNumber = products.nextElementSibling.children.length;
// console.log("Elements : ", productNumber);

// const technologies = categories.children[2].firstElementChild;
// console.log("Category :", technologies.textContent);
// const technologyNumber = technologies.nextElementSibling.children.length;
// console.log("Elements : ", technologyNumber);

for (let i = 0; i < categories.children.length; i += 1) {
  const categoryName = categories.children[i].firstElementChild;
  const categoryItems = categoryName.nextElementSibling.children.length;
  console.log("Category : ", categoryName.textContent);
  console.log("Elements : ", categoryItems);
}
