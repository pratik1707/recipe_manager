class CreateUserinformations < ActiveRecord::Migration
  def self.up
    create_table :userinformations do |t|

      t.string :username
      t.string :password
      t.string :usertype
      t.integer :recipe_id  
      t.timestamps
    end
  
  end

 
end
