<?php
require_once '../classes/WidgetApiInteractor.php';
require_once '../classes/ApiHelper.php';
require_once '../classes/GalleryJsGenerator.php';
require_once '../classes/StyleSettings.php';

$canvasClass = $_GET['canvas'] ?? 'bmby-gallery';

$key = $_GET['key'] ?? '';
$type = $_GET['type'] ?? '';
$callback = $_GET['callback'] ?? '';
$lang = $_GET['lang'] ?? 'en';
$params = @$_GET['categoryid'] ? ['categoryId' => $_GET['categoryid']] : null;
$styleSettings = new StyleSettings(@$_GET['bg'], @$_GET['btn_fg']);

$apiInteractor = new WidgetApiInteractor(@$_GET['key'], @$_GET['type']);
$galleryData = $apiInteractor->getGalleryApiData($params);

$galleryJsGenerator = new GalleryJsGenerator($galleryData, $canvasClass, $lang, $callback, @$_GET['categoryid'] ?? '', $styleSettings);

$galleryJsGenerator->showJs();












