<?php

if (isset($_POST['enviar'])){
    if (!empty($_POST['name']) && !empty($_POST['asunto']) && !empty($_POST['msg']) && !empty($_POST['email'])){
        $name = $_POST['name'];
        $asunto = $_POST['asunto'];
        $msg = $_POST['msg'];
        $email = $_POST['email'];
        $header= "From: nahuel-schmidt@live.com.ar" . "\r\n"
        $header.= "Reply-To: nahuel-schmidt@live.com.ar" . "\r\n"
        $header.= "X-Mailer: PHP/". phpversion();
        $mail = @mail($email,$asunto,$msg,$header);
        if ($mail){
            echo "<h4> mail enviado exitosamente! </h4>"
        }
    }
}