Rails.application.routes.draw do
  resources :comments
  resources :tags
  resources :gigs
  resources :users

  post '/check_user' => 'users#check_user'
  # , as: :check_username
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
