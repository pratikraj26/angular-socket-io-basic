app

.controller('MainCtrl', function($scope, socket) {
  socket.on('connect', function(data) {
    socket.emit('join', 'Hello World from client');
  });
  socket.on('joinConfirm', function(data){
    console.log(data);
  });
})

.controller('IndexCtrl', function($scope, socket) {
  console.log("This is an IndexCtrl");
  $scope.page = "Index";
})

.controller('LoginCtrl', function($scope, socket) {
  console.log("This is a LoginCtrl");
  $scope.page = "Login";
})

;
