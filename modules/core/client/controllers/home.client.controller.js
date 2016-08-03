'use strict';

angular.module('core')
   .controller('HomeController', ['$scope', 'Authentication', '$timeout', '$location', '$anchorScroll',
    function ($scope, Authentication, $timeout, $location, $anchorScroll) {
        
        
      $scope.gotoIphone = function() {
        $location.hash('IphoneAnchor');
        $anchorScroll();
      };
        
    // This provides Authentication context.
      $scope.authentication = Authentication;
  
//      var vid = document.getElementById('my-video');
//      var pauseButton = document.querySelector('#polina button');
//
//      function vidFade() {
//        vid.classList.add('stopfade');
//      }
//
//      vid.addEventListener('ended', function()
//    {
//            // only functional if "loop" is removed 
//        vid.pause();
//            // to capture IE10
//        vidFade();
//      }); 
//
//
//      pauseButton.addEventListener('click', function() {
//        vid.classList.toggle('stopfade');
//        if (vid.paused) {
//          vid.play();
//          pauseButton.innerHTML = 'Pause';
//        } else {
//          vid.pause();
//          pauseButton.innerHTML = 'Paused';
//        }
//      });

/*random card number */
     
      $scope.rndCard = 0;
      (function update() {
        $timeout(update, 1000 * 3);
        $scope.rndCard = Math.round((Math.random() * 1000000) * 1000000);
      }());
      
    
   /*scroll */                                                  
 
      
    }]);

//
//.config(['snSkrollrProvider', function(snSkrollrProvider) {
//      snSkrollrProvider.config = { smoothScrolling: true };
//    }]).run(['snSkrollr', function(snSkrollr) {
//      snSkrollr.init();
//    }]);
//    
    
//    
//    'sn.skrollr',
//    .config(['snSkrollrProvider', function(snSkrollrProvider) {
//      snSkrollrProvider.config = { smoothScrolling: true };
//    }]).run(['snSkrollr', function(snSkrollr) {
//      snSkrollr.init();
//    }]);






