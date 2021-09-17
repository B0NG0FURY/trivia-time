Rails.application.routes.draw do
  resources :users, only: [:create]
  post '/login', to: 'sessions#create'
  get '/logout', to: 'sessions#delete'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
