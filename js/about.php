<?php

require_once '../classes/WidgetApiInteractor.php';
require_once '../classes/ApiHelper.php';
require_once '../classes/AboutJsGenerator.php';
require_once '../classes/StyleSettings.php';

$canvasClass = $_GET['canvas'] ?? 'bmby-about';
$key = $_GET['key'] ?? '';
$type = $_GET['type'] ?? '';
$callback = $_GET['callback'] ?? '';
$lang = $_GET['lang'] ?? 'en';
$params = @$_GET['chapterid'] ? [chapterId => $_GET['chapterid']]: null;
$styleSettings = new StyleSettings(@$_GET['bg'], @$_GET['btn_fg']);

$apiInteractor = new WidgetApiInteractor($_GET['key'] ?? '', $_GET['type'] ?? '');
$aboutData = $apiInteractor->getAboutUsPageData($params);

$aboutJsGenerator = new AboutJsGenerator($aboutData, $canvasClass, $callback, $lang, $styleSettings);

$aboutJsGenerator->showJs();