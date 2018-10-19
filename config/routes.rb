Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :show]
    resource :session, only: [:create, :destroy]
    resources :tasks, only: [:index, :show, :create, :update]
    resources :sections, only: [:create, :show]
    resources :comments, only: [:create, :show]
    resources :favourites, only: [:create, :destroy]
    resources :projects, only: [:index, :show, :create, :destroy]
    resources :team_memberships, only: [:create, :destroy, :show]
    resources :teams, only: [:show]
  end
end
