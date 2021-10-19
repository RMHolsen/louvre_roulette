class GallerySerializer < ActiveModel::Serializer
  attributes :id, :title, :description
  has_many :artworks 
end
