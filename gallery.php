<?php
$path = sprintf(
  "%s://%s",
  isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off'?'https':'http',
  $_SERVER['SERVER_NAME']
);
$bgParam = isset($_GET['bg']) ? '&bg=' . $_GET['bg'] : '';
$btnFg = isset($_GET['btn_fg']) ? '&btn_fg=' . $_GET['btn_fg'] : '';
$url = "{$path}/js/gallery.php?canvas=bmby-gallery-wrapp&key={$_GET['key']}&type={$_GET['type']}&lang={$_GET['lang']}$bgParam$btnFg";
if(@$_GET['categoryid']){
  $url.="&categoryid=".$_GET['categoryid'];
}
?>

<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script src="<?=$url?>"></script>
  <title>Document</title>
</head>

<body>
<!--add class rtl to the this element to change items order,-->
<!--for example <div class="bmby-about-us rtl">-->
<div class="bmby-gallery-wrapp"></div>
</body>
</html>