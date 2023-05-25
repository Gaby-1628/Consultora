<?php
    
if (isset($_POST['enviar'])){
    if (!empty($_POST{'name'}) && !empty($_POST['consulta']) && !empty($_POST['email'])){
        $name = $_POST['name'];
        $consulta = $_POST['consulta'];
        $email = $_POST['email'];
        $header.= "from: nahuel-schmidt@live.com.ar" . "\r\n";
        $header.= "Reply-to: nahuel-schmidt@live.com.ar" . "\r\n";
        $header.= "X-Mailer: PHP/". phpversion();
        $email = @email($email,$consulta,$header);
        if ($email) {
            echo "<h4> Mail enviado exitosamente!</h4>";
        }
    }
}


?>