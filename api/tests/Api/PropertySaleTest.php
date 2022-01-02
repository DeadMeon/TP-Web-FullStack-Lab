<?php

namespace App\Tests\Api;

use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\ApiTestCase;

class PropertySaleTest extends ApiTestCase
{

    public function testGetAverage()
    {
        $response = static::createClient()->request('GET', '/property_sales/average');

        $this->assertResponseStatusCodeSame(200);
        $this->assertResponseHeaderSame('content-type', 'application/json');
        $this->assertMatchesJsonSchema([
            "type" => "object",
            "properties" => [
                "data" => [
                    "type" => "array",
                    "items" => [
                        "type" => "object",
                        "properties" => [
                            "key" => ["type"=>"string"],
                            "value"=> ["type"=>"number"]
                        ]
         
                    ]
                ]
            ]
        ]);
    }

    public function testGetCount()
    {
        $response = static::createClient()->request('GET', '/property_sales/count/month/1-1-2017/31-12-2017');

        $this->assertResponseStatusCodeSame(200);
        $this->assertResponseHeaderSame('content-type', 'application/json');
        $this->assertMatchesJsonSchema([
            "type" => "object",
            "properties" => [
                "data" => [
                    "type" => "array",
                    "items" => [
                        "type" => "object",
                        "properties" => [
                            "key" => ["type"=>"string"],
                            "value"=> ["type"=>"number"]
                        ]
         
                    ]
                ]
            ]
        ]);
    }

    public function testGetSell()
    {
        $response = static::createClient()->request('GET', '/property_sales/sell/2018');
        $this->assertResponseStatusCodeSame(200);
        $this->assertResponseHeaderSame('content-type', 'application/json');
        $this->assertMatchesJsonSchema([
            "type" => "object",
            "properties" => [
                "data" => [
                    "type" => "array",
                    "items" => [
                        "type" => "object",
                        "properties" => [
                            "key" => ["type"=>"string"],
                            "value"=> ["type"=>"number"]
                        ]
         
                    ]
                ]
            ]
        ]);
    }
}
