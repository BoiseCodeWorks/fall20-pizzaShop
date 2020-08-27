import STORE from "../store.js";
import Pizza from "../Models/Pizza.js";

class PizzasService {

  constructor() {
    // console.log(STORE.State.pizzas)
    console.log("hi from pizza service");
  }

  createPizza(pizzaData) {
    // console.log("creating pizza frrom service", pizzaData)
    let newZa = new Pizza(pizzaData)
    STORE.State.pizzas.push(newZa)
    // console.log(STORE.State.pizzas)
  }

  deleteZa(id) {
    STORE.State.pizzas = STORE.State.pizzas.filter(p => p.id != id)
  }

  addTopping(newTopping, pizzaId) {
    let pizza = STORE.State.pizzas.find(p => p.id == pizzaId)
    if (newTopping == "banana") {
      alert("Not allowed on pizzas")
      this.deleteZa(pizzaId)
    }
    pizza.toppings.push(newTopping)
  }

  removeTopping(pizzaId, toppingName) {
    let pizza = STORE.State.pizzas.find(p => p.id == pizzaId)
    let toppingIndex = pizza.toppings.findIndex(t => t == toppingName)
    pizza.toppings.splice(toppingIndex, 1)
  }
}

const PIZZA_SERVICE = new PizzasService();
export default PIZZA_SERVICE