Rails.application.routes.draw do
  root to: 'departments#index'
  devise_for :users
  resources :departments
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
