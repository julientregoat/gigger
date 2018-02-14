class CommentsController < ApplicationController

  def create
    new_comment = Comment.new(comment_params)
    if new_comment.save
      render json: new_comment, status: 201
    else
      render json: {message: "Something is wrong with your submitted comment."}, status: 400
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:gig_id, :user_id, :content)
  end

end
