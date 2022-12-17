const drinks = {
  strIngredient1: "Galliano",
  strIngredient2: "Ginger ale",
  strIngredient3: "Ice",
  strIngredient4: null,
  strIngredient5: null,
  strIngredient6: null,
  strIngredient7: null,
  strIngredient8: null,
  strIngredient9: null,
  strIngredient10: null,
  strIngredient11: null,
  strIngredient12: null,
  strIngredient13: null,
  strIngredient14: null,
  strIngredient15: null,
};
let ingredients = [];
let index = 1;
let prop = `strIngredient${index}`;

while (drinks[prop]) {
  ingredients.push(drinks[prop]);
  index++;
  prop = `strIngredient${index}`;
}
console.log(ingredients);
