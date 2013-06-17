require 'sinatra'

module KnockoutShowcase
  class App < Sinatra::Base
    get "/products/:version" do
      erb params[:version].to_sym
    end
  end
end
