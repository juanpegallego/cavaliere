<?php

$to = 'info@cavaliere.group';
$email = $_POST['email']
$name = $_POST['name']
$phone = $_POST['phone']
$textarea = $_POST['textarea'];

$header = "From: Cavaliere Group Landing Page" . "\r\n";




mail($to, $email, $name, $phone, $textarea);
  



?>
