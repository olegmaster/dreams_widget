<?php
require_once 'ApiHelper.php';

class WidgetApiInteractor extends ApiHelper
{
    private $apiEndPoint = '';

    private $galleryFnc = 'api/dreamsv2/gallery';
    private $aboutFnc = 'api/dreamsv2/about/';
    private $galleryCategoriesFnc = 'api/dreamsv2/galleryCategories/';
    private $apiKey;

    public function __construct(string $apiKey, string $type)
    {
        $this->apiKey = $apiKey;
        $this->apiEndPoint = ($type == 'US')?$_SERVER['endpoint_US']:$_SERVER['endpoint_IL'];
    }

    /**
     * @return bool|string
     */
    public function getGalleryApiData()
    {
        return $this->sendRequest($this->galleryFnc);
    }

    /**
     * @return bool|string
     */
    public function getAboutUsPageData()
    {
        return $this->sendRequest($this->aboutFnc);
    }

    private function sendRequest(string $url){

        return $this->sendGetRequest($this->apiEndPoint . "/" . $url . "/" . $this->apiKey);
    }
}