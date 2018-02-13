class CommentsController < ApplicationController

  def index
    comments = Comment.all.select{|comment| comment.gig.id == params[:id]}
    render json: comments, status: 200
  end

end
