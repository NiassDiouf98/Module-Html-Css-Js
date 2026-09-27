# Module 2 — HTML, CSS et JavaScript

> Un parcours pratique pour construire des pages web, les styliser et leur donner vie avec JavaScript.

La page d’accueil rassemble cinq exercices progressifs et un mini-projet. Chaque activité peut être ouverte directement dans un navigateur, sans installation ni dépendance.

## Parcours

| Activité | Notions et fonctionnalités | Accès |
| --- | --- | --- |
| **Exercice 1 — Interactions** | Événements de clic et de survol, modification du texte et du style, mode sombre. | [Ouvrir l’exercice](Exercice1/Exercice1.html) · [Détails](Exercice1/Readme.md) |
| **Exercice 2 — Carte de profil** | Sélection d’éléments, événements JavaScript et mise à jour de contenu. | [Ouvrir l’exercice](Exercice2/Exercice2.html) · [Détails](Exercice2/Readme.md) |
| **Exercice 3 — Formulaire** | Champs HTML, validation, collecte et affichage des données en JSON. | [Ouvrir l’exercice](Exercice3/Exercice3.html) · [Détails](Exercice3/Readme.md) |
| **Exercice 4 — Liste dynamique** | Création et ajout d’éléments au DOM à partir d’une saisie. | [Ouvrir l’exercice](Exercice4/Exercice4.html) · [Détails](Exercice4/Readme.md) |
| **Exercice 5 — Thèmes** | Bascule clair/sombre, variables CSS et mémorisation de la préférence. | [Ouvrir l’exercice](Exercice5/Exercice5.html) · [Détails](Exercice5/Readme.md) |
| **Mini-projet — To-Do List** | Gestion des utilisateurs et des tâches, suivi d’avancement, filtres et stockage local. | [Ouvrir le projet](mini-project/index.html) · [Détails](mini-project/Readme.md) |

## Démarrage

Ouvrez [index.html](index.html) dans un navigateur pour accéder à la page d’accueil et choisir une activité. Vous pouvez aussi ouvrir directement le fichier HTML d’un exercice ou du mini-projet.

Le mini-projet utilise `localStorage` : les utilisateurs et tâches restent enregistrés dans le navigateur courant après rechargement. Les données ne sont pas envoyées à un serveur.

## Organisation

```text
.
├── index.html                 # Page d’accueil du module
├── global.css                 # Styles de la page d’accueil
├── main.js                    # Script principal (actuellement vide)
├── Exercice1/                 # Événements et styles dynamiques
├── Exercice2/                 # Carte de profil interactive
├── Exercice3/                 # Formulaire et validation
├── Exercice4/                 # Liste dynamique
├── Exercice5/                 # Thème clair et sombre
└── mini-project/              # Application To-Do List
	├── index.html
	├── assets/
	├── css/
	└── js/
```

Chaque dossier d’exercice contient sa page HTML, sa feuille CSS, son script JavaScript et un README dédié.

## Compétences travaillées

- Structurer une page avec HTML sémantique et des formulaires.
- Mettre en forme une interface avec CSS et l’adapter aux interactions.
- Manipuler le DOM et écouter les événements utilisateur.
- Valider et traiter des données côté navigateur.
- Conserver des préférences et des données avec `localStorage`.
