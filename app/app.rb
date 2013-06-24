require 'sinatra'
require 'sinatra/content_for'

module KnockoutShowcase
  class App < Sinatra::Base
    set :public_folder, 'public'

    helpers Sinatra::ContentFor

    get "/products/:version/:framework" do
      erb :"#{params[:version]}/#{params[:framework]}"
    end
  end
end
