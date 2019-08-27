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
        $('#column_ancestor').append(data.task);
        console.log("appending")
        // Called when there's incoming data on the websocket for this channel
      }
    });
  }

})