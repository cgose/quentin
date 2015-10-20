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