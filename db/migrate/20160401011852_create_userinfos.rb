class CreateUserinfos < ActiveRecord::Migration
  def self.up
    create_table :userinfos do |t|
      t.string :username
      t.string :password
      t.string :usertype
      t.integer :recipe_id    
 
     # t.timestamps null: false
      t.timestamps
    end
  end

  def self.down
    drop_table :userinfos
  end
end
