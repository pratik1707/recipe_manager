class Addcol < ActiveRecord::Migration
  def self.up
    add_column :recipes, :recipe_name, :string
  end

  def self.down
  end
end
