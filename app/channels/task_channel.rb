class TaskChannel < ApplicationCable::Channel
  def subscribed
    if params[:department_id].nil?
      reject
    else
      department = Department.find params[:department_id]
      stream_for department
 end
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
