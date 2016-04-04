class ChangeUser < ActiveRecord::Migration
  def change
       
  add_foreign_key :recipe_id

  end
end
