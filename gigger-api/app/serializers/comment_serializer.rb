class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :user, :created_at

  belongs_to :gig
  belongs_to :user

end
