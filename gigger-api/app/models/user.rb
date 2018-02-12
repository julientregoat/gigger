class User < ApplicationRecord
  has_many :gigs, :foreign_key => 'poster_id'
end
