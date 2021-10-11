class Artwork < ApplicationRecord
    belongs_to :gallery 
    validates :title, :medium, presence: true 
    # Validating title to have something to call it, medium to register it with the user's medium hours? Maybe? 
end
