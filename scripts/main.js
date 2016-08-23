var app = angular.module('Todo', []);
app.controller('TodoCtrl', function($scope) {
  $scope.newTodo = '';

  $scope.todos = [
    'Learn Modules', 
    'Learn MVC',
    'Create Models',
    'Create Views',
    'Create Controllers',
    'Illustrate the use of Angular Views and Controllers'
  ];
  
  $scope.done = function(todo) {
    var indexOf = $scope.todos.indexOf(todo);
    if (indexOf !== -1) {
      $scope.todos.splice(indexOf, 1);
    }
  };
  
   $scope.add = function(e) {
    if (e.which && e.which === 13) {
      $scope.todos.push($scope.newTodo);
      $scope.newTodo = '';
    }
  };
});
