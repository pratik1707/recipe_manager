class Addcolumn < ActiveRecord::Migration
  def self.up
    add_column :recipes, :user_id, :string
  end

  def self.down
  end
end
