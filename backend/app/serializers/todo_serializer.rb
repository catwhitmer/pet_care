class TodoSerializer < ActiveModel::Serializer
  attributes :id, :description, :notes, :pet_id
  belongs_to :pet

end
