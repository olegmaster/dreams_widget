<?php

require_once '../classes/WidgetApiInteractor.php';
require_once '../classes/ApiHelper.php';
require_once '../classes/AboutJsGenerator.php';

$canvasClass = $_GET['canvas'] ?? 'bmby-about';
$key = $_GET['key'] ?? null;
$type = $_GET['type'] ?? 'US';


$apiInteractor = new WidgetApiInteractor();
$aboutData = $apiInteractor->getAboutUsPageData($_GET['key'] ?? '');

$aboutJsGenerator = new AboutJsGenerator($aboutData, $canvasClass);

$aboutJsGenerator->showJs();