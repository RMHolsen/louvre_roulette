class Gallery < ApplicationRecord
    # belongs_to :user 
    # Uncomment this when you're ready to put in the user model
    has_many :artworks 
    validates :title, presence: true 
    # Do we need any more validations here? 
end
