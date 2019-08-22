require 'faker'
FactoryBot.define do
  factory :user do
    email { Faker::Internet.email }
    password { Faker::Internet.password }
  end

  factory :department do
    name { Faker::Company.profession }
  end
end
