<?php
require_once 'ApiHelper.php';

class WidgetApiInteractor extends ApiHelper
{
    private $apiEndPoint = '';

    private $galleryFnc = 'api/dreamsv2/gallery';
    private $aboutFnc = 'api/dreamsv2/about/';
    private $poiCategoriesFnc = '/api/dreamsv2/poicategories/';
    private $poiFnc = '/api/dreamsv2/poi/';
    private $apiKey;

    public function __construct(string $apiKey, string $type)
    {
        $this->apiKey = $apiKey;
        $this->apiEndPoint = ($type == 'US')?$_SERVER['endpoint_US']:$_SERVER['endpoint_IL'];
    }

    /**
     * Get gallery data from API
     * by sending http request
     * @return bool|string
     */
    public function getGalleryApiData()
    {
        return $this->sendRequest($this->galleryFnc);
    }

    /**
     * get about us data from API
     * by sending http request
     * @return bool|string
     */
    public function getAboutUsPageData()
    {
        return $this->sendRequest($this->aboutFnc);
    }

    /**
     * get poi categories data from API
     * by sending http request
     * @return bool|string
     */
    public function getPoiCategoriesData()
    {
        return $this->sendRequest($this->poiCategoriesFnc);
    }

    /**
     * get Poi data from API
     * by sending http request
     * @return bool|string
     */
    public function getPoiData()
    {
        return $this->sendRequest($this->poiFnc);
    }

    /**
     * this function is used for sending http requests
     * by specified url
     * it can be extended for another http methods
     * @param string $url
     * @return bool|string
     */
    private function sendRequest(string $url){

        return $this->sendGetRequest($this->apiEndPoint . "/" . $url . "/" . $this->apiKey);
    }
}