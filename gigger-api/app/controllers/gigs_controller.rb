class GigsController < ApplicationController

  before_action :set_gig, only: [:show,:update,:destroy]

  def index
    if params[:search]
      query = params[:search].downcase
      gigs = Gig.where('lower(title) LIKE ?', "%#{query}%")
      render json: gigs, status: 200
    else
      gigs = Gig.all
      render json: gigs, status: 200
    end
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
    @gig.destroy
    render json: {message:"Zap! Gig deleted"}, status: 200
  end

  def show
    render json: @gig, status: 200
  end

  def by_user
    @gigs = Gig.all.select{|gig| gig.poster.id == params[:id].to_i}
    render json: @gigs, status: 200
  end

  private
  def gig_params
    params.require(:gig).permit(:title, :body, :poster_id, :tag_id)
  end

  def set_gig
    @gig = Gig.find(params[:id])
  end

end
