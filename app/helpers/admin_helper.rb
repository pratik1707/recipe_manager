module AdminHelper
  def get_recipe_and_quantity(recipe_ingredient)
    recipe_and_quantity=recipe_ingredient.split("|")[0] + "-- "+recipe_ingredient.split("|")[1]
    return recipe_and_quantity
  end
end
