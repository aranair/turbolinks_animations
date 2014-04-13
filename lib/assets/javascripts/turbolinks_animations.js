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
  var animationType = turbolinkContent.data('animation')
  console.log(animationType);
  switch (animationType) {
    case 'slide-right':
      turbolinkContent.slideRightHide(); break;
    case 'slide-left':
      turbolinkContent.slideLeftHide(); break;
    default:
      turbolinkContent.fadeOut('slow'); 
  }
});

$(document).on('page:restore', function() {
  var turbolinkContent = $('.js-turbolink-content');
  var animationType = turbolinkContent.data('animation')
  console.log(animationType);
  switch (animationType) {
    case 'slide-right':
      turbolinkContent.slideLeftShow(); break;
    case 'slide-left':
      turbolinkContent.slideRightShow(); break;
    default:
      turbolinkContent.fadeIn('slow'); 
  }
});
