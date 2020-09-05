<?php
require_once '../classes/WidgetApiInteractor.php';
require_once '../classes/ApiHelper.php';
require_once '../classes/GalleryJsGenerator.php';

$canvasClass = $_GET['canvas'] ?? 'bmby-gallery';
$key = $_GET['key'] ?? null;
$type = $_GET['type'] ?? 'US';

$apiInteractor = new WidgetApiInteractor();
$galleryData = $apiInteractor->getGalleryApiData($_GET['key'] ?? '');

$galleryJsGenerator = new GalleryJsGenerator($galleryData, $canvasClass);

$galleryJsGenerator->showJs();












