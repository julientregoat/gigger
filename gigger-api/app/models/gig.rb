class Gig < ApplicationRecord
  belongs_to :poster, :class_name => "User", :foreign_key => "poster_id"
  belongs_to :tag
  has_many :comments

  validates :title, presence: true
  validates :body, presence: true
  validates :poster, presence: true
end
