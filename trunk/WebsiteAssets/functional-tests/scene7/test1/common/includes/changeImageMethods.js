				function setOptions(chosen1, chosen2, chosen3) { 
			  				
			  				//set value for colorOptions to the newly supplied values passed as parameters to the function
			  				 colorOptions= chosen1 + "," + chosen2 + "," +  chosen3;        	
			  				                                                                     
			  				
									 //If logoState is not set to NoLogo do this to add the logo when building the image request
									if (logoState != "NoLogo") { 
										
										//   setFlashParam handles encoding
									     S7Config.setFlashParam(myName, 'image', 'BYCERender?layer=0&src=ir(BYCERender/12000_fr?obj=main&color=' + chosen1 + ',' + chosen2 + ',' + chosen3 + '&qlt=95' + logoState + ')');
						              		
									}
							
									else  
										S7Config.setFlashParam(myName, 'image', 'BYCERender?layer=0&src=ir(BYCERender/12000_fr?obj=main&color=' + chosen1 + ',' + chosen2 + ',' + chosen3 + '&qlt=95)')
							
			             }  // end function setOptions                            
		
		
		
				function setLogo(option) {
			  			
			  			//If turning off the logo image do this
			                if (option==0) { //Do this if user selected to turn off logo
								
								//Set logoState to off
								logoState="NoLogo";  
								
							
								//   setFlashParam handles encoding
			               		S7Config.setFlashParam(myName, 'image', 'BYCERender?layer=0&src=ir(BYCERender/12000_fr?obj=main&color=' + colorOptions + '&qlt=95)');		
						}   
			                
			                 else if (option==1) {//Do this if user selected to turn on the logo
								 
								 //Set logoState to on referencing decal to pass to the render call
								 logoState="&obj=decal/SF&decal&src=is{BYCE/ist006001?fmt=png-alpha}&res=300&show";
									
								 //   setFlashParam handles encoding
								S7Config.setFlashParam(myName, 'image', 'BYCERender?layer=0&src=ir(BYCERender/12000_fr?obj=main&color=' + colorOptions + '&qlt=95' + logoState + ')');		
						}   
			   
					 } // end function setLogo                             