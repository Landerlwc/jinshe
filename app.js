angular.module("myApp", ["ui.router", "angularCSS"])
	.run(['$window', '$rootScope' , function ($window, $rootScope) {
		//$window 相当于原生的window对象
		//$rootScope 全局作用域，用于存储全局变量，在任何地方都可以使用
		/*
		 * $rootScope.$on 可以监听一些事件，在这里监听的是浏览器地址的变化
		 * $locationChangeSuccess 浏览器地址变化成功后处理的逻辑
		 */
		$rootScope.$on('$locationChangeSuccess', function () {
			//如果浏览器地址包含 market（闪送超市）那么就隐藏footer
			if ($window.location.href.indexOf('some01') != -1) {
				$rootScope.rootIsFooterShow = false;
			} else {
				$rootScope.rootIsFooterShow = true;
			}
		});
	}])	
	.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider) {
		$stateProvider
			.state("home", {
				url:"/home",
				templateUrl: "./view/home.html",
				controller: "HomeCtrl as homeCtrl"
			})
			.state("/home01",{
				url: "/some/:productId",
				templateUrl: "./view/home01.html",
				controller: "HomeCtrl as homeCtrl"
			})
			.state("guangchang", {
				url:"/guangchang",
				templateUrl: "./view/guangchang.html",
				controller: "GuangchangCtrl as guangchangCtrl"
			})
			.state("guangchang.Page1",{
				url:"/guangchangPage1",
				templateUrl:"./view/guangchangPage1.html"
				
			})
			.state("market", {
				url:"/market",
				templateUrl: "./view/market.html",
				controller: "MarketCtrl as marketCtrl"
			})
			.state("mine", {
				url:"/mine",
				templateUrl: "./view/mine.html",
				controller: "MineCtrl as mineCtrl"
			})
			$urlRouterProvider.otherwise(
			"/home"
			)
	}]);