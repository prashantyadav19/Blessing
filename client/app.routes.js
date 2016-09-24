angular.module('blessing').config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/home");
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "components/home/home.html"
           /* resolve: {
                deps: ['uiLoad',
                    function( uiLoad ){
                        return uiLoad.load( ['components/home/home.controller.js'] );
                    }]
            }*/
             })
     /*   .state('user', {
            abstract:true,
            url: "/user"
             })
        .state('user.facebookLogin', {
            url: "/fblogin",
            template: "./components/user/login.html",
            controller: function($scope){
            }

        })
        .state('fblogin', {
            url: "/fb",
            template: "<login-signup></login-signup>"
        });*/


});






