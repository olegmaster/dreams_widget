<?php
require_once '../classes/WidgetApiInteractor.php';
require_once '../classes/ApiHelper.php';
require_once '../classes/GalleryJsGenerator.php';

$canvasClass = $_GET['canvas'] ?? 'bmby-gallery';
$key = $_GET['key'] ?? null;
$type = $_GET['type'] ?? 'US';
$callback = $_GET['callback'] ?? '';

$apiInteractor = new WidgetApiInteractor($_GET['key'] ?? '');
$galleryData = $apiInteractor->getGalleryApiData();
$galleryCategoriesData = $apiInteractor->getGalleryCategoriesApiData();

$galleryJsGenerator = new GalleryJsGenerator($galleryData, $galleryCategoriesData, $canvasClass, $callback);

$galleryJsGenerator->showJs();












