class Dropunusedtables < ActiveRecord::Migration
  def self.up
    drop_table :userinformations
    drop_table :userinfos
  end

  def self.down
  end
end
