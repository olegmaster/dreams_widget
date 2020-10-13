<?php
    if(empty($_GET['page'])){
        $_GET['page'] = 'about_us';
    }
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <?php if(isset($_GET['page']) && $_GET['page'] === 'about_us'): ?>
        <script src="js/about.php?key=4CEFC377-5791-41BD-9BB1-6E431F11F5D9&type=US"></script>
    <?php endif; ?>
    <?php if(isset($_GET['page']) && $_GET['page'] === 'gallery'): ?>
        <script src="js/gallery.php?key=4CEFC377-5791-41BD-9BB1-6E431F11F5D9&type=US"></script>
    <?php endif; ?>
    <title>Document</title>
</head>
<body style="margin: 0">

<?php if(empty($_GET['page'])): ?>
    <p><b>Error: Enter the get parameter of page's name</b></p>
    <p>for example base_url/demo.php?page=gallery</p>
    <p>or base_url/demo.php?page=about_us</p>
<?php endif; ?>

<?php if(isset($_GET['page']) && $_GET['page'] === 'about_us'): ?>
    <div class="bmby-about"></div>
<?php endif; ?>
<?php if(isset($_GET['page']) && $_GET['page'] === 'gallery'): ?>
    <div class="bmby-gallery"></div>
<?php endif; ?>

</body>
</html>