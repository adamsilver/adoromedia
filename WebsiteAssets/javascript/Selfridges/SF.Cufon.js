$.namespace("SF");

SF.Cufon = new (function(){

	//None wrapping elements, read better with screen readers
	Cufon.replace("#searchNoResults h1, #getTheLook h2, #pgTreasureRailLanding h1, #pgTreasureRailChooseSize h1, #pgmydetails #sections h2, body.appointments h1, body.appointments #miniMonthView .controls .month, body.appointments #miniMonthView th, #pgpersonalisation #sections h2, #pgShopBrands #brandNavigation li, #pgShopBrands #brandCategoryNavigation li, #pgShopBrands #brandCategoryNavigationAZ li, #pgMyCalendar #agenda div.date h3, #pgMyCalendar #calendar th, #pgMyCalendar .calendarControls li.month, #pgMyCalendar #calendarMonth a.date, #pgMyCalendar #calendarMonth span.date, .prizeDraws h1, .prizeDraws h2, #pgPopUp h1, #pgPopUp h2, #pgDepartment h1, #pgSavedItems h1, #pgShoppingBag h1, #pgShopBrands h1, #error h1, .myaccount h1, #pgRFQStatus th, #pgwhatson h1, #pgB2BRegisterCompany h1, #pgB2BRegisterCompany h2, #pgSignIn .noAccount h2, #pgSignIn .existingAccount h2, #pgSignIn .registerOrganisation h2, #pgdeliverynoaddress #primary h2, #pgdeliverynoaddress #secondary h2, .checkout h1, #pgthankyou #sections h3, #pgsummary table.summary thead th, #pgsummary .promocode h3, #pgsummary .deliverygroup h3, #pgpayment .checkoutoptions h3, #pgpayment .orderSummary thead th, #pgMyAuctions table.generic thead th, #pgfindcustomer h1, #pgviewcollections h1, #pgfindcustomer h1, #pgfindorderresults h1, #pgfindorder h1, #pgfindcustomerresults h1, #pgConciergeRequestForm h1, #pgorderdetails .deliverygroup .summary thead tr th, #pgnotifications h2, body.csr h1, #pgnotifications th, .cufonReplace, #productRating h2, #pgReturns .deliveryGroup h3, #pgReturns .deliveryGroup th, #pgReturns #primary h2, #pgReturns #printDetails h2, .blogsAndForums h1, .whatsOn #blogNavigation h2, #pgMyConnectionsDetail h2, #pgMyConnectionsAdd h2, .poll h1, div.productInformation div.moreLikeThis h2", {separate:'none' });
	
	//Elements that must wrap
	Cufon.replace("#pggiftwrap .giftwrapdetails h2, .whatsOn h1");
	
	// Cufon light for CMS purposes
	Cufon.replace(".cmsCufonLight", {fontFamily: "ITC Avant Garde Std XLt"});	
	
	
});
