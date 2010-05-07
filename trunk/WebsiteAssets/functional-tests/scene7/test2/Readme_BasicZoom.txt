ADOBE SYSTEMS INCORPORATED
Copyright 2004 Adobe Systems Incorporated
All Rights Reserved.

==================
Flash Basic Zoom Viewer Sample Code utilizing Dynamic swfObject embed method.
==================

1. Description
2. Requirements
3. Deployment
4. Configuration
5. Conflicts/Known Errors
6. Swfobject Information
7. Contact and Information
9. Legal Notifications

===============
1. DESCRIPTION
===============

This sample code is intended to demonstrate the appropriate page coding to embed the basic flash zoom viewer into a page utilizing the swfObject flash object initialization method.
This page can used as a reference point when determining how to implement your own embedded viewer implementation, or can be used directly as configured if appropriate to your needs.  

Files included in this sample code zip archive:

Flash_Zoom_Basic_swfobject_dynamic.html - Page source demonstrating embedding technique.
Readme_BasicZoom.txt - This file describing the sample code.
.\common\includes\config.js - Contains server path definitions for the viewer through the S7ConfigObject class, along with other required function definitions.
.\common\includes\swfobject.js - Contains the code necessary for initializing a Flash object within your page through the swfObject method.  For further information and updates consult the Swfobject Information section in this document below.
.\resources\expressInstall\expressInstall.swf - A standard express flash installer for users with a flash version installed, but below the minimum version specified in the swfObject initialization.
.\resources\expressInstall\src\expressInstall.fla - Source files for the express Flash installer if you desire to customize the appearance or behavior.  See this page for more information: http://kb.adobe.com/selfservice/viewContent.do?externalId=6a253b75&sliceId=1
.\resources\expressInstall\src\expressInstall.as - Additional Action Script source file for the express Flash installer.
.\help\zoomHelp.swf - A standard viewer help file which can be added to your IPS account and then added to your viewer implementation through the viewer configuration page to provide usage instructions when the user clicks the help button in your viewer skin.
.\help\src\zoomHelp.fla - Source files for the viewer help file which can be used to customize the information and appearance of the help popup within your viewer.

===============
2. REQUIREMENTS
===============

Client Browser Minimum Requirements

·  Microsoft Windows 98 or higher, Intel Pentium III processor (Pentium 4 or higher recommended), or Macintosh OS 9.0 or higher, 128MB RAM (256MB, or higher, recommended).
·  Color monitor and video card supporting 16-bit High Color at 800x600 resolution or better.
·  Internet Explorer 6.0 or higher, Netscape 7.2 or higher, AOL 9.0 or higher, Safari 1.3 or higher, Firefox 1.0.7 or higher, and Mozilla 1.7 or higher.
·  Macromedia Flash Player 7.0 or higher (Flash clients only).

========================
3. DEPLOYMENT
========================

1.  Download the .zip archive containing the sample code page source as well as all necessary JavaScript include files to your web server.
2.  Extract the .html, expressInstall.swf and all .js files included within the zip file to an appropriate directory of your web server ROOT directory, preserving folder structure configured within the zip archive (consult your web server documentation for further information on appropriate web page deployment proceedure).
3.  Ensure that the .js files are in an appropriate sub directory as referenced in the .html file.  This should require that the .js files are in a relative directory structure to the location of the .html file (./common/includs/).
4.  Test the .html file on your webserver by requesting the page, referencing the appropriate pathing information as deployed within the ROOT directory of your webserver.

=====================
4. CONFIGURATION
=====================

1.  Modify the config.js file so that the initial S7ConfigObject class declaration correctly references your assigned Image Serving url.  

	By default the config.js should have the S7ConfigObject declared as such:
	
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

	Please ensure that you update all instances of sample.scene7.com with the appropriate Image Serving url, for example s7d1.scene7.com.  Note that the config.js also includes a hard coded sample.scene7.com reference in this section of code:
	
		document.getElementById(divcontainer).innerHTML = "";
		var divinfo = "<embed src='http://sample.scene7.com/is-viewers/flash/gateway.swf' FlashVars='lc=" + inId + "&fq="+escape(inName + "=" + inVal)+"' width='0' height='0' type='application/x-shockwave-flash'></embed>";
		document.getElementById(divcontainer).innerHTML = divinfo;
		
2.  Update the .html file so that your companies image content is referenced.

	You should find two variables declared in the .html source as such:
	
	var imageName = ...
	var configName = ...
	
	These variables will reference the S7SampleCode company as well as an asset to utilize for the example within the viewer.  After updating the config.js to configure your page to utilize your assigned ImageServer you should be able to reference assets from your own company by replacing the imageName variable declaration with your own company name followed by a / and an asset from your company appropriate for the viewer type as well as an appropriate viewer configuration preset reference in a similar syntax.
	

============================
5. CONFLICTS / KNOWN ERRORS
============================

For information pertaining to known viewer issues pertaining to the current live viewer build please consult the viewer documentation release notes available here:

http://crc.scene7.com/is-viewers/Readme.htm

================================
6. SWFOBJECT INFORMATION
================================

This sample code utilizes a special js file named swfobject.js which allows for a simple means of embedding the Flash object into the page which loads the viewer.

For further information on this method and documentation concerning it's usage please refer to this page prior to contacting Scene7 Technical Support:

http://code.google.com/p/swfobject/wiki/documentation

==========================
7. CONTACT AND INFORMATION
==========================

For any questions concerning this viewer implementation or issues with the configuration of your own page please contact Scene7 Technical support:
1-800-898-9743 or s7support@adobe.com U.S. customer standard support is 6AM until 6PM PT, but Scene7 does monitor the tech support phone and email from 12AM until 6PM PT. 

Support for non-Americas customers is available  0900 - 1800 UK Time at +44 (0) 20 8606 1140 or email at s7intsupport@adobe.com.

=========================
8. LEGAL NOTIFICATIONS
=========================

	NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the terms of the 
	Adobe license agreement accompanying it.  If you have received this file from a source other than Adobe, 
	then your use, modification, or distribution of it requires the prior written permission of Adobe.