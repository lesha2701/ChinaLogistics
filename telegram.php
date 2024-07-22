<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$token = "7429418355:AAEhCXGcDivq6AxSPqSUOiLDoompdCjdj3k";
$chat_id = "-1002243481550";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  echo "Success";
} else {
  echo "Error";
}
?>