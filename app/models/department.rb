class Department < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  has_many :tasks
  accepts_nested_attributes_for :tasks, allow_destroy: true
end
