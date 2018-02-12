class Gig < ApplicationRecord
  belongs_to :poster, :class_name => "User", :foreign_key => "poster_id"
  belongs_to :tag
end
