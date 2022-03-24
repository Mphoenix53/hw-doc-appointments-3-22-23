Rails.application.routes.draw do

  namespace :api do
    get 'all_data', to:"appointments#all_data"
    resources :doctors
    resources :patients
    resources :appointments
  end

end
