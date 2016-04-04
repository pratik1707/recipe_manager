class ChangeDataTypeForUsertype < ActiveRecord::Migration
def change
  reversible do |dir|
    change_table :userinfos do |t|
      dir.up   { t.change :usertype, :string }
        dir.down { t.change :usertype, :references }
    end
  end
 end

end
