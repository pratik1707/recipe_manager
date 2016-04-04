class Removecolu < ActiveRecord::Migration
  def self.up
    remove_column :recipes, :ingredient
  end

  def self.down
  end
end
