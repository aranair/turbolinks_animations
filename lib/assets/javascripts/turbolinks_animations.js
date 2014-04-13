jQuery.fn.extend({
  slideRightShow: function() {
    return this.each(function() {
      $(this).show('slide', {direction: 'right'}, 500);
    });
  },
  slideLeftHide: function() {
    return this.each(function() {
      $(this).hide('slide', {direction: 'left'}, 500);
    });
  },
  slideRightHide: function() {
    return this.each(function() {
      $(this).hide('slide', {direction: 'right'}, 500);
    });
  },
  slideLeftShow: function() {
    return this.each(function() {
      $(this).show('slide', {direction: 'left'}, 500);
    });
  }
});

$(document).on('page:fetch', function() {
  var turbolinkContent = $('.js-turbolink-content');
  turbolinkContent.each(function(index) {
    var animationType = $(this).data('animation')
    switch (animationType) {
      case 'slide-right':
        $(this).slideRightHide(); break;
      case 'slide-left':
        $(this).slideLeftHide(); break;
      default:
        $(this).fadeOut('slow'); 
    }
  });
});

$(document).on('page:restore', function() {
  var turbolinkContent = $('.js-turbolink-content');
  turbolinkContent.each(function(index) {
    var animationType = $(this).data('animation')
    switch (animationType) {
      case 'slide-right':
        $(this).slideLeftShow(); break;
      case 'slide-left':
        $(this).slideRightShow(); break;
      default:
        $(this).fadeIn('slow'); 
    }
  });
});
