angular.module("myApp")
	.controller("HomeCtrl", ["$css", "HomeService", function($css, HomeService) {
		var that = this;
		$css.add("./css/home01.css");	
		HomeService.getHomeData()
			.success(function (rt) {
				console.log(rt);
				that.rt=rt;
				HomeService.setPhoneArr(rt);
			});
			$(window).scroll(function () {
				console.log($(window).scrollTop());
				if($(window).scrollTop() >= 50){
					$(".home_header").css({"top":"0"});
				}
				
			});

	
//		that.items =
	}])
	.controller("Home01Ctrl",["$css","$routeParams", "HomeService",function($css,$routeParams, HomeService){
		var that = this;
		$css.add("./css/home01.css");
		that.Id = $routeParams.productId;
		console.log(that.Id);
//		HomeService.
//		初始化home01轮播图
		var mySwiper = new Swiper(".swiper-container",{
	        direction:"horizontal",/*横向滑动*/  
	        pagination:".swiper-pagination",/*分页器*/  
	        autoplay:3000/*每隔3秒自动播放*/  
   		})
	
	}])
//	广场轮播图
	.controller("GuangchangCtrl", ["$css",function($css){
		var that = this;
		$css.add("./css/guangchang.css");
		var mySwiper = new Swiper(".swiper-container",{
        direction:"horizontal",/*横向滑动*/  
        pagination:".swiper-pagination",/*分页器*/  
        autoplay:3000/*每隔3秒自动播放*/  
    })  

	}])
	.controller("MarketCtrl", ["$css", function($css) {
		var that = this;
		$css.add("./css/market.css");
	}])
	.controller("MineCtrl", ["$css", function($css) {
		var that = this;
		$css.add("./css/mine.css");
	}]);
	
//
//················································································
//
//angular.module('myApp')
//.factory("BooksDataService", ["$http", function ($http) {
//		var booksData;
//		return {
//			getBooksData: function () {
//				return $http.get("msg.json");
//			},
//			setBooksData : function (booksArr) {
//				booksData = booksArr;
//			},
//			getDetailsInfo: function (id) {
//				for(var bookObj of booksData) {
//					// == 和 === 的问题，
//					if (bookObj.bookId == id) {
//						return bookObj;
//					}
//				}
//			}
//		};
//		
//	}])







//.controller("HomeCtrl", ["$http", "$css", "BooksDataService", function ($http, $css, BooksDataService) {
//		var self = this;
//		$css.add("./css/home.css");
//		
//		
//		//分类面板打开关闭功能
//		self.isSortPanelClose = true;
//		self.sortPanelSwitch = function () {
//			self.isSortPanelClose = !self.isSortPanelClose;
//		};
//		
//		BooksDataService.getBooksData()
//						.success(function (result)　{
//							self.booksData = result;
//							BooksDataService.setBooksData(result);
//						});
//	
//
//	}])