class Addcolumnfullname < ActiveRecord::Migration
  def self.up
    add_column :users, :fullname, :string
  end

  def self.down
  end
end
