angular.module('myApp')
	.factory("HomeService",["$http",function($http){
		var PhoneArr = [];
		return {
			getHomeData : function(){
				return $http.get("classData.json");
			},
			setPhoneArr: function (arr) {
				PhoneArr = arr;
			},
//			getPhoneArr = function () {
//				return PhoneArr;
//			}
		}
	}])


