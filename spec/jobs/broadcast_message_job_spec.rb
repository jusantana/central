require 'rails_helper'

RSpec.describe BroadcastMessageJob, type: :job do
  it 'queues the job' do
    task = FactoryBot.create :task
    expect { BroadcastMessageJob.perform_later(task.department, task) }.to have_enqueued_job(BroadcastMessageJob).with(task.department, task).at(:no_wait)
  end
end
