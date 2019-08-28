import {
  Controller
} from "stimulus"

export default class extends Controller {
  static targets = ["name"]

  connect() {
    //  console.log(this.element.children)
  }
  newTask() {

    console.log("sorting")
  }

}