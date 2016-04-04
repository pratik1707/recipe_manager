class AdminController < ApplicationController
  before_filter :require_login, :except=> [:save_user, :newuser, :publishMain]
  def index
    #For Opening the admin Dashboard
User.create(:id=>7, :fullname=>"Rajan", :username=>"rajan15", :password=>"rajan15")   
    @id=params[:id] ? params[:id] :0
    @users=User.all        
  end
  def require_login
    #Remember me 
    if cookies[:remember_me]==nil || cookies[:remember_me]!=params[:id]
      redirect_to "/userinfo/"
    end
  end
  def mydashboard
    @id=params[:id] ? params[:id] :0
  end
  def newuser
    #This method is for opening the new user form.
  end
  def save_user
    #This is for saving new user
    @username=params[:username] ? params[:username] : Array.new
    @password=params[:password] ? params[:password] : Array.new  
    @fullname=params[:fullname] ? params[:fullname] : ""
    @usertype=params[:usertype] ? params[:usertype] : ""
    user=User.create(:username=> @username, :password=>@password, :usertype=>@usertype, :usertype=>@usertype, :fullname=>@fullname)
    response_hash={:username=>@username, :password=>@password, :fullname=>@fullname, :usertype=>@usertype}
    render :json=>response_hash
  end
  def publishMain
    recipe_id=params[:recipe_id] ? params[:recipe_id] : 0
    recipe=Recipe.where(:id=>recipe_id).update_all(:publish_status => "Display")
    render :json=>recipe_id
  end
end
