<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\PropertySaleRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PropertySaleRepository::class)]
#[ApiResource]
class PropertySale
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $sellDate;

    #[ORM\Column(type: 'integer')]
    private $codeDepartement;

    #[ORM\Column(type: 'string', length: 255)]
    private $region;

    #[ORM\Column(type: 'integer')]
    private $codeType;

    #[ORM\Column(type: 'integer')]
    private $area;

    #[ORM\Column(type: 'float')]
    private $price;

    #[ORM\Column(type: 'string', length: 255)]
    private $sellDay;

    #[ORM\Column(type: 'string', length: 255)]
    private $sellMonth;

    #[ORM\Column(type: 'string', length: 255)]
    private $sellYear;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSellDate(): ?string
    {
        return $this->sellDate;
    }

    public function setSellDate(string $sellDate): self
    {
        $this->sellDate = $sellDate;

        return $this;
    }

    public function getCodeDepartement(): ?int
    {
        return $this->codeDepartement;
    }

    public function setCodeDepartement(int $codeDepartement): self
    {
        $this->codeDepartement = $codeDepartement;

        return $this;
    }

    public function getRegion(): ?string
    {
        return $this->region;
    }

    public function setRegion(string $region): self
    {
        $this->region = $region;

        return $this;
    }

    public function getCodeType(): ?int
    {
        return $this->codeType;
    }

    public function setCodeType(int $codeType): self
    {
        $this->codeType = $codeType;

        return $this;
    }

    public function getArea(): ?int
    {
        return $this->area;
    }

    public function setArea(int $area): self
    {
        $this->area = $area;

        return $this;
    }

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(float $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getSellDay(): ?string
    {
        return $this->sellDay;
    }

    public function setSellDay(string $sellDay): self
    {
        $this->sellDay = $sellDay;

        return $this;
    }

    public function getSellMonth(): ?string
    {
        return $this->sellMonth;
    }

    public function setSellMonth(string $sellMonth): self
    {
        $this->sellMonth = $sellMonth;

        return $this;
    }

    public function getSellYear(): ?string
    {
        return $this->sellYear;
    }

    public function setSellYear(string $sellYear): self
    {
        $this->sellYear = $sellYear;

        return $this;
    }
}
