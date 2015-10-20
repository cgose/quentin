(function(angular){
var module = angular.module('angularUI', []);
module.directive('uiDraggable', function(){
  return {
    restrict: "A",  
    scope: {
      'onDragStart': '=',
      'onDragMove': '=',
      'onDragStop':   '=',
      'containment': '@',
      'position': '='
    },
    link: function(scope, element, attrs){
      element.draggable({
        start: scope.onDragStart,
        drag: scope.onDragMove,
        containment: scope.containment || 'parent'
      });

      if(scope.position){
        element.on('dragstop', function(evt, ui){
          scope.position = ui.position;
          scope.$apply();
        });
      }else{
        element.on('dragstop', scope.onDragStop);
      }
    }
  }
});
module.directive('uiResizable', function(){
  return {
    restrict: "A",  
    scope: {
      'onResizeStart': '=',
      'onResizeMove': '=',
      'onResizeStop':   '=',
      'fixedRatio': '@',
      'containment': '@',
      'size': '='
    },
    link: function(scope, element, attrs){
      element.resizable({
        start: scope.onResizeStart,
        resize: scope.onResizeMove,
        stop: scope.onResizeStop,
        aspectRatio: scope.fixedRatio || false,
        containment: scope.containment || 'parent'
      }); 

      if(scope.size){
        element.on('resizestop', function(evt, ui){
          scope.size = ui.size;
          scope.$apply();
        });
      }else{
        element.on('resizestop', scope.onResizeStop);
      }

      
    }
  }
});
return module;
})(angular);