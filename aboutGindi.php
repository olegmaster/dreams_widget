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
        src="<?=$url?>/about_usOd.js?canvas=bmby-about-wrapp&lang=<?=$_GET['lang']?>"></script>
    <title>Document</title>
</head>

<body>
<!--add class rtl to the this element to change items order,-->
<!--for example <div class="bmby-about-us rtl">-->
<div class="bmby-about-wrapp"></div>
</body>
</html>