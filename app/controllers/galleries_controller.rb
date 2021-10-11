class GalleriesController < ApplicationController
    before_action :set_gallery, only: [:show, :edit, :update, :destroy]

    def index 
        # This should work once the helper methods are written to show only the galleries associated with the current user 
        # Will need rewritten to show all public galleries maybe
        # Decide this later, it's a good stand in 
        @galleries = current_user.galleries 
        render json: @galleries 
    end 

    def new 
    end 

    def create 
        @gallery = Gallery.new(gallery_params)
        if @gallery.valid? 
            @gallery.save 
            render json: @gallery 
        else 
            # Ah ah ah! You didn't say the magic word!
            render json: { error: 'Ah ah ah! You didn\'t say the magic word!' }
        end 
    end 

    def show
        render json: @gallery 
    end 

    def edit 
    end 

    def update 
    end 
    
    def destroy 
        @gallery.destroy 
    end 

    private 

    def set_gallery 
    @gallery = Gallery.find(params[:id])
    end 

    def gallery_params 
    params.require(:gallery).permit(:title, :description, :user_id)
    end 
end
