Rails.application.routes.draw do
  # resources :tasks
  root to: 'departments#index'
  devise_for :users
  resources :departments do
    resources :tasks
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
