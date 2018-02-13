class GigSerializer < ActiveModel::Serializer
  attributes :id, :title, :body

  belongs_to :tag
  belongs_to :poster

end
