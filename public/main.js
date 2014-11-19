//jshint jquery:true

'use strict';

$(document).ready(function(){
  $.ajax({
    url: '/',
    type: 'POST',
    success: function(temp){
      if(temp < 30){
        $('#wear').html("<h1>Warm stuff</h1>");
      } else {
        $('#wear').html("<h1>I dont' know, make your own choices. I'm not your mom dickhead.</h1>");
      }
    }
  });
});

