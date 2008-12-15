var helneuecon = {
      src: 'swf/helneuecon.swf'
};
 
sIFR.activate(helneuecon);
 
sIFR.replace(helneuecon, {
      selector: 'h1',
	  css: [
      '.sIFR-root { font-size:30px; color:#000000; background-color: #ffffff leading: -14}'
      ],
      wmode: 'transparent',
	  tuneHeight: '-3'
});

sIFR.replace(helneuecon, {
      selector: 'h2.dg',
	  css: [
      '.sIFR-root { font-size:20px; color:#000000; background-color: #ffffff leading: -14}'
      ],
      wmode: 'transparent',
	  tuneHeight: '-3'
});