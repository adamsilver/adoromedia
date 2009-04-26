$(document).ready(function(){
	var el01 = $('<p class="remaining"></p>')[0];
	var field01 = document.getElementById("search");
	if(field01 === null) return;
	field01.parentNode.appendChild(el01);
	var myFieldMax = new Adoro.FieldMaxLengthIndicator(field01,{
		statusIndicator: el01,
		max: 50,
		beforeText: "Information: ",
		afterText: " chars remaining!"
	});
	
	var el02 = $('<p class="remaining"></p>')[0];
	var field02 = document.getElementById("different");
	if(field02 === null) return;
	field02.parentNode.appendChild(el02);
	var myFieldMax = new Adoro.FieldMaxLengthIndicator(field02,{
		statusIndicator: el02,
		max: 50,
		beforeText: "Information: ",
		afterText: " chars remaining!"
	});
});			