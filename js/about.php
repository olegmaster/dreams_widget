<?php

require_once '../classes/WidgetApiInteractor.php';
require_once '../classes/ApiHelper.php';
require_once '../classes/AboutJsGenerator.php';

$canvasClass = $_GET['canvas'] ?? 'bmby-about';
$key = $_GET['key'] ?? '';
$type = $_GET['type'] ?? '';
$callback = $_GET['callback'] ?? '';
$lang = $_GET['lang'] ?? 'en';


$apiInteractor = new WidgetApiInteractor($_GET['key'] ?? '', $_GET['type'] ?? '');
$aboutData = $apiInteractor->getAboutUsPageData();

$aboutJsGenerator = new AboutJsGenerator($aboutData, $canvasClass, $callback, $lang);

$aboutJsGenerator->showJs();