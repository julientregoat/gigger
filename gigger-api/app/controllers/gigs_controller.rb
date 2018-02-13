class GigsController < ApplicationController

  before_action :set_gig, only: [:show,:update,:destroy]

  def index
    gigs = Gig.all
    render json: gigs, status: 200
  end

  def create
    gig = Gig.create(gig_params)
    render json: gig, status: 201
  end

  def update
    @gig.update(gig_params)
    render json: @gig, status: 200
  end

  def destroy
    gigId = @gig.id
    @gig.destroy
    render json: {message:"Zap! Gig deleted", gigId:gigId}
  end

  def show
    render json: @gig, status: 200
  end

  private
  def gig_params
    params.permit(:title, :body, :poster_id, :tag_id)
  end

  def set_gig
    @gig = Gig.find(params[:id])
  end

end
