<?php
require_once 'ApiHelper.php';

class WidgetApiInteractor extends ApiHelper
{
    private $galleryApiEndPoint = 'dreamsapi.bmby.com/api/dreamsv2/gallery';
    private $aboutApiEndPoint = 'dreamsapi.bmby.com/api/dreamsv2/about/';

    /**
     * @param string $apiKey
     * @return bool|string
     */
    public function getGalleryApiData(string $apiKey)
    {
        if(empty($apiKey)){
            throw new InvalidArgumentException('Api key cannot be empty');
        }
        return $this->sendGetRequest($this->galleryApiEndPoint . "/" . $apiKey);
    }

    /**
     * @param string $apiKey
     * @return bool|string
     */
    public function getAboutUsPageData(string $apiKey)
    {
        if(empty($apiKey)){
            throw new InvalidArgumentException('Api key cannot be empty');
        }
        return $this->sendGetRequest($this->aboutApiEndPoint . "/" . $apiKey);
    }
}