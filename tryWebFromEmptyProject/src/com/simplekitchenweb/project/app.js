var myApp = angular.module('myApp', ['ngMessages']);

myApp.controller('mainController', function ($scope, $filter, $timeout, $log){

});

myApp.controller('sixthLessonController', function ($scope, $filter, $timeout, $log){
    var request = new XMLHttpRequest();

    request.onreadystatechange = function(){
        $scope.$apply(function(){
            if (request.readyState === 4 && request.status === 200) {
                $scope.items = JSON.parse(request.responseText);
                console.log($scope.items)
            }});
    };

    request.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    request.send();
});

myApp.controller('fifthLessonController', function ($scope, $filter, $timeout, $log){
    $scope.handle = "";
    $scope.charactersCount = 5;
    $scope.rules = [
        {ruleName: 'First'},
        {ruleName: 'Second'},
        {ruleName: 'Third'}
    ]

    $scope.lowerCaseHandle = function () {
        return $filter('lowercase')($scope.handle);
    };

});

myApp.controller('fourLessonController', function ($scope, $filter, $timeout, $log){
    $scope.handle = "";
    $scope.lowerCaseHandle = function () {
        return $filter('lowercase')($scope.handle);
    };

    $scope.title = 'Four lesson'
    $scope.name = 'Alex';
    $scope.surname = 'Glover'
    $scope.company = 'Oracle';

    $timeout(function (){$scope.company = 'Microsoft';}, 3000);
});

myApp.controller('coolFieldController', function ($scope, $log, $filter){
    $scope.thisIsTitle = "Third lesson"
});