require 'rails_helper'

RSpec.describe "tasks/new", type: :view do
  before(:each) do
    assign(:task, Task.new(
      :department => nil,
      :action => "MyString",
      :priority => 1
    ))
  end

  it "renders new task form" do
    render

    assert_select "form[action=?][method=?]", tasks_path, "post" do

      assert_select "input[name=?]", "task[department_id]"

      assert_select "input[name=?]", "task[action]"

      assert_select "input[name=?]", "task[priority]"
    end
  end
end
