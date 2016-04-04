class Userinformation < ActiveRecord::Base
  has_many :recipes, :foreign_key=>"recipe_id"
end
