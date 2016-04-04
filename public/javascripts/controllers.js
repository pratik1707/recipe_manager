var recipeManager = angular.module("recipeManager", []);
recipeManager.controller('logincontroller', function($scope, $http){
   	
    $scope.logincustomer = function(){
        
        var data = ({
            'username': $scope.username,
            'password': $scope.pass,
            'usertype': $scope.usertype
        })
		if (!($scope.username)) {
			alert("Please Enter UserName")
			return false
		}else if (!($scope.pass)) {
			alert("Please Enter Password")
			return false
		}else if (($scope.pass.length < 6)) {
			alert("Please Enter More Than 6 Characters for Password")
			return false
		}else if(!($scope.usertype)){
			alert("Please Enter Usertype")
		}
		else {			
			jQuery.ajax({
				url: "/userinfo/login_test",
				type: "post",
				async: false,
				data: data,
				success: function(result){					
					data = eval(result)
					id = data.id
					usertype = data.usertype
					
					if (usertype == "creator") {
						window.location.href = "/userinfo/dashboard1/" + id
					}
					else 
						if (usertype == "moderator") {
							window.location.href = "/userinfo/dashboard2/" + id
						}
						else 
							if (usertype == "admin") {
								window.location.href = "/admin/" + id
							}
				},
				error: function(){
					alert("Please Enter Correct User Details")
				}
				
			});
		}
    }
});
recipeManager.controller('recipeController', function($scope){
    //This will hide the DIV by default.
    $scope.IsVisible = false;
    $scope.buttonText = 'Add Recipe'
    $scope.ShowHide = function(){
        //If DIV is visible it will be hidden and vice versa.
        $scope.IsVisible = $scope.IsVisible ? false : true;
        $scope.buttonText = $scope.IsVisible ? 'Hide Recipe Form' : 'Add Recipe';
    }
    
    $scope.items = [];
    var i = 0;
    $scope.i = i;
    $scope.add = function(){
        i = i + 1;
        $scope.i = i;
        if (i <= 7) {
            $scope.items.push({
            
                ingredient: "",
                quantity: "",
                measurement: "",
                ingredienttype: ""
            });
        }
        else {
            alert("You can enter only 7 Ingredients")
        }
    };
	$scope.addrecipe = function(id){
		var ingredient=[];
		var quantity=[];
		
		for(i=0;i<$scope.items.length ; i++){
			ingredient.push($scope.items[i].ingredient)
			quantity.push($scope.items[i].quantity)			
		}
		
		var steps=$scope.items.stepstoprepare
		
		var data = ({
            'ingredient': ingredient,
            'quantity': quantity,
			'user_id' : id,
			'recipe_name' : $scope.recipe_name ,
			'steps' : steps     
        })
	     jQuery.ajax({
            url: "/userinfo/save_recipes",
            type: "post",
            async: false,
            data: data,
            success: function(result){
               window.location.href = "/userinfo/dashboard1/" + result
            },
            error: function(){
                //alert("Please Enter Correct User Details")
            }
        });
	}
	/*$scope.showHideFlag1 = false;
	$scope.showHideFlag2 = false;
    $scope.linkText1 = 'Show Details'
	$scope.linkText2 = 'Show Details'
    $scope.showHideDetails = function(itemno){
        //If DIV is visible it will be hidden and vice versa.
        $scope.showHideFlag = $scope.showHideFlag ? false : true;
        $scope.linkText = $scope.showHideFlag ? 'Hide Details' : 'Show Details';
    }*/
});



