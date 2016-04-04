jQuery(document).ready(function($){
    $('a[rel*=facebox]').facebox()
    
    jQuery("#displayedrecipes1").css("background-color", "rgb(252, 210, 175)").css("background-color", "rgb(252, 210, 175)")
    jQuery("#displayedrecipes2").css("background-color", "rgb(255, 210, 101)")
    jQuery("#displayedrecipes3").css("background-color", "rgb(255,255,0)")
    jQuery("#displayedrecipes4").css("background-color", "rgb(149, 228, 209)")
    jQuery("#displayedrecipes5").css("background-color", "rgb(31, 255, 40)")
    
})
function showHideDetails(item){
    var text = jQuery('#showdetails' + item).text();
    if (text == "Show Details") {
        jQuery('#details' + item).css('display', 'block')
        jQuery('#showdetails' + item).text("Hide Details");
    }
    else {
        jQuery('#details' + item).css('display', 'none')
        jQuery('#showdetails' + item).text("Show Details");
    }
}

function showEditDetails(item){
    var text = jQuery('#showeditdetails' + item).text();
    if (text == "Edit Details") {
        jQuery('#details_tobe_publish' + item).css('display', 'block')
        jQuery('#showeditdetails' + item).text("Hide Details");
    }
    else {
        jQuery('#details_tobe_publish' + item).css('display', 'none')
        jQuery('#showeditdetails' + item).text("Edit Details");
    }
}

function showUserRecipeDetails(item){
    var text = jQuery('#showUserRecipeDetails' + item).text();
    if (text == "Show Recipe Details") {
        jQuery('#userRecipeDetails' + item).css('display', 'block')
        jQuery('#showUserRecipeDetails' + item).text("Hide Recipe Details");
    }
    else {
        jQuery('#userRecipeDetails' + item).css('display', 'none')
        jQuery('#showUserRecipeDetails' + item).text("Show Recipe Details");
    }
}

//jQuery(document).live("click", "#add_New_User", function(){
jQuery("#add_New_User").click(function(){
    if (jQuery("#fullname_newuser").val() == "") {
        alert("Please Enter Full Name")
        return false
    }
    else 
        if (jQuery("#username_newuser").val() == "") {
            alert("Please Enter User Name")
            return false
        }
        else 
            if (jQuery("#password_newuser").val() == "") {
                alert("Please Enter Password")
                return false
            }
            else 
                if (jQuery("#password_newuser").val().length < 6) {
                    alert("Please Enter Password More than 6 characters")
                    return false
                }
                else 
                    if (jQuery("#usertype_newuser").val() == "") {
                        alert("Please Enter Usertype")
                        return false
                    }
                    else {
                        fullname = jQuery("#fullname_newuser").val();
                        username = jQuery("#username_newuser").val();
                        password = jQuery("#password_newuser").val();
                        usertype = jQuery("#usertype_newuser").val();
                        
                        var data = {
                            'fullname': fullname,
                            'username': username,
                            'usertype': usertype,
                            'password': password
                        }
                        
                        
                        jQuery.ajax({
                            url: "/save_user",
                            type: "post",
                            async: false,
                            data: data,
                            success: function(result){
                                $.facebox.close();
                                response_hash = eval(result)
                                if (response_hash.usertype == "creator") {
                                    inner_html = "<br><span style='color:#008B8B;font-style=bold;font-family:Brush Script MT;font-size:28px;'>" + response_hash.fullname + "</span><br>"
                                    jQuery("#containeradmin .left_container_admin").append(inner_html)
                                }
                            },
                            error: function(){
                            //alert("Please Enter Correct User Details")
                            }
                        });
                    }
    
});
function publishInMainPage(recipeid){
    var data = {
        'recipe_id': recipeid
    }
    jQuery.ajax({
        url: "/publishMain",
        type: "post",
        async: false,
        data: data,
        success: function(result){           
            jQuery("#publishInMainPage" + result).text("Displayed");
            jQuery("#publishInMainPage" + result).css("color", "green").attr("disabled", "disabled")
            
        },
        error: function(){
            //alert("Please Enter Correct User Details")
        }
    });
}

function addNewUser(){
    jQuery("#addNewUser").css('display', 'block')
}

function updatePublishRecipe(i, id, user_id){
    ingredient_new = [];
    quantity_new = []
    ingredient1 = jQuery('#ingredient1' + i).val();
    quantity1 = jQuery('#quantity1' + i).val();
    ingredient2 = jQuery('#ingredient2' + i).val();
    quantity2 = jQuery('#quantity2' + i).val();
    ingredient3 = jQuery('#ingredient3' + i).val();
    quantity3 = jQuery('#quantity3' + i).val();
    ingredient4 = jQuery('#ingredient4' + i).val();
    quantity4 = jQuery('#quantity4' + i).val();
    ingredient5 = jQuery('#ingredient5' + i).val();
    quantity5 = jQuery('#quantity5' + i).val();
    ingredient6 = jQuery('#ingredient6' + i).val();
    quantity6 = jQuery('#quantity6' + i).val();
    ingredient7 = jQuery('#ingredient7' + i).val();
    quantity7 = jQuery('#quantity7' + i).val();
    ingredient_new.push(ingredient1)
    quantity_new.push(quantity1)
    ingredient_new.push(ingredient2)
    quantity_new.push(quantity2)
    ingredient_new.push(ingredient3)
    quantity_new.push(quantity3)
    ingredient_new.push(ingredient4)
    quantity_new.push(quantity4)
    ingredient_new.push(ingredient5)
    quantity_new.push(quantity5)
    ingredient_new.push(ingredient6)
    quantity_new.push(quantity6)
    ingredient_new.push(ingredient7)
    quantity_new.push(quantity7)
    steps = jQuery('#steps' + i).val();
    var data = ({
        'ingredient': ingredient_new,
        'quantity': quantity_new,
        'recipe_id': id,
        'user_id': user_id,
        'steps': steps
    
    
    })
    jQuery.ajax({
        url: "/userinfo/update_recipes",
        type: "post",
        async: false,
        data: data,
        success: function(result){
            window.location.href = "/userinfo/dashboard2/" + result
        },
        error: function(){
            //alert("Please Enter Correct User Details")
        }
    });
    
}

