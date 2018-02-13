class TagsController < ApplicationController

  def index
    tags = Tag.all
    render json: tags, status: 200
  end

end

# i'm not sure i need this
