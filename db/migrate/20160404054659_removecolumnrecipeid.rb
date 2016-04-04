class Removecolumnrecipeid < ActiveRecord::Migration
  def self.up
    remove_column :users, :recipe_id
  end

  def self.down
  end
end
