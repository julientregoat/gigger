class User < ApplicationRecord
  has_many :gigs, :foreign_key => 'poster_id'
  has_many :comments
end
