$(function whenDomIsReady(){

  $('.the-list-of-videos .loading').show();

  setTimeout(function afterRetrievingVideos() {
    var videos = [{
      title: 'PSY - GANGNAM STYLE (강남스타일) M/V',
      src: 'https://www.youtube.com/embed/9bZkp7q19f0'
    }, {
      title: 'Justin Bieber - Baby ft. Ludacris',
      src: 'https://www.youtube.com/embed/kffacxfA7G4'
    }, {
      title: 'Charlie bit my finger - again !',
      src: 'https://www.youtube.com/embed/_OBlgSz8sSM'
    }];

    $('.the-list-of-videos .loading').hide();

    var videosHtml = _.reduce(videos, function(html, video){
      html += '<li class="video">' +
        '  <h2>' + video.title + '</h2>' +
        '  <iframe width="640" height="390" src="' + video.src + '" frameborder="0" allowfullscreen></iframe>' +
        '</li>';
      return html;
    }, '');

    $('.the-list-of-videos ul').replaceWith(videosHtml);

  }, 750); 
});
