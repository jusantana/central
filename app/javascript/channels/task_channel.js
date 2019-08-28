import consumer from "./consumer"

var connections = []

const addConnection = (id) => {
  connections.push(id)
}

const removeConnection = (id) => {
  index = connections.indexOf(id)
  if (index > -1) {
    connections.splice(index, 1)
  }
}
const connectedTo = (id) => {
  return connections.indexOf(id) > -1
}

const sortThem = (s) => {
  Array.prototype.slice.call(s).sort((ea, eb) => {
    var a = +$(ea).data("priority");
    var b = +$(eb).data("priority");
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  }).forEach((div) => {
    console.log(div.parentElement)
    div.parentElement.appendChild(div);
  });
}
// connects to ws only if connection does not already exists
$(document).on('turbolinks:load', function() {
  console.log(`connections: ${connections}`)
  let departmentId = $('#department_tasks_page').data("departmentId")
  if (departmentId && !connectedTo(departmentId)) {
    consumer.subscriptions.create({
      channel: "TaskChannel",
      department_id: departmentId
    }, {
      connected() {
        addConnection(departmentId)
        // Called when the subscription is ready for use on the server
        console.log("connected");
      },

      disconnected() {
        connected = false
        removeConnection(departmentId)
        // Called when the subscription has been terminated by the server
      },

      received(data) {
        let ancestor = document.getElementById("column_ancestor")
        let children = ancestor.children
        let newPriority = $(data.task).data("priority")
        $(ancestor).append(data.task);
        sortThem(children);
        const event = document.createEvent("CustomEvent");
        event.initCustomEvent("new-task", true, true, null);
        ancestor.dispatchEvent(event);
        console.log("appending")
        // Called when there's incoming data on the websocket for this channel
      }
    });
  }

})