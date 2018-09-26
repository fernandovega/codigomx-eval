(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.modal').modal();

    $('.responses-btn').click(function () {
      var id = $(this).attr('data-pk');
      var username = $(this).attr('data-username');
      $('#submit-response').attr('data-pk', id);

      $('.modal').modal('open');
      
      $.ajax({
        url: '/response/list?postId='+id,
        success: function (response) {
          $('#response-list').html(response);
          $('#response-loading').hide();
        }
      });

    });

    $('#submit-response').click(function () {
      var id = $(this).attr('data-pk');
      var content = $('#response-content').val();
      var count = parseInt($('#responses-count-' + id).html());
      
      $.ajax({
        url: '/response/add',
        method: 'POST',
        data: { postId: id, responseContent: content },
        success: function (response) {
          $('#response-list').prepend(response);
          $('#response-content').val("");
          $('#responses-count-'+id).html(count+1)
        }
      }); 

      return false;
    });

    $('#response-list').on("click", ".delete-response", function () {
      var id = $(this).attr('data-pk');
      var post = $(this).attr('data-post');
      var parent = $(this).parent();
      var count = parseInt($('#responses-count-' + post).html());
      $.ajax({
        url: '/response/delete',
        method: 'POST',
        data: { id: id },
        success: function (response) {
          parent.remove();
          $('#responses-count-' + post).html(count - 1)
        }
      });

    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
