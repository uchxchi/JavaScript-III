/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: it is the default for 'this' when it is not defined.
* 2. Implicit Binding: it implies that the value to the left of an invoked function is what 'this' refers to.
* 3. Explicit Binding: it explicitly tells js what the 'this' keyword refers to using ".call" ".apply" and ".bind"
* 4. New Bindimg: The new keyword is used to create an object from a constructor function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const age = function(){
    console.log(this.age);
};
window.age = 100;
age();

// Principle 2

// code example for Implicit Binding
const myFamily = {
    surname: 'Nwabia',
    Siblings: 7,
    family: function(){
        console.log(`I am from the ${this.surname} family`)
    },
};
myFamily.family();
// Principle 3

// code example for New Binding

let City = function(population) {
    this.pop = population;
}

let lagos = new City('millions');
console.log(lagos)




// Principle 4

// code example for Explicit Binding
const foodLoversChoice = function(){
    console.log(`My favorite meal is ${this.favMeal}`);
}

const foodLovers = {
    favMeal: 'jollof rice',
    favSoup: 'Afang',
    favProtein: 'chicken'
} 
foodLoversChoice.call(foodLovers);

//using .bind
const newFoodLover = foodLoversChoice.bind(foodLovers);
newFoodLover();

