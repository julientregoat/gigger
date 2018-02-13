class GigSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :created_at

  belongs_to :tag
  belongs_to :poster
  has_many :comments

end
