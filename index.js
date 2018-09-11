function init() {
  //put any page initialization/handlebars initialization here
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
Handlebars.registerHelper('displayIngredient', function(ingredient) {
  return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')})
