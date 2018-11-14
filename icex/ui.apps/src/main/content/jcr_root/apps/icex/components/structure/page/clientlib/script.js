function refreshCSS() {
      $("link").each(function(index, element) {
        var e = $(element);
        var href = e.attr("href");

        if(href.indexOf(".css") > 0) {
          e.attr("href", href + "?cb=" + Math.round(Math.random() * 1000000));
        }
      });
    }
