<?php
$url = sprintf(
  "%s://%s",
  isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https' : 'http',
  $_SERVER['SERVER_NAME']
);
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script
        src="<?=$url?>/poiMazlavi.js?canvas=bmby-poi-wrapp&lang=<?=$_GET['lang']?>"></script>
    <title>Document</title>
</head>

<body>
<!--add class rtl to the this element to change items order,-->
<!--for example <div class="bmby-poi-wrapp rtl">-->
<div class="bmby-poi-wrapp"></div>
</body>
</html>