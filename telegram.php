<?php

$name = $_POST['name'];
$phone = $_POST['tel'];
$email = $_POST['email'];
$message = $_POST['message'];
$delivery_option = $_POST['delivery_option']; // Получаем значение из селекта
$token = "7429418355:AAEhCXGcDivq6AxSPqSUOiLDoompdCjdj3k";
$chat_id = "-1002243481550";

$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email: ' => $email,
  'Сообщение: ' => $message,
  'Вариант доставки: ' => $delivery_option // Добавили вариант доставки
);

$txt = ""; // Объявляем переменную $txt
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
}

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  echo "Success";
} else {
  echo "Error";
}
?>