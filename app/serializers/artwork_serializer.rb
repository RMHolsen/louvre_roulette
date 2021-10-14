class ArtworkSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :gallery_id, :title, :medium, :style, :subject, :url, :hours
end

