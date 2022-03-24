class Patient < ApplicationRecord
  has_many :appointments 
  has_many :doctor, through: :appointments
end
