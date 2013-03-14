/*global jQuery */
/*!
* oneLineResizedText.js 1.0
*
* Copyright 2013, Bogdan Girman http://girman.in.ua
* Released under the GPL license
* http://www.gnu.org/licenses/gpl.html
*
* Date: Thu Mar 14 13:20:10 EET 2013
*/
(function( $ ){

  $.fn.oneLineResizedText = function(stepSize){

    // Setup options
    var stepSize = stepSize || 1;

    return this.each(function(){
        el = $(this);
	var height = el.height();
	var lineHeight = parseFloat(el.css('line-height'));
	while (height > lineHeight){
		fontSize = parseFloat(el.css('font-size'));
		el.css('font-size', fontSize - stepSize + "px");
		height = el.height();
	}
      
    });

  };

})( jQuery );
