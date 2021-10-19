class GallerySerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :description, :user_id 
  has_many :artworks 
end

