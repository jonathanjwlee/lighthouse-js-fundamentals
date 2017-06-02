var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var i = 0;
var text = " ";
while(ingredients[i]) {
  text += ingredients[i]; i++;
}
console.log(ingredients);

// Write a for loop that prints out the contents of ingredients:

var i = 0;
var text = " ";
for(i = 0; i < ingredients.length; i++) {
  text += ingredients[i];
}
console.log(ingredients);

// Write any loop (while or for) that prints out the contents of ingredients backwards:

var i = 0;
var text = " ";
for(var i = ingredients.length - 1; i !== 0; i--) {
  text += ingredients[i];
}
console.log(text);