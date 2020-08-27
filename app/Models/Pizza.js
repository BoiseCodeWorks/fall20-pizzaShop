import { generateId } from "../Utils.js"
export default class Pizza {
  constructor({ name, toppings, id }) {
    console.log("making pizza")
    this.name = name
    this.id = id || generateId()
    this.toppings = toppings || ["Onions", "Olives", "Tomatoes"]
  }

  get Template() {
    return /*html*/`<div class="card col-3">
                <div class="card-body d-flex flex-column">
      <i class="fa fa-trash align-self-end" aria-hidden="true" onclick="app.pizzasController.removeZa('${this.id}')"></i>
                    <h4 class="card-title">${this.name}</h4>
                    <ul>
                        ${this.ToppingsTemplate}
                    </ul>
                    <form onsubmit="app.pizzasController.addTopping(event, '${this.id}')">
                      <div class="form-group d-flex">
                        <input type="text" name="topping" id="topping" class="form-control" placeholder="Enter Topping" aria-describedby="helpId">
                      <button class="btn btn-danger" type="submit"> Add
                      </button>
                      </div>
                    </form>
                </div>
            </div>`
  }

  get ToppingsTemplate() {
    let template = ""
    this.toppings.forEach(t => {
      template += /*html*/`<li>${t} <i class="fa fa-trash" aria-hidden="true" onclick="app.pizzasController.removeTopping('${this.id}', '${t}')"></i> </li>`
    });
    return template
  }
}