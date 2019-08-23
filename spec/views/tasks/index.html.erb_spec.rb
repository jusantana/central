require 'rails_helper'

RSpec.describe "tasks/index", type: :view do
  before(:each) do
    assign(:tasks, [
      Task.create!(
        :department => nil,
        :action => "Action",
        :priority => 2
      ),
      Task.create!(
        :department => nil,
        :action => "Action",
        :priority => 2
      )
    ])
  end

  it "renders a list of tasks" do
    render
    assert_select "tr>td", :text => nil.to_s, :count => 2
    assert_select "tr>td", :text => "Action".to_s, :count => 2
    assert_select "tr>td", :text => 2.to_s, :count => 2
  end
end
