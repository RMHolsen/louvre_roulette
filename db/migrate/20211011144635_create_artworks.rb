class CreateArtworks < ActiveRecord::Migration[5.0]
  def change
    create_table :artworks do |t|
      t.string :title # Title of work
      t.string :medium # Medium of work, e.g. watercolor, marker, acrylic
      t.string :style # Style of work, e.g. cubism, medieval, post-modern, pointillism
      t.string :subject # Dog, still life, bowl of fruit, dogs playing poker, ballet dancers
      t.string :url # URL
      t.float :hours # Hours spent on work
      t.belongs_to :gallery
      t.timestamps
    end
  end
end
