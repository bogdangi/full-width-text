function OneLineResizedText(el){
  	var stepSize = stepSize || 1;
	var height = $(el).height();
	var lineHeight = parseFloat($(el).css('line-height'));
	while (height > lineHeight){
		fontSize = parseFloat($(el).css('font-size'));
		$(el).css('font-size', fontSize - stepSize + "px");
		height = $(el).height();
	}
}
