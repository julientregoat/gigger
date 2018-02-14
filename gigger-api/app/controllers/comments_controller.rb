class CommentsController < ApplicationController

  def create
    new_comment = Comment.new(comment_params)
    if new_comment.save
      byebug
    else
      byebug
      render json: {message: "Something is wrong with your submitted content. Check that you're logged in."}
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:gig_id, :user_id, :content)
  end

end
