class GigSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :poster_id

  belongs_to :tag
  belongs_to :poster
end
