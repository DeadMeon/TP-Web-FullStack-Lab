<?php

namespace App\DataFixtures;

use App\Entity\PropertySale;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;


class AppFixtures extends Fixture
{

    private $region;
    private $memory;
    private $memory_count;

    public function load(ObjectManager $manager): void
    {
        ini_set('memory_limit', '-1');
        gc_enable();
        printf(2020 . "\n");
        $this->loadByYear($manager, 2020);
        printf(2019 . "\n");
        $this->loadByYear($manager, 2019);
        printf(2018 . "\n");
        $this->loadByYear($manager, 2018);
        printf(2017 . "\n");
        $this->loadByYear($manager, 2017);
        //$this->loadByYear($manager, 0);
    }

    public function loadByYear(ObjectManager $manager, int $year): void
    {
        $handle = fopen('data/valeursfoncieres-' . strval($year) . '.txt', "r") or die("Couldn't get handle");
        if ($handle) {
            $i = 0;
            while ($line = stream_get_line($handle, 1024 * 1024, "\n")) {
                $row_data = explode('|', $line);
                if ($row_data[9] == "Vente" && ($row_data[35] == '1' || $row_data[35] == '2')) {
                    $property = new PropertySale();
                    $date_info = explode('/', $row_data[8]);
                    $property->setSellDate($row_data[8]);
                    $property->setSellDay($date_info[0]);
                    $property->setSellMonth($date_info[1]);
                    $property->setSellYear($date_info[2]);
                    $property->setPrice(floatval($row_data[10]));
                    $property->setCodeDepartement(intval($row_data[18]));
                    $property->setRegion($this->getRegion($row_data[18]));
                    $property->setCodeType(intval($row_data[35]));
                    $property->setArea(intval($row_data[38]));
                    $this->add($property);
                    gc_collect_cycles();
                }
            }
            fclose($handle);
        }

        $this->reformat();
        gc_collect_cycles();
        $this->insert($manager, $this->memory);
        gc_collect_cycles();
        $this->reset();
        gc_collect_cycles();
    }

    public function reset() {
        $this->memory_count = array();
        $this->memory = array();
    }

    public function add(PropertySale $property)
    {
        if ($this->memory == null) {
            $this->memory = array();
            $this->memory_count = array();
        }
        // $this->memory
        $title = $property->getSellDate() . "-" . $property->getRegion();
        if (array_key_exists($title, $this->memory)) {
            $pro = $this->memory[$title];
            $pro->setPrice($pro->getPrice() + $property->getPrice());
            $pro->setArea($pro->getArea() + $property->getArea());
            $this->memory_count[$title] = $this->memory_count[$title] + 1;
        } else {
            $this->memory[$title] = $property;
            $this->memory_count[$title] = 1;
        }
    }

    public function insert(ObjectManager $manager, $array)
    {
        $i = 0;
        foreach ($array as $key => $pro) {
            $manager->persist($pro);
            if(++$i % 500 == 0) {
                $manager->flush();
                gc_collect_cycles();
                printf("-- FLUSH --\n");
            }
        }
        $manager->flush();
    }

    public function reformat()
    {
        foreach ($this->memory as $key => $pro) {
            printf($key . " : key\n");
            printf(strval($pro->getPrice()) . " : totaly price\n");
            printf(strval($this->memory_count[$key]) . " : count\n");
            $pro->setPrice($pro->getPrice() / $this->memory_count[$key]);
            $pro->setArea($pro->getArea() / $this->memory_count[$key]);
            printf(strval($pro->getPrice()) . " : after divide\n");
        }
    }

    public function init()
    {
        if ($this->region == null) {
            $this->region = array();
            $this->region['Alsace'] = '67,68';
            $this->region['Aquitaine'] = '24,33,40,47,64';
            $this->region['Auvergne'] = '03,15,43,63';
            $this->region['Basse-Normandie'] = '14,50,61';
            $this->region['Bourgogne'] = '21,58,71,89';
            $this->region['Bretagne'] = '22,29,35,56';
            $this->region['Centre'] = '18,28,36,37,41,45';
            $this->region['Champagne-Ardenne'] = '08,10,51,52';
            $this->region['Corse'] = '2A,2B';
            $this->region['Franche-Comté'] = '25,39,70,90';
            $this->region['Haute-Normandie'] = '27,76';
            $this->region['Ile-de-France'] = '75,77,78,91,92,93,94,95';
            $this->region['Languedoc-Roussillon'] = '11,30,34,48,66';
            $this->region['Limousin'] = '19,23,87';
            $this->region['Lorraine'] = '54,55,57,88';
            $this->region['Midi-Pyrénées'] = '09,12,31,32,46,65,81,82';
            $this->region['Nord-Pas-de-Calais'] = '59,62';
            $this->region['Pays de la Loire'] = '44,49,53,72,85';
            $this->region['Picardie'] = '02,60,80';
            $this->region['Poitou-Charentes'] = '16,17,79,86';
            $this->region['Provence-Alpes-Côte-d\'Azur'] = '04,05,06,13,83,84';
            $this->region['Rhône-Alpes'] = '01,07,26,38,42,69,73,74';
            $this->region['DOM'] = '971,972,973,974';
        }
    }

    public function getRegion($dep)
    {
        $this->init();
        foreach ($this->region as $key => $value) {
            foreach (explode(',', $value) as $d) {
                if ($dep == $d) {
                    return $key;
                }
            }
        }
    }
}
