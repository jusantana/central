require 'rails_helper'

RSpec.describe TaskChannel, type: :channel do
  before do
    user = FactoryBot.create :user
    # initialize connection with identifiers
    stub_connection user_id: user.id
  end
  let(:department) { FactoryBot.create :department }

  it 'rejects when no room id' do
    subscribe
    expect(subscription).to be_rejected
  end

  it 'subscribes to a st
  ream when room id is provided' do
    subscribe(department_id: department.id)
    # or directly by model if you create streams with `stream_for`
    expect(subscription).to have_stream_for(department)
  end
end
