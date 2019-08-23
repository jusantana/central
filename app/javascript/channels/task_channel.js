import consumer from "./consumer"

consumer.subscriptions.create({channel: "TaskChannel", department_id: document.querySelector('head').dataset.departmentId }, {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    $('#tasks_table').append(data.action);
    // Called when there's incoming data on the websocket for this channel
  }
});
