class Pet < ApplicationRecord
    has_many :todos
   
    validates :name, :species, :breed, :age, presence: true
end
