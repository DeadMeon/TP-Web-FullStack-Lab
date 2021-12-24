<?php

namespace App\Tests\Api;

use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\ApiTestCase;

class PropertySaleTest extends ApiTestCase
{

    public function testGetAverage()
    {
        $response = static::createClient()->request('GET', '/property_sales');

        $this->assertResponseStatusCodeSame(200);
    }
}
