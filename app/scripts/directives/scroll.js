'use strict';

angular.module( 'scrollEventApp' )
  .directive( 'catchScroll', function () {
      var left_pos = 0;

      return {
            restrict : 'A',
            link : function ( scope, element, attrs ){
                  var $window = $( window );

                  $window.bind( 'scroll', function ( e ){
                        left_pos = $window.scrollLeft();

                        if( left_pos < 0 || scope.left_pos == left_pos || scope.hover_try ) return;

                        scope.$apply( function (){
                              scope.left_pos = left_pos;
                              scope.top_pos  = $window.scrollTop();
                              scope.try_opa  = ( 167 - scope.left_pos  ) / 167;
                        });
                  });
            }
      };
  });
