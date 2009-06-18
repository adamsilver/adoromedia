<HTML>
<?php

$Name = "$_POST[Name]";
$Surname = "$_POST[Surname]";
$Email = "$_POST[Email]";
$details = "$_POST[details]";
$message = "$_POST[message]";


$to = "info@adlibprint.co.uk";         //Enter the address you would like to send the email to.
$subject = "Enquiry from Adlib Print Website";      //Enter the Emails subject.
$message = "Dear Staff of Ad Lib Print,
               
               My name: $Name $Surname             
               
               My E-mail Address is: $Email
               
               My Enquiry is as Follows: $details

  Kind Regards \r\n\r\n  $Name $Surname


This email has been designed and implemented by 1stDNS Ltd";

mail( $to, $subject, $message, "From: info@adlibprint.co.uk\nReply-To: $email\nX-Mailer: PHP/" . phpversion()) or print "Could not send mail.";

?>


<META HTTP-EQUIV="Refresh" CONTENT="0;URL=http://www.adlibprint.co.uk/thanks.html">
</BODY>
</html>
