---
---
;{% include js/jquery-1.11.0.min.js %}

utils = {};
utils.toTitleCase = function(str) {
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

$(document).ready(function() {
  $("#lookupForm").submit(function(event) {
    event.preventDefault();

    var searchParameter = $('.lookupInput').val();
    if (!searchParameter) return;

    $.support.cors = true;
    $.get('http://courtbot.herokuapp.com/cases', {
      q: searchParameter
    }).done(function(results) {
      var resultsDiv = $('#results');
      resultsDiv.html('');

      var message;
      if (results.length === 0) {
        message = '<strong>No matching cases found. Please call us at <a href="tel:4046586940">(404) 658-6940</href>.</strong>';
      } else if (results.length === 1) {
        message = 'Your case:';
      } else if (results.length <= 9) {
        message = results.length + ' cases found:';
      } else {
        message = '<strong>Found lots of matching cases. Showing first ten. Please be more specific.</strong>';
      }

      resultsDiv.append('<div class="resultsMessage">' + message + '</div>');

      for (var i = 0; i < results.length; i++) {
        var item = results[i];

        var html = '<div class="defendant">' + utils.toTitleCase(item.defendant) + '</div>';
        if (item.payable) html += '<div class="datetime">You\'re eligible to <a href="https://courtview.atlantaga.gov/pa/EPpa.urd/epmw2000*display">pay online</a> now.</div>';
        html += '<div class="datetime">' + item.readableDate + ' ' + item.time + ' in Court ' + item.room + '</div>';

        var citations = results[i].citations;
        for (var j = 0; j < citations.length; j++) {
          html += '<div class="citation">Citation #' + citations[j].id + ' ' + citations[j].description + '</div>';
        }

        resultsDiv.append('<div class="case">' + html + '</div>');
      }
    }).fail(function(error) {
      console.log('HTTP request failed.');
      console.log(error);
    });
  });
});
