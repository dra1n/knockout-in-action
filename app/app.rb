require 'sinatra'
require 'sinatra/content_for'

module KnockoutShowcase
  class App < Sinatra::Base
    set :public_folder, 'public'

    helpers Sinatra::ContentFor

    get "/products/:framework" do
      erb :"/#{params[:framework]}"
    end

    post "/products/:framework" do
      status 200
    end
  end
end
