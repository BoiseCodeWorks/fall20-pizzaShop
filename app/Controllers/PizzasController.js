import _pizzaServ from "../Services/PizzasService.js"
import STORE from "../store.js";


function _drawPizzas() {
  STORE.saveState()
  console.log(STORE.State.pizzas)
  let template = ""
  STORE.State.pizzas.forEach(p => template += p.Template)
  document.getElementById("pizzas").innerHTML = template
}



export default class PizzasController {
  constructor() {
    console.log("hi from pizza controller");
    _drawPizzas()
  }


  createPizza(event) {
    event.preventDefault();
    let form = event.target
    let newPizza = {
      name: form.name.value
    }
    _pizzaServ.createPizza(newPizza)
    _drawPizzas()
  }

  removeZa(id) {
    console.log(id)
    _pizzaServ.deleteZa(id)
    _drawPizzas()
  }

  addTopping(event, pizzaId) {
    event.preventDefault();
    let form = event.target
    let newTopping = form.topping.value
    console.log(newTopping)
    _pizzaServ.addTopping(newTopping, pizzaId)
    _drawPizzas()
  }

  removeTopping(pizzaId, toppingName) {
    console.log(pizzaId, toppingName)
    _pizzaServ.removeTopping(pizzaId, toppingName)
    _drawPizzas()
  }
}