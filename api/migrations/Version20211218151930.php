<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20211218151930 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE property_sale DROP sell_date');
        $this->addSql('ALTER TABLE property_sale DROP code_departement');
        $this->addSql('ALTER TABLE property_sale DROP code_type');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE property_sale ADD sell_date VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE property_sale ADD code_departement INT NOT NULL');
        $this->addSql('ALTER TABLE property_sale ADD code_type INT NOT NULL');
    }
}
