import '../styles/styles.css'

if (module.hot) {
  module.hot.accept()
}

/* lesson 42 example code below */

function person(name, favColor) {
  console.log("Hello my name is " + name + " and my favorite color is " + favColor + ".");
}

person("Jon D", "blu");
person("Jan", "gr");