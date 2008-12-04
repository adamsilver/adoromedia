<p>Include following JS files</p>
<div class="code"><pre>
&lt;script type=&quot;text/javascript&quot; src=&quot;jquery-1.2.6.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;Adoro.FormValidator.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;Adoro.FormRules.js&quot;&gt;&lt;/script&gt;
</pre></div>

<p>The example code</p>
<div class="code"><pre>
&lt;script type=&quot;text/javascript&quot;&gt;
	$(document).ready(function(){ 
		// get form to validate from DOM
		var devForm = document.getElementById(&quot;devForm&quot;);
		if(devForm === null) return;
		
		// create a new form to validate
		var myFormToValidate = new Adoro.FormValidator(devForm);
		
		// add validators for the form
		// chaining is optional
		myFormToValidate.addValidator(&quot;fullName&quot;,[{
			method: Adoro.FormRules.notEmpty,
			message: &quot;Full name is required.&quot;
		},{
			method: Adoro.FormRules.emailAddress,
			message: &quot;Full name for some reason should look like an email address.&quot;
		}]).addValidator(&quot;age&quot;,[{
			method: Adoro.FormRules.notEmpty,
			message: &quot;You must fill in your age.&quot;
		}]).addValidator(&quot;terms&quot;,[{
			method: Adoro.FormRules.minChecked, 
			params: {
				minChecked: 1
			},
			message: &quot;Terms need to be agreed.&quot;
		}]).addValidator(&quot;day01&quot;,[{
			method: Adoro.FormRules.notEmpty,
			message: &quot;Day 1 is required.&quot;
		}]).addValidator(&quot;month01&quot;,[{
			method: Adoro.FormRules.notEmpty,
			message: &quot;Month 1 is required.&quot;
		}]).addValidator(&quot;year01&quot;,[{
			method: Adoro.FormRules.notEmpty,
			message: &quot;Year 1 is required.&quot;
		}]).addValidator(&quot;searchEngine&quot;,[{
			method: Adoro.FormRules.minChecked,
			params: {
				minChecked: 2
			},
			message: &quot;You must pick at least 2 search engines.&quot;
		}]).addValidator(&quot;day02&quot;,[{
			method: Adoro.FormRules.notEmpty,
			message: &quot;You must fill in day 02.&quot;
		}]).addValidator(&quot;month02&quot;,[{
			method: Adoro.FormRules.notEmpty,
			message: &quot;You must fill in month 02.&quot;
		}]).addValidator(&quot;year02&quot;,[{
			method: Adoro.FormRules.notEmpty,
			message: &quot;You must fill in year 02.&quot;
		}]).addValidator(&quot;gender&quot;,[{
			method: Adoro.FormRules.minChecked, 
			params: {
				minChecked: 1
			},
			message: &quot;You must fill select a gender.&quot;
		}]).addValidator(&quot;friends&quot;,[{
			method: Adoro.FormRules.notEmpty,
			message: &quot;You must choose a friend.&quot;
		}]);	
		
		// add a contextual group
		// first param is the id of the submit button in the DOM that triggers the group
		// second param is the array of field names to contextually validate
		myFormToValidate.addGroup(&quot;contextualSubmitButton&quot;, [&quot;day01&quot;, &quot;month01&quot;, &quot;year01&quot;]);
		
		// override the message for a validator - useful if you override a default from server side text etc
		// this line could then be in the markup
		myFormToValidate.setMessage(&quot;fullName&quot;, &quot;notEmpty&quot;, &quot;Custom is not empty message&quot;);
		
		// remove a validator - can&#39;t think why you need it yet but surely useful
		// if you pass in just the first param the whole validator will be removed
		// if you pass in ruleKey(s) then those particular rule(s) will be removed
		myFormToValidate.removeValidator(&quot;fullName&quot;, [&quot;emailAddress&quot;]);		
	});
&lt;/script&gt;
</pre></div>