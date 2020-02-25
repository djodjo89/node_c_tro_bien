# node_c_tro_bien
Apprends les bases de nodejs et crée une api dans laquelle on peut aller taper (de façon non violente cela va de soit)

## Apprends nodejs
https://nodejs.org/en/
Fais le tuto learnyounode https://nodeschool.io/, il devrait te donner toutes les bases nécessaires pour terminer le test sans les bonus

## Fais ton serveur
Il doit disposer:
 - D'une route get /hello-world qui affiche un message de bienvenue
 - D'une route post /character à laquelle tu envoies un prénom et qui te renvoie un json créé à partir d'un fichier (du type que tu veux SAUF json) que tu parses pour retrouver les informations correspondant au character recherché. Le format du fichier est libre mais tu peux par exemple faire un csv de la forme:
 
name;age;address
"Bidule";18;"4 Rue du machin"

Je te conseille très fortement d'utiliser Postman pour faire tes requêtes post, autrement tu seras obligé de faire un formulaire et ça risque de te prendre plus de temps que d'apprendre à utiliser le logiciel.
Si tu n'y arrives vraiment pas, tu peux passer le nom en paramètre get (mais ce n'est pas le but).

Ton projet devra utiliser les librairies express et fs de node (ou des équivalents), pouvoir répondre à des requêtes http et faire appel à des callbacks (de toute façon tu en auras besoin pour parser le fichier).

Le but est que tu écrives peu de code mais que tu assimiles les concepts de base de node, n'hésite donc pas à t'attarder dessus et à faire des recherches, lire des articles et faire des tests, la propreté de ton code sera très peu jugée, il faut juste que tu montres que tu as bien acquis les notions dont je parle ci-dessus et que tu puisses reproduire ce que tu as fait.

## Bonus
Pour finir tu peux améliorer le projet en rajoutant (par ordre d'importance et uniquement si tout le reste a été fait):
- TypeScript, type toutes les données de ton code et crée des objets selon ton inspiration (Character, Router, App, etc.)
- Un SGBD parmi les trois suivants: PostgreSQL, MySQL, MongoDB
- Docker, essaye de lancer ton app grâce à un Dockerfile puis grâce à un docker-compose
- Un formulaire fait avec une app ReactJS elle-même dockerisé
