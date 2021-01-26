<?php

require_once '../classes/WidgetApiInteractor.php';
require_once '../classes/ApiHelper.php';
require_once '../classes/AboutJsGeneratorV3.php';

$canvasClass = $_GET['canvas'] ?? 'bmby-about';
$key = $_GET['key'] ?? '';
$type = $_GET['type'] ?? '';
$callback = $_GET['callback'] ?? '';
$lang = $_GET['lang'] ?? 'en';
$params = @$_GET['chapterid'] ? [chapterId => $_GET['chapterid']]: null;

$apiInteractor = new WidgetApiInteractor($_GET['key'] ?? '', $_GET['type'] ?? '');
$aboutData = $apiInteractor->getAboutUsPageData($params);

$aboutJsGenerator = new AboutJsGenerator($aboutData, $canvasClass, $callback, $lang);

$aboutJsGenerator->showJs();