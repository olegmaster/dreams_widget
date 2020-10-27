<?php
require_once '../classes/WidgetApiInteractor.php';
require_once '../classes/ApiHelper.php';
require_once '../classes/PoiJsGenerator.php';

$canvasClass = $_GET['canvas'] ?? 'bmby-poi';

$key = $_GET['key'] ?? '';
$type = $_GET['type'] ?? '';
$callback = $_GET['callback'] ?? '';
$lang = $_GET['lang'] ?? 'en';

$apiInteractor = new WidgetApiInteractor($_GET['key'] ?? '', $_GET['type'] ?? '');
$poiData = $apiInteractor->getPoiData();

$poiCategoriesData = $apiInteractor->getPoiCategoriesData();

$poiJsGenerator = new PoiJsGenerator($poiData, $poiCategoriesData, $canvasClass, $lang, $callback);

$poiJsGenerator->showJs();












