$(document).ready(function(){
	var ulNode1 = $("#dropDownMenu ul")[0] || null;
	new Adoro.DropDownMenu(ulNode1, { cssHideClass: "off" });
	
	var ulNode2 = $("#menu ul")[0] || null;
	new Adoro.DropDownMenu(ulNode2, { subMenuType: "div", cssActiveClass: "hover", cssHideClass: "off" });	
});