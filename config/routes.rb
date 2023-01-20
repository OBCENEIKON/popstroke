Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'bookings/index'
      post 'bookings/create'
      get 'bookings/show/:id', to: 'bookings#show'
      delete 'bookings/destroy/:id', to: 'bookings#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
