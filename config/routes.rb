Rails.application.routes.draw do
  root 'components#index'

  namespace :api, constraints: { format: 'json' }  do
    resources :posts, only: :index
  end

end
