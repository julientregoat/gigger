class CommentsController < ApplicationController

  def create
    new_comment = Comment.new(comment_params)
    if new_comment.save
      render json: new_comment, status: 201
    else
      render json: {message: "Something is wrong with your submitted comment."}, status: 400
    end
  end

  def destroy
    Comment.delete(params[:id])
    render json: {message: 'Comment deleted'}, status: 200
  end

  def update
    comment = Comment.find(params[:id])
    comment.update(content: params[:content])
    render json: comment, status: 200
  end

  private

  def comment_params
    params.require(:comment).permit(:gig_id, :user_id, :content)
  end

end
