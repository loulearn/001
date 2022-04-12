import '../styles/styles.css'
import Person from './modules/Person'

if (module.hot) {
  module.hot.accept()
}

/* lesson 42 example code below */
class Adult extends Person {
  payTaxes() {
    console.log(this.name + " now owes zero taxes.");
  }
}

var john = new Person("Joe Doe", "y");
john.greet();

var jane = new Adult("Jane Smith", "e");
jane.greet();
jane.payTaxes();

