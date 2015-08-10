angular.module('brushfire_videosPage', [])
.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    '*://www.youtube.com/**'
  ]);
});

angular.module('brushfire_videosPage').controller('PageCtrl', [
            '$scope', '$timeout',
  function ( $scope ,  $timeout ){

    /////////////////////////////////////////////////////////////////////////////
    // Immediately start fetching list of videos from the server.
    /////////////////////////////////////////////////////////////////////////////

    // First, show a loading spinner
    $scope.videosLoading = true;

    // Then simulate a delay
    // (TODO: actually fetch videos from server instead of pretending)
    $timeout(function afterRetrievingVideos (){

      // TODO: handle error state from the server

      // Fake data (TODO: use the real data from the server instead of pretending)
      var _videos = [{
        title: 'PSY - GANGNAM STYLE (강남스타일) M/V',
        src: 'https://www.youtube.com/embed/9bZkp7q19f0'
      }, {
        title: 'Justin Bieber - Baby ft. Ludacris',
        src: 'https://www.youtube.com/embed/kffacxfA7G4'
      }, {
        title: 'Charlie bit my finger - again !',
        src: 'https://www.youtube.com/embed/_OBlgSz8sSM'
      }];

      // Hide the loading spinner:
      $scope.videosLoading = false;

      // Stick the videos into the DOM
      $scope.videos = _videos;

    }, 750);
  }
]);