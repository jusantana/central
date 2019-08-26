require 'resque_web'

Rails.application.routes.draw do
  # resources :tasks
  root to: 'departments#index'
  devise_for :users
  resources :departments do
    get :tasks, on: :member
    post :new_task, on: :member
  end

  mount ResqueWeb::Engine => '/resque_web'
  mount ActionCable.server, at: '/cable'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
