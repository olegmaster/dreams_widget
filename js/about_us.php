<?php

require_once '../classes/WidgetApiInteractor.php';
require_once '../classes/ApiHelper.php';
require_once '../classes/AboutJsGenerator.php';

$canvasClass = $_GET['canvas'] ?? 'bmby-about';
$key = $_GET['key'] ?? null;
$type = $_GET['type'] ?? 'US';
$callback = $_GET['callback'] ?? '';


$apiInteractor = new WidgetApiInteractor($_GET['key'] ?? '');
$aboutData = $apiInteractor->getAboutUsPageData();

$aboutJsGenerator = new AboutJsGenerator($aboutData, $canvasClass, $callback);

$aboutJsGenerator->showJs();