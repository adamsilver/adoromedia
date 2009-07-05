var Site = Site || {};
Site.Projects = Site.Projects || {};
Site.Projects.CheckboxDisabler = new (function(){
	$(document).ready(function(){
		var group01 = new Adoro.CheckboxDisabler($("input[name='searchEngine']"),2);
		var group02 = new Adoro.CheckboxDisabler($("input[name='secondGroup']"),1);
	});
});