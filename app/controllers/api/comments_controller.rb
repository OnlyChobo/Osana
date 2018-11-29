class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def index
    comments = Task.find(comment_params[:task_id]).comments
    @comments = comments.offset(comment_params[:comments_count].to_i).limit(10).order("created_at desc")
  end

  private
  def comment_params
    params.require(:comment).permit(:task_id, :user_id, :body, :comments_count)
  end
end
