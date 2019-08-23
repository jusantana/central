json.extract! task, :id, :department_id, :action, :priority, :created_at, :updated_at
json.url task_url(task, format: :json)
