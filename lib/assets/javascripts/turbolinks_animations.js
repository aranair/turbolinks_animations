$(document).on('page:fetch', function() {
  $('#content').fadeOut('slow')
})

$(document).on('page:restore', function() {
  $('#content').fadeIn('slow')
})
