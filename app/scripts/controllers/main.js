'use strict';

function MainCtrl($scope, localStorageService) {
  var todosInStore = localStorageService.get('todos');
  
  $scope.todos = todosInStore && todosInStore.split('\n') || [];

  $scope.$watch('todos', function () {
    localStorageService.add('todos', $scope.todos.join('\n'));
  }, true);

  //$scope.todos = [];

  $scope.addTodo = function () {
    $scope.todos.push($scope.todo);
    $scope.todo = '';
  };

  $scope.removeTodo = function (index) {
    $scope.todos.splice(index, 1);
  };
}
MainCtrl.$inject = ['$scope'];
angular.module('todoApp').controller('MainCtrl', ['$scope', 'localStorageService', MainCtrl]);


