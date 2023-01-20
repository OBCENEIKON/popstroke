class Booking < ApplicationRecord
  belongs_to :user, optional: true
  accepts_nested_attributes_for :user

  validates :time_slot, presence: true, uniqueness: true
end
