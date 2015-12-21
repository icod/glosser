jQuery.fn.extend({
	glosser: function() {
		this.each(function(){
		  var container = $(this);
		  var content = container;
		  content = $.trim(content.html());
		  var lines = content.split('\n');
		  var glosses = $('div');
		  container.empty().addClass('glosser-container');
		  $.each(lines, function(i) {
		    lines[i] = $.trim(lines[i]);
		    lines[i] = lines[i].replace(/  +/g, ' ');
		    lines[i] = lines[i].replace(/{(.*?)}/g, function(s) {
		      s = s.replace(/[\s]/g, '&nbsp;');
		      s = s.replace(/[{|}]/g, '');
		      return s;
		    });
		    lines[i] = lines[i].split(' ');
		  });

		  for (var i=0; i<lines[0].length; i++) {
		    var gloss = $('<span>').addClass('glosser-item');
		    gloss.append('<ul>');
		    $.each(lines, function(j) {
		      gloss.find('ul').append( '<li class="glosser-row-'+(j+1)+'">' + lines[j][i] + '</li>' );
		    });    
		    container.append( gloss );
		  }
		});
	}
});