<script type="text/javascript" src="js/LAB/LAB.js"></script>
<script>

function addMoreScripts() {
	$LAB.script("js/Site/Home/Site.Home.FeaturedWork.js")
}

$LAB
	.script("js/JQuery/jQuery.js")
	.wait()
	.script("js/JQuery/jQuery.easing.1.3.js")
	.wait()
	.script("js/Adoro/Adoro.Carousel.js")
	.wait(addMoreScripts);
</script>

<!--
<script type="text/javascript" src="js/JQuery/jquery.js"></script>
<script type="text/javascript" src="js/JQuery/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="js/Adoro/Adoro.Carousel.js"></script>
-->