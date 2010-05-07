
function S7ConfigObject()
{  //Please host this file on your own web server (do not reference from s7testis.adobe.com) and change the urls below to match your assigned image server urls
	this.isViewerRoot	= "http://sample.scene7.com/is-viewers/";
	this.isRoot		= "http://sample.scene7.com/is/image/";
    this.contentRoot = "http://sample.scene7.com/";
	this.skinsRoot = "http://sample.scene7.com/skins/";
	//used by js->flash communication.
	var ua        = navigator.userAgent.toLowerCase();
	this.isIeWin  = ua.indexOf('msie') != -1 && ua.indexOf('win') != -1 && ua.indexOf('opera') == -1 && ua.indexOf('webtv') == -1;
	this.isFsCommand = true;

}



S7ConfigObject.prototype.setFlashParam = function(inId) 
{
	var q = '';
	for (var i = 1; i < arguments.length; i = i + 2)
	{
		if (i + 1 < arguments.length) 
		{
			q += '&' + escape(arguments[i]) + '=' + escape(arguments[i + 1]);
		}
	}
	q = q.substr(1);

	if (this.divId > this.maxDivs)
	{
		this.divId = 1;
	}
	var divcontainer = "flash_setvariables_" + inId + "_" + this.divId;
	this.divId ++;
	
	if (!document.getElementById(divcontainer))
	{
		var divholder = document.createElement("div");
		divholder.id = divcontainer;
		document.body.appendChild(divholder);
	}
	document.getElementById(divcontainer).innerHTML = "";
	var divinfo;
	if (this.isIeWin) {
		divinfo = "<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0' width='0' height='0'><param name='movie' value='" + this.isViewerRoot + "/flash/gateway.swf'><param name='FlashVars' value='lc=" + inId + "&fq=" + escape(q) + "'></object>";
	} else {
		divinfo = "<embed src='" + this.isViewerRoot + "/flash/gateway.swf' FlashVars='lc=" + inId + "&fq=" + escape(q) + "' width='0' height='0' type='application/x-shockwave-flash'></embed>";
	}
	document.getElementById(divcontainer).innerHTML = divinfo;
};

function docWrite(line) {
    document.write(line);
}

var S7Config		= new S7ConfigObject();

var root		= S7Config.isViewerRoot;
var imageServer		= S7Config.isRoot;

//autoResize functions
function resizeStage(inWidth, inHeight)
{
	var elementId = myName;
	var isSafari = ((navigator.appName=='Safari') || (navigator.userAgent.toLowerCase().indexOf('safari')>-1));
	var elm = null;
	if (!isSafari)
	{
		elm = document.embeds[elementId];
	}
	var checkElm = false;
	if (elm)
	{
		checkElm = true;
	}
	else
	{
		checkElm = false;
	}

	if (!isSafari && checkElm)
	{
		elm.width = inWidth;
		elm.height= inHeight;
	}
	else
	{
		setWidth(elementId, inWidth);
		setHeight(elementId, inHeight);
	}
}

function getLayer(name)
{
	if (document.getElementById)
		return document.getElementById(name).style;
	if (document.all)
		return document.all[name].style;
	if (document.layers)
		return document[name];
}

function setWidth(layer,w)
{
	layer=getLayer(layer);
	if (document.getElementById)
		layer.width=w;
	else if (document.all)
		layer.posWidth=w;
	else if (layer.clip)
		layer.clip.width=w;
}

function setHeight(layer,h)
{
	layer=getLayer(layer);
	if (document.getElementById)
		layer.height=h;
	else if (document.all)
		layer.posHeight=h;
	else if (layer.clip)
		layer.clip.height=h;
}

function genInstance(){
 var curDateTime = new Date();
 var curTime = 'ZoomMX' + curDateTime.getHours()+ curDateTime.getMinutes() + curDateTime.getSeconds();
  return curTime;
 }
