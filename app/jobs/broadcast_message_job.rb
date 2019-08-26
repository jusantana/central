class BroadcastMessageJob < ApplicationJob
  queue_as :default

  def perform(department, task)
    TaskChannel.broadcast_to(department, task: DepartmentsController.render(partial: 'task', locals: { task: task }))
  end
end
