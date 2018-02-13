class CreateGigs < ActiveRecord::Migration[5.1]
  def change
    create_table :gigs do |t|
      t.string :title
      t.string :body
      t.integer :poster_id
      t.integer :tag_id
      t.timestamps
    end
  end
end
