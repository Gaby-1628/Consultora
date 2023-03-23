<?php
    
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $consulta = $_POST['consulta'];


    $consulta = "Este mensaje fue enviado por" . $nombre . ",\r\n";
    $consulta .= "Su email es: " .$email  . ",\r\n";
    $consulta .= "Mensaje: " . $_POST['mensaje'] . ",\r\n";

    $para = 'aca va el mail';
    $asunto = 'Este mail fue enviado desde la web de AgilMains'

    mail($para, $asunto, utf8_decode($consulta), $header);

    header('Location.index.html');
    
    


?>