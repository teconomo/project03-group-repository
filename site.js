$(document).ready(function() {
   $('#dictionary-form').on('submit', function(event) {
    var search = $("#label").text();
    $.get(
'https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20161207T050539Z.4477287c82f93220.0ffafbf07a34f70b5034bdfee30d4d7d1ae5f35f&lang=en-en&text=' + search,
      function(data) {
        $("#word").html('Word: ' + search);
        $("#definition").html('Definition: ');
      });
  event.preventDefault();

});

}); 
