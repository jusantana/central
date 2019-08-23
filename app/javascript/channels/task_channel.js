import consumer from "./consumer"

consumer.subscriptions.create({channel: "TaskChannel", department_id: document.querySelector('head').dataset.departmentId }, {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("connected");
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    $('#tasks_table').append(data.task);
    console.log(data.task)
    // Called when there's incoming data on the websocket for this channel
  }
});
