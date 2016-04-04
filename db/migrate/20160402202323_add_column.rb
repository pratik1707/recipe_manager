class AddColumn < ActiveRecord::Migration
 def self.up
  add_column :recipes, :ingredient1, :string
  add_column :recipes, :ingredient2, :string
  add_column :recipes, :ingredient3, :string
  add_column :recipes, :ingredient4, :string
  add_column :recipes, :ingredient5, :string
  add_column :recipes, :ingredient6, :string
  add_column :recipes, :ingredient7, :string
end

  def self.down
  end
end
