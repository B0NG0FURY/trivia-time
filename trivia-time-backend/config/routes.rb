Rails.application.routes.draw do
  resources :users, only: [:create]
  resources :games, only: [:create, :update]
  post '/login', to: 'auth#create'
  get '/logout', to: 'auth#delete'
  get '/users/:id/stats', to: 'users#stats'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
