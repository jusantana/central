FactoryBot.define do
  factory :task do
    department { FactoryBot.create :department }
    action { 'MyString' }
    priority { 1 }
  end
end
