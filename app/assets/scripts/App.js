import '../styles/styles.css'
import Person from './modules/Person'

if (module.hot) {
  module.hot.accept()
}

/* lesson 42 example code below */


var john = new Person("Jo Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "brown");
jane.greet();

