FactoryBot.define do
  factory :task do
    department { nil }
    action { "MyString" }
    priority { 1 }
  end
end
