class RemoveColumns < ActiveRecord::Migration
def self.up
  remove_column :recipes, :quantity
end

  def self.down
  end
end
