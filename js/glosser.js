jQuery.fn.extend({
  glosser: function(options) {

    var defaults = {
      separator:  " ",  // Separates gloss items on each line
      emptyGloss: "",   // The character that is inserted, when a gloss is missing
      escape:     "{}",  // Escape characters/tags for a gloss group
      prefix:     "glosser"  // Prefix for all added CSS classes
    }
    var settings = $.extend({}, defaults, options);
    
    return this.each(function() {        
      var container = $(this);
      var content = container;
      content = $.trim(content.html());
      var lines = content.split('\n');
      container.empty().addClass(settings.prefix+'-container');
      $.each(lines, function(i) {
        lines[i] = $.trim(lines[i]);
        lines[i] = lines[i].replace(/  +/g, ' ');
        var escapeChars = settings.escape.split('');
        // Look for escape characters
        var escape_regex = new RegExp('\\'+escapeChars[0]+"(.*?)\\"+escapeChars[1], 'g');
        lines[i] = lines[i].replace(escape_regex, function(s) {
          // Replace spaces by non-breaking space 
          s = s.replace(/ /g, '&nbsp;');
          // Remove escape characters from string
          var escape_regex2 = new RegExp('[\\'+ (settings.escape.split('')).join('|\\') +']','g');
          s = s.replace(escape_regex2, '');
          return s;
        });
        // Split line into gloss items, separated by separator
        lines[i] = lines[i].split(settings.separator);
      });

      for (var i = 0; i < lines[0].length; i++) {
        var gloss = $('<span><ul></ul></span>').addClass(settings.prefix+'-item');
        $.each(lines, function(j) {
          var glossWord = (typeof lines[j][i] !== "undefined") ? lines[j][i] : "";
          var glossElement = $('<li>'+glossWord+'</li>').addClass( settings.prefix + '-row-' + (j + 1) );
          gloss.find('ul').append(glossElement);
        });
        container.append(gloss);
      }
    });
  }
  
});
