class ArtworksController < ApplicationController
    before_action :set_artwork, only: [:show, :edit, :update, :destroy]
    before_action :set_gallery 

    def index
        @artworks = @gallery.artworks 
        render json: @artworks 
    end 

    # def new 
    # end 

    def create 
        @artwork = @gallery.artworks.new(artwork_params)
        if @artwork.valid?
            # Remember, you need validations for this to kick  
            @artwork.save 
            render json: @gallery
            # Because artwork not only belongs to gallery but is also nested in gallery
            # If we create an artwork this way (and because the gallery is already set thanks to before_action :set_gallery)
            # (because artwork is nested)
            # And we render the json for the _gallery_ instead of the artwork
            # The json for the artwork is already there in the reducer payload in the front end
            # And things become a lot less convoluted over there
        else 
            # Ah ah ah! You didn't say the magic word!
            render json: { error: 'Ah ah ah! You didn\'t say the magic word!' }
        end 
    end 

    def show 
        render json: @artwork 
    end 

    def edit
    end 

    def update
    end 

    def destroy 
        @artwork.destroy 
        render json: @gallery
    end 

    private 

    def set_artwork 
        @artwork = Artwork.find(params[:id])
    end 

    def set_gallery
        @gallery = Gallery.find(params[:gallery_id])
    end 

    def artwork_params
        params.require(:artwork).permit(:gallery_id, :title, :medium, :style, :subject, :url, :hours)
    end 
end
