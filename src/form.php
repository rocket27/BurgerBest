<?php
$status = array();
if ($_POST['name'] == "") {
    $status['error'] = "Необходимо указать Ваше имя";
} else if ($_POST['phone'] == "") {
    $status['error'] = "Необходимо указать телефон";
} else if ($_POST['street'] == "") {
    $status['error'] = "Необходимо указать улицу";
} else if ($_POST['house'] == "") {
    $status['error'] = "Необходимо указать номер дома";
} else if ($_POST['apartment'] == "") {
    $status['error'] = "Необходимо указать номер квартиры";
} else {
    mail("dmitry_kamenev@bk.ru", "Заказ с сайта", "Имя: ".$_POST['name']
        ."\nТелефон: ".$_POST['phone']."\nАдрес доставки: ".$_POST['street']
            ." ".$_POST['house'].", квартира ".$_POST['apartment']
                ."\nДополнительная информация:"."\nКорпус: ".$_POST['housing']
                    ."\nЭтаж: ".$_POST['floor']);
}
echo json_encode($status);
?>