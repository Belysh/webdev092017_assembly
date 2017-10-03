<?php
header('Content-Type: text/html; charset=utf-8');

   if (isset($_POST['nameUser']) && isset($_POST['email']) && isset($_POST['message_from_user'])) {
        $message = "Сообщение от пользователя: $nameUser";
        $emailUser = "почта пользователя: $email";
        $text = "Сообщение: $message_from_user";
        $result = mail('nastya02chervona@gmail.com', $text, $message);
        
        $aRes = array('mes' => 'Done mail', 'status' => 'OK');
        echo json_encode($aRes);
   }
   else {
      echo 'Данные не получены';
   }
?>