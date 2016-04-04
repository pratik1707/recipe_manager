module UserInfoHelper
  def get_recipe_and_quantity(recipe_ingredient)
  recipe_and_quantity=recipe_ingredient.split("|")[0] + "-- "+recipe_ingredient.split("|")[1]
  return recipe_and_quantity
end
def get_ingredient(ingredient)
  ingredient.split('|')[0]
end
def get_quantity(ingredient)
 ingredient.split('|')[1]
end
end
