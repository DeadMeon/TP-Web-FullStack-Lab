<?php

namespace App\DataFixtures\Faker;

class RegionFrProvider
{

    private $regions;

    public function __construct()
    {
        $this->regions = array('Alsace', 'Aquitaine', 'Auvergne',
        'Basse-Normandie', 'Bourgogne', 'Bretagne',
        'Centre', 'Champagne-Ardenne', 'Corse',
        'Franche-Comté', 'Haute-Normandie', 'Ile-de-France',
        'Languedoc-Roussillon', 'Limousin', 'Lorraine',
        'Midi-Pyrénées', 'Nord-Pas-de-Calais', 'Pays de la Loire',
        'Picardie', 'Poitou-Charentes', 'Provence-Alpes-Côte-d\'Azur',
        'Rhône-Alpes', 'DOM'    
        );
        
    }

    public function getRandomRegion() : string
    {
        return $this->regions[random_int(0, 23)];
    }
}
