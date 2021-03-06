Rails.application.routes.draw do
  root "teesh#index"
  get "/teesh", to: "teesh#index"
end
