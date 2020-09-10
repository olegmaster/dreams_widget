<?php

require_once '../classes/WidgetApiInteractor.php';
require_once '../classes/ApiHelper.php';
require_once '../classes/AboutJsGenerator.php';

$canvasClass = $_GET['canvas'] ?? '';
$key = $_GET['key'] ?? null;
$type = $_GET['type'] ?? null;
$callback = $_GET['callback'] ?? '';


$apiInteractor = new WidgetApiInteractor($_GET['key'] ?? '', $_GET['type'] ?? '');
$aboutData = $apiInteractor->getAboutUsPageData();

$aboutJsGenerator = new AboutJsGenerator($aboutData, $canvasClass, $callback);

$aboutJsGenerator->showJs();