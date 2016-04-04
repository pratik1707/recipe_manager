class UserInfoController < ApplicationController
  before_filter :require_login, :except => [:index, :login_test, :save_recipes , :update_recipes]  
  def index  
    #For Displaying all the Eligible Recipes on Main Page.
    @recipes=Recipe.where(:publish_status=>"Display").order("updated_at DESC").take(5)   
  end
  
  def require_login
    puts cookies[:remember_me]
    puts params[:id]
    if cookies[:remember_me]==nil || cookies[:remember_me]!=params[:id]
      redirect_to "/userinfo/"
    end
  end
  
  def login_test
    #This is for Opening the login page.    
    username=params[:username] ? params[:username] : ""
    password=params[:password] ? params[:password] : ""
    usertype=params[:usertype] ? params[:usertype].downcase : ""    
    users=User.all
    #Exception block starts here
    begin      
      login_confirm = User.where("username = ? AND password = ? AND usertype=?", username, password,usertype)    
      user_id=login_confirm.last.id
      cookies[:remember_me] =user_id   
      user_hash={'id' => user_id, 'usertype' => usertype}    
      respond_to do |format|      
        if login_confirm.length>0 && login_confirm!=nil && login_confirm!=""        
          if usertype.eql?("creator")          
            format.json{render :json=>user_hash}
          elsif usertype.eql?("moderator")
            format.json{render :json=>user_hash}
          elsif usertype.eql?("admin")
            format.json{render :json=>user_hash}
          end
        end
      end
    rescue
      render :json=>"Exception"
      
    end #Exception Block ends here.
  end
  
  def dashboard1
    #Creator Dashboard
    @id=params[:id] ? params[:id] : 0    
    @recipes_info=Recipe.where("user_id = ?", @id)     
    
  end
  
  def dashboard2
    #dashboard for Moderator
    @moderator_id=params[:id] ? params[:id] : 0
    @recipes_info_publish=Recipe.where("publish_status = ?", "No Published")
  end
  
  def save_recipes 
    #Saving the New Recipe
    @ingredient=params[:ingredient] ? params[:ingredient] : Array.new
    @quantity=params[:quantity] ? params[:quantity] : Array.new
    @user_id=params[:user_id] ? params[:user_id] : 0
    @recipe_name=params[:recipe_name] ? params[:recipe_name] : ""
    @steps=params[:steps] ? params[:steps] : ""    
    ingre_quan=Array.new
    @ingredient.length.times do |x|
      ingre_quan.push(@ingredient[x] + "|" + @quantity[x])
    end   
    recipe=Recipe.create("ingredient1"=>ingre_quan[0],"ingredient2"=>ingre_quan[1],"ingredient3"=>ingre_quan[2],"ingredient4"=>ingre_quan[3],"ingredient5"=>ingre_quan[4],"ingredient6"=>ingre_quan[5],"ingredient7"=>ingre_quan[6],"recipe_name"=>@recipe_name,"publish_status"=>"No Published","user_id"=>@user_id, "steps"=>@steps)
    respond_to do |format|
      format.json{render :json=>@user_id}
    end
  end
  
  def update_recipes
    #Updating the recipe
    @ingredient_edited=params[:ingredient] ? params[:ingredient] : Array.new
    @quantity_edited=params[:quantity] ? params[:quantity] : Array.new   
    @recipe_id=params[:recipe_id] ? params[:recipe_id] : ""
    @user_id=params[:user_id] ? params[:user_id] : 0
    @steps=params[:steps] ? params[:steps] : ""
    ingre_quan=Array.new
    @ingredient_edited.length.times do |x|
      ingre_quan.push(@ingredient_edited[x] + "|" + @quantity_edited[x])
    end
    recipe_find=Recipe.where("id = ?" ,@recipe_id)      
    recipe_find.update_all("ingredient1"=>ingre_quan[0],"ingredient2"=>ingre_quan[1],"ingredient3"=>ingre_quan[2],"ingredient4"=>ingre_quan[3],"ingredient5"=>ingre_quan[4],"ingredient6"=>ingre_quan[5],"ingredient7"=>ingre_quan[6],"publish_status"=>"Published", "steps"=>@steps)
    respond_to do |format|
      format.json{render :json=>@user_id}      
    end
  end
end
