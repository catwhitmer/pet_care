class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :species, :breed, :age
  has_many :todos
 
end
