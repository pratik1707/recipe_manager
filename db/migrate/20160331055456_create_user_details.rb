class CreateUserDetails < ActiveRecord::Migration


  def self.down
    drop_table :user_details
  end
end
