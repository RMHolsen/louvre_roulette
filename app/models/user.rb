class User < ApplicationRecord
    has_many :galleries
    has_many :artworks, through: :galleries

    def medium_hours(medium)
        @media_hours = 0
        # Set initial value of 0
        self.artworks.each do |work|
            if work.hours != nil && work.medium == medium 
            # If there are work hours (i.e. not nil) and the work medium matches the given
                @media_hours += work.hours 
                # Add the work hours to media hours
            end 
        end 
        @media_hours
        # Return the final value
    end
end
