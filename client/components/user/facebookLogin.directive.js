angular.module('blessing')
    .directive('loginSignup', function(){
        return{
            restrict:'EA',
            templateUrl: 'components/user/facebookLogin.html',
            controller:['$scope',function($scope){
                console.log('hello');
            }]
        }
    });

