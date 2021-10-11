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
        @artwork = Artwork.new(artwork_params)
        if @artwork.valid?
            # Remember, you need validations for this to kick  
            @artwork.save 
            render json: @artwork 
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
