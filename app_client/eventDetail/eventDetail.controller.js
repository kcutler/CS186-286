(function () {
    
    angular.module('myApp').controller('EventDetailController', EventDetailController);
        
    //EventDetailController.$inject = ['$routeParams', '$modal', "$http"]; 
    function EventDetailController ($http, $routeParams, $scope) {
        var vm = this; 
        
        //Kristen - for testing
        vm.name = 'Kc';
        
        //array to save data from get response
        $scope.resultArr = [];
    
        //KC - variable to access through html file
        vm.eventidloc = $routeParams.eventid;
       
        //KC - variable to pass through get request 
        var eventid = $routeParams.eventid; 

        //KC - changed success to then 
        //KC - changed data to response
        //KC - changed route to events/:eventid
        $http.get('/api/events/' + eventid).then(function(response) { 
            $scope.oneEvent = response.data; 
        });
        
        //Creates an array to store comments, the array is called
        $scope.eventComments = [];
        //Gets the comments in the DB and displays them on the page
        $http.get('/api/viewevent/' + $routeParams.eventid + '/comments').then(function(response){
            $scope.eventComments = response.data; 
        });
        $scope.addComment = function() {
            //read data from form 
            var commentData = {
                author: $scope.author, 
                body: $scope.body, 
                created: Date.now(),
            };
            $http.post('/api/viewevent/' + $routeParams.eventid + '/comments', commentData).then(function(response){
                angular.forEach($scope.getResponse,function(value,index){
                  $scope.eventComments.push(value);
              })
            });
        };
      }
})();