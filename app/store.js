import Pizza from "./Models/Pizza.js";

let _state = {
  // @ts-ignore
  pizzas: [new Pizza({ name: "Tims Great Pizza" })]
};

function _loadState() {
  let data = JSON.parse(localStorage.getItem("pizzas"))
  if (data) {
    data.pizzas = data.pizzas.map(p => new Pizza(p))
    _state = data
  }
}

_loadState()

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }

  saveState() {
    localStorage.setItem("pizzas", JSON.stringify(_state))
  }
}

const STORE = new Store();
export default STORE;
