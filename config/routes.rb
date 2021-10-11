Rails.application.routes.draw do
  resources :galleries do 
    resources :artworks
  end 
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
