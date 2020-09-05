<?php

class ApiHelper
{
    /**
     * @param string $url
     * @return bool|string
     */
    public function sendGetRequest(string $url)
    {
        $ch = curl_init();


        $headers = array(
            'Accept: application/json',
            'Content-Type: application/json',

        );

        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $response = curl_exec($ch);

        curl_close($ch);

        return $response;
    }
}