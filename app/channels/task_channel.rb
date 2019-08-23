class TaskChannel < ApplicationCable::Channel
  def subscribed
    department = Department.find params[:department_id]
    stream_for department
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
