require 'sinatra'

module KnockoutShowcase
  class App < Sinatra::Base
    set :public_folder, 'public'

    get "/products/:version/:framework" do
      erb :"#{params[:version]}/#{params[:framework]}"
    end
  end
end
