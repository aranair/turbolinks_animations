jQuery.fn.extend({
  slideRightShow: function(duration) {
    return this.each(function() {
      $(this).show('slide', {direction: 'right'}, duration);
    });
  },
  slideLeftHide: function(duration) {
    return this.each(function() {
      $(this).hide('slide', {direction: 'left'}, duration);
    });
  },
  slideRightHide: function(duration) {
    return this.each(function() {
      $(this).hide('slide', {direction: 'right'}, duration);
    });
  },
  slideLeftShow: function(duration) {
    return this.each(function() {
      $(this).show('slide', {direction: 'left'}, duration);
    });
  }
});

$(document).on('page:fetch', function() {
  var turbolinkContent = $('.js-turbolink-content');
  turbolinkContent.each(function(index) {
    var animationType = $(this).data('animation')
    var duration = parseInt($(this).data('duration')) || 300;
    switch (animationType) {
      case 'slide-right':
        $(this).slideRightHide(duration); break;
      case 'slide-left':
        $(this).slideLeftHide(duration); break;
      default:
        $(this).fadeOut('slow'); 
    }
  });
});

$(document).on('page:restore', function() {
  var turbolinkContent = $('.js-turbolink-content');
  turbolinkContent.each(function(index) {
    var animationType = $(this).data('animation')
    var duration = parseInt($(this).data('duration')) || 300;
    switch (animationType) {
      case 'slide-right':
        $(this).slideLeftShow(duration); break;
      case 'slide-left':
        $(this).slideRightShow(duration); break;
      default:
        $(this).fadeIn('slow'); 
    }
  });
});
