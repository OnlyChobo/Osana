Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:new, :create, :show]
    resource :session, only: [:new, :create, :destroy]
    resources :tasks, only: [:index, :show, :create]
    resources :projects, only: [:index, :show, :create]
    resources :team_memberships, only: [:create, :update, :destroy, :show, :index]
  end
end
