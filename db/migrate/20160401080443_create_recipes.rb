class CreateRecipes < ActiveRecord::Migration
  def self.up
    create_table :recipes do |t|
      t.string :ingredient
      t.string :quantity      
      t.string :publish_status
      t.timestamps
    end
  end

 
end
