# TP-Web-FullStack-Lab
On cherche à développer une application Web avec des composants graphiques avancés capables d’afficher les données relatives aux ventes immobilières en France.

# Mettre en place le Site

`sudo docker-compose up -d`

## Mettre en place la base de donnée

### Trouver l'id du container PHP
`sudo docker ps` pour trouver le container `fullstack_php`

### Rentrer dans le container PHP
`sudo docker exec -it [id container] sh`

vous devrez voir votre console commencer par quelque chose dans le style `/srv/api # ` si c'est la cas vous êtes dans le container de PHP et donc de l'api, c'est ici que tout va se passer pour manipuler l'api.

Normalement pas besoin de créé une migration car vous avez ceux du Git, mais au cas ou si besoin 

dans le container PHP `php bin/console make:migration`

Par contre il est utile à chaque `pull` de d'éxécuté la migration si il y en a une nouvelle.

dans le container PHP `php bin/console doctrine:migrations:migrate`


quand tout ça est fait vous êtes a la fin !

Il reste normalement que une seule commande a faire.

dans le container PHP `php -d memory-limit=-1 bin/console doctrine:fixtures:load`

elle prendra du temps a ce faire ne vous inquiété pas.