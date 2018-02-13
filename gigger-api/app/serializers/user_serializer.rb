class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email
  # has_many :gigs
  # do i need to alias the user and if so how
end
