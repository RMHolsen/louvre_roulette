class Gallery < ApplicationRecord
    belongs_to :user 
    has_many :artworks 
    validates :title, presence: true 
    # Do we need any more validations here? 
end
