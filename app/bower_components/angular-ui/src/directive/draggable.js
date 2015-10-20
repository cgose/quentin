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