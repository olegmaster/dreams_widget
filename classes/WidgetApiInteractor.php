<?php
require_once 'ApiHelper.php';

class WidgetApiInteractor extends ApiHelper
{
    private $galleryApiEndPoint = 'dreamsapi.bmby.com/api/dreamsv2/gallery';
    private $aboutApiEndPoint = 'dreamsapi.bmby.com/api/dreamsv2/about/';
    private $galleryCategoriesApiEndPoint = 'dreamsapi.bmby.com/api/dreamsv2/galleryCategories/';
    private $apiKey;

    public function __construct(string $apiKey)
    {
        $this->apiKey = $apiKey;
    }

    /**
     * @return bool|string
     */
    public function getGalleryApiData()
    {
        return $this->sendRequest($this->galleryApiEndPoint);
    }

    /**
     * @return bool|string
     */
    public function getGalleryCategoriesApiData()
    {
        return $this->sendRequest($this->galleryCategoriesApiEndPoint);
    }

    /**
     * @return bool|string
     */
    public function getAboutUsPageData()
    {
        return $this->sendRequest($this->aboutApiEndPoint);
    }

    private function sendRequest(string $url){
        return $this->sendGetRequest($url . "/" . $this->apiKey);
    }
}