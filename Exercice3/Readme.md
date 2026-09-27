# Exercice 3 — Formulaire interactif

Un formulaire de renseignements qui permet de pratiquer les champs HTML, la validation et la lecture des données avec JavaScript.

## Objectifs

- Utiliser des champs texte et numérique, des boutons radio, des cases à cocher, une liste déroulante et une zone de commentaire.
- Valider les informations avant de traiter le formulaire.
- Récupérer les valeurs avec l’API `FormData`.
- Afficher les données saisies sous forme JSON.

## Fonctionnement

1. Renseignez le nom, l’âge, le sexe, le pays et un commentaire.
2. Cochez au moins un loisir. Cette règle est vérifiée par JavaScript.
3. Cliquez sur **Envoyer**.
4. En cas de validation, un message de confirmation et les données du formulaire apparaissent sous les champs. Les données sont aussi visibles dans la console du navigateur.
5. Cliquez sur **Réinitialiser** pour vider les champs.

Les champs obligatoires sont également contrôlés par la validation native du navigateur. Le formulaire ne transmet pas les données à un serveur.

## Fichiers

- [`Exercice3.html`](Exercice3.html) — champs du formulaire, messages et boutons.
- [`Exercice3.css`](Exercice3.css) — mise en page et styles des champs et boutons.
- [`Exercice3.js`](Exercice3.js) — validation des loisirs, collecte et affichage des données.

## Lancer l’exercice

Ouvrir `Exercice3.html` dans un navigateur. Aucune installation ni dépendance supplémentaire n’est nécessaire.

## À essayer

Ajoutez un loisir, modifiez les options de pays ou adaptez les données affichées. Testez également l’envoi sans remplir un champ obligatoire, puis sans sélectionner de loisir.
