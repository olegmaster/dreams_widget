<?php
require_once '../classes/WidgetApiInteractor.php';
require_once '../classes/ApiHelper.php';
require_once '../classes/GalleryJsGenerator.php';

$canvasClass = $_GET['canvas'] ?? 'bmby-gallery';

$key = $_GET['key'] ?? '';
$type = $_GET['type'] ?? '';
$callback = $_GET['callback'] ?? '';
$lang = $_GET['lang'] ?? 'en';

$apiInteractor = new WidgetApiInteractor($_GET['key'] ?? '', $_GET['type'] ?? '');
$galleryData = $apiInteractor->getGalleryApiData();

$galleryCategoriesData = $apiInteractor->getGalleryCategoriesApiData();

$galleryJsGenerator = new GalleryJsGenerator($galleryData, $galleryCategoriesData, $canvasClass, $lang, $callback);

$galleryJsGenerator->showJs();












