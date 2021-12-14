<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PropertySaleController extends AbstractController
{
    #[Route('/test', name: 'test')]
    public function index(): Response
    {
        return new Response('Saved new product with id ');
    }
}
