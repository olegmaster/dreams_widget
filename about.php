<?php
$path = sprintf(
  "%s://%s",
  isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off'?'https':'http',
  $_SERVER['SERVER_NAME']
);

$bgParam = (isset($_GET['bg']) && !empty($_GET['bg'])) ? '&bg=' . urlencode($_GET['bg']) : '';
$btnFg = (isset($_GET['btn_fg']) && !empty($_GET['btn_fg'])) ? '&btn_fg=' . urlencode($_GET['btn_fg']) : '';
$url = @"{$path}/js/about.php?canvas=bmby-about-wrapp&key={$_GET['key']}&type={$_GET['type']}&lang={$_GET['lang']}$bgParam$btnFg";
if(@$_GET['chapterid']){
  $url.="&chapterid=".$_GET['chapterid'];
}
?>

<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script
    src="<?=$url?>"></script>
  <title>Document</title>
</head>

<body>
<!--add class rtl to the this element to change items order,-->
<!--for example <div class="bmby-about-us rtl">-->
<div class="bmby-about-wrapp"></div>
</body>
</html>