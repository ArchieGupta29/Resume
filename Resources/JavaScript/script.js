$(document).ready(function() {
    
//    $('.js--wp-1').waypoint(function(direction) {
//        $('.js--wp-1').addClass('animated fadeIn');
//    }, {
//        offset: '50%'
//    });
//    
//    $('.js--wp-2').waypoint(function(direction) {
//        $('.js--wp-2').addClass('animated fadeInUp');
//    }, {
//        offset: '50%'
//    });
//    
//    $('.js--wp-3').waypoint(function(direction) {
//        $('.js--wp-3').addClass('animated fadeIn');
//    }, {
//        offset: '20%'
//    });
//    
//    $('.js--wp-4').waypoint(function(direction) {
//        $('.js--wp-4').addClass('animated pulse');
//    }, {
//        offset: '20%'
//    });
    
    // hide our element on page load
  $('#exCA').css('opacity', 0);
 
  $('#exCA').waypoint(function() {
      $('#exCA').addClass('animate__fadeInRight');
  }, { offset: '50%' });
    
    $('#pL').css('opacity', 0);
 
  $('#pL').waypoint(function() {
      $('#pL').addClass('animate__fadeInLeft');
  }, { offset: '50%' });
    
    $('#Courses').css('opacity', 0);
 
  $('#Courses').waypoint(function() {
      $('#Courses').addClass('animate__fadeIn');
  }, { offset: '50%', opacity: '1' });
    
    $('#workex').css('opacity', 0);
    
    $('#workex').waypoint(function() {
      $('#workex').addClass('animate__fadeIn');
  }, { offset: '50%'});
    
    $('#edu-1').waypoint(function() {
      $('#edu-1').addClass('animate__pulse');
  }, { offset: '50%'});
    $('#edu-2').waypoint(function() {
      $('#edu-2').addClass('animate__pulse animate__delay-2s');
  }, { offset: '50%'});
    
    $('#edu-3').waypoint(function() {
      $('#edu-3').addClass('animate__pulse animate__delay-4s');
  }, { offset: '50%'});
    
//    $('#profile').css('opacity', 0);
    $('#profile').waypoint(function() {
      $('#profile').addClass('animate__zoomIn');
  }, { offset: '50%'});
    
    
})