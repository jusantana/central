import {
  Controller
} from "stimulus"

export default class extends Controller {
  static targets = ["realPriorityVal",
    "status", "priority", "priorityValue", "range_val"
  ]

  connect() {
    if (this.hasStatusTarget) {
      const element = this.statusTarget;
      const code = element.innerHTML;
      switch (+code) {
        case 0:
          element.innerHTML = "Idle";
          break;
        case 1:
          element.innerHTML = "Started";
          break;
        case 2:
          element.innerHTML = "Done";
          break;
        default:
          element.innerHTML = "Unknown";
      }
    }
    if (this.hasRealPriorityValTarget) {

      const element = this.realPriorityValTarget;
      const priority = element.innerHTML;
      console.log(priority)
      switch (+priority) {
        case 1:
          element.innerHTML = "Baja";
          break;
        case 2:
          element.innerHTML = "Normal";
          break;
        case 3:
          element.innerHTML = "Alta";
          break;
        default:
          element.innerHTML = "Unknown";
      }

    }
  }
  updatePriorityValue(evt) {

    switch (+evt.currentTarget.value) {
      case 1:
        this.priorityValueTarget.innerHTML = "Baja";
        break;

      case 2:
        this.priorityValueTarget.innerHTML = "Normal"
        break;

      case 3:
        this.priorityValueTarget.innerHTML = "Alta"
        break;
      default:
        this.priorityValueTarget.innerHTML = "-";
    }
  }

}