class Addcolumnsteps < ActiveRecord::Migration
  def self.up
    add_column :recipes, :steps, :string
  end

  def self.down
  end
end
