<?php

$name = 

if (isset($_POST['enviar'])) {
    if(!empty($_POST['name'])) && !empty($_POST['email'] && !empty($_POST['phone'] && !empty($_POST['textarea'] {
        $destinatario = "gallegojpe@gmail.com";
        $email = $_post['email'];
        $name = $_post['name'];
        $phone = $_post['phone'];
        $textarea = $_post['textarea'];

        $header = "From: Cavaliere Group Landing Page" . "\r\n";
        $header = "X-MAILER: PHP/" . phpversion();\
        $mail = mail($email, $name, $phone, $textarea);
        if(mail) {
            echo "<h4> Mail enviado ! </h4>";
        }

        }
    )
}
