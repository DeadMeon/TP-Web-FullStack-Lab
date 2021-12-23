<?php

namespace App\Controller;

use App\Repository\PropertySaleRepository;
use App\Entity\PropertySale;
use Faker\Core\Number;
use PhpParser\Builder\Property;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use tidy;

class PropertySaleController extends AbstractController
{

    #[Route('/property_sales/average', name: 'average')]
    public function averageYear(PropertySaleRepository $propertySaleRepository): Response
    {

        $memory = array();
        $memory_count = array();
        $products = $propertySaleRepository
            ->findAll();

        foreach ($products as $key => $entity) {
            $title = $entity->getSellMonth() . "-" . $entity->getSellYear();
            if (array_key_exists($title, $memory)) {
                $pro = $memory[$title];
                $pro->setPrice($pro->getPrice() + $entity->getPrice());
                $pro->setArea($pro->getArea() + $entity->getArea());
                $memory_count[$title] = $memory_count[$title] + 1;
            } else {
                $memory[$title] = $entity;
                $memory_count[$title] = 1;
            }
        }

        $this->reformat($memory, $memory_count);

        $map = array_map(function (PropertySale $propertySale): float {
            return round($propertySale->getPrice() /  $propertySale->getArea(), 2);
        }, $memory);

        return $this->json(["data" => $this->makeArray($map)]);
    }

    #[Route('/property_sales/count/{time}/{before}/{after}', name: 'count')]
    public function count(string $time, string $before, string $after, PropertySaleRepository $propertySaleRepository): Response
    {
        $memory_count = array();

        $filter = function (PropertySale $propertySale) use ($before, $after) {
            return $this->inDate($propertySale, $before, $after);
        };

        $products = array_filter($propertySaleRepository->findAll(), $filter);



        foreach ($products as $key => $entity) {

            $title = "";

            if ($time == "month") {
                $title = $entity->getSellMonth() . "-" . $entity->getSellYear();
            } else if ($time == "year") {
                $title = $entity->getSellYear();
            } else {
                $title = $entity->getSellDay() . "-" . $entity->getSellMonth() . "-" . $entity->getSellYear();
            }

            if (array_key_exists($title, $memory_count)) {
                $memory_count[$title] = $memory_count[$title] + $entity->getCount();
            } else {
                $memory_count[$title] = $entity->getCount();
            }
        }

        return $this->json(["data" => $this->makeArray($memory_count)]);
    }

    
    #[Route('/property_sales/sell/{date}', name: 'sell')]
    public function sell(string $date, PropertySaleRepository $propertySaleRepository): Response
    {
        $memory_count = array();

        $filter = function (PropertySale $propertySale) use ($date) {
            return $propertySale->getSellYear() == $date;
        };

        $products = array_filter($propertySaleRepository->findAll(), $filter);

        $total = 0;

        foreach ($products as $key => $entity) {
            $title = $entity->getRegion();
            $total += $entity->getCount();
            if (array_key_exists($title, $memory_count)) {
                $memory_count[$title] = $memory_count[$title] + $entity->getCount();
            } else {
                $memory_count[$title] = $entity->getCount();
            }
        }

        $map = array_map(function (int $val) use ($total): float {
            return round($val / $total * 100, 2);
        }, $memory_count);

        return $this->json(["data" => $this->makeArray($map)]);
    }

    public function reformat($memory, $memory_count)
    {
        foreach ($memory as $key => $pro) {
            $pro->setPrice($pro->getPrice() / $memory_count[$key]);
            $pro->setArea($pro->getArea() / $memory_count[$key]);
        }
    }

    public function inDate($entity, $date1, $date2)
    {
        return  $this->beforeDate($entity, $date2) && $this->afterDate($entity, $date1);
    }

    public function beforeDate(PropertySale $entity, $date)
    {
        $date_info = explode('-', $date); // dd/mm/YY
        if (count($date_info) != 3) return false;
        if ($entity->getSellYear() == $date_info[2]) {
            if ($entity->getSellMonth() == $date_info[1]) {
                return intval($date_info[0]) >= intval($entity->getSellDay());
            } else {
                return intval($date_info[1]) >= intval($entity->getSellMonth());
            }
        } else {
            return intval($date_info[2]) >= intval($entity->getSellYear());
        }
    }

    public  function afterDate(PropertySale $entity, $date)
    {
        $date_info = explode('-', $date); // dd/mm/YY
        if (count($date_info) != 3) return false;
        if ($entity->getSellYear() == $date_info[2]) {
            if ($entity->getSellMonth() == $date_info[1]) {
                return intval($date_info[0]) <= intval($entity->getSellDay());
            } else {
                return intval($date_info[1]) <= intval($entity->getSellMonth());
            }
        } else {
            return intval($date_info[2]) <= intval($entity->getSellYear());
        }
    }

    public function sortDate($date1, $date2) {
        $date_info1 = explode('-', $date1); // dd/mm/YY
        $date_info2 = explode('-', $date2); // dd/mm/YY
        if(count($date_info1) != count($date_info2)) return -1;
        for ($i = count($date_info1) - 1; $i > -1; $i--) {
            if($date_info1[$i] != $date_info2[$i]) {
                return intval($date_info1[$i]) < intval($date_info2[$i]) ? -1 : 1;
            }
        }
        return 0;
    }

    public function makeEntity(string $date, float $value) {
        $entity = array();
        $entity["key"] = $date;
        $entity["value"] = $value;
        return $entity;
    }

    public function makeArray($array) {
        $result = array();
        foreach ($array as $key => $value) {
            array_push($result, $this->makeEntity($key, $value));
        }

        usort($result, function ($entity1, $entity2) {
            return $this->sortDate($entity1["key"], $entity2["key"]);
        });

        return $result;
    }
}
