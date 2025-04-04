require "sidekiq/web"

Rails.application.routes.draw do
  mount Sidekiq::Web => "/sidekiq"

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  get "/auth/slack", to: "sessions#new", as: :slack_auth
  get "/auth/slack/callback", to: "sessions#create"
  delete "/signout", to: "sessions#destroy", as: "signout"

  resource :room do
    post "leave", to: "rooms#leave"
    post "tour/end", to: "rooms#end_tour"
    post "tour/restart", to: "rooms#restart_tour"
    get "coding-activity/refresh", to: "rooms#refresh_coding_activity"
    get "timer/refresh", to: "rooms#refresh_timer"
    post "screenshot", to: "rooms#screenshot"
    get "user-video", to: "rooms#user_video"
  end

  post "schedule", to: "user_schedule#create"

  post "twilio/holler-answered", to: "users#holler_answered"

  get "screenshots", to: "screenshots#index"
  get "/screenshots/:id", to: "screenshots#show"

  root to: "home#index"
  post "/confetti", to: "home#confetti"
end
