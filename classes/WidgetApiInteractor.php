<?php
require_once 'ApiHelper.php';

/**
 * the class for interacting wit REST API
 * we can get data from API using methods from it
 * and make other operations (create update delete) if it's necessary
 * Class WidgetApiInteractor
 */
class WidgetApiInteractor extends ApiHelper
{
    // API endpoint
    private $apiEndPoint = '';

    // specific API paths
    // it wil be concatenated with API endpoint
    private $galleryFnc = 'api/dreamsv2/gallery';
    private $aboutFnc = 'api/dreamsv2/about/';
    private $poiCategoriesFnc = 'api/dreamsv3/poicategories';
    private $poiFnc = 'api/dreamsv3/poi';
    private $poiSettingsFnc = 'api/dreamsv3/poisettings';

    // API key or projectGuid
    private $apiKey;


    /**
     * WidgetApiInteractor constructor.
     * @param string $apiKey
     * @param string $type is the type of api endpoint
     */
    public function __construct(string $apiKey, string $type)
    {
        // add on local debug
        //$_SERVER['endpoint_US'] = 'https://dreamsapi.bmby.com/';
        $this->apiKey = $apiKey;
        $this->apiEndPoint = ($type == 'US')?$_SERVER['endpoint_US']:$_SERVER['endpoint_IL'];
    }

  /**
   * Get gallery data from API
   * by sending http request
   * @param array|null $params
   * @return bool|string
   */
    public function getGalleryApiData(array $params = null)
    {
        return $this->sendRequest($this->galleryFnc, $params);
    }

  /**
   * get about us data from API
   * by sending http request
   * @param array|null $params
   * @return bool|string
   */
    public function getAboutUsPageData(array $params = null)
    {
        return $this->sendRequest($this->aboutFnc, $params);
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
     * get Poi settings from API
     * by sending http request
     * @return bool|string
     */
    public function getPoiSettingsData(){
        return $this->sendRequest($this->poiSettingsFnc);
    }

  /**
   * this function is used for sending http requests
   * by specified url
   * it can be extended for another http methods
   * @param string $url
   * @param array|null $params
   * @return bool|string
   */
    private function sendRequest(string $url, array $params = null){
        $url = $this->apiEndPoint . "/" . $url . "/" . $this->apiKey;
        if($params){
         $i = 0;
          foreach($params as $key => $value){
              $url.=($i == 0)?'?':'&';
              $url = $url.$key.'='.$value;
              $i++;
          }
        }
        return $this->sendGetRequest($url);
    }
}