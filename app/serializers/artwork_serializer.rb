class ArtworkSerializer < ActiveModel::Serializer
  attributes :id, :gallery_id, :title, :medium, :style, :subject, :url, :hours
end
