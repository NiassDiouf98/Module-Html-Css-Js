# Exercice 2 — Carte de profil interactive

Une carte de profil stylisée pour pratiquer la sélection d’éléments HTML et la gestion des événements en JavaScript.

## Objectifs

- Construire une carte de profil avec une image et du texte.
- Sélectionner des éléments HTML depuis JavaScript.
- Modifier le contenu d’une page après un clic.
- Ajouter des effets visuels avec CSS.

## Fonctionnalités

| Action | Résultat |
| --- | --- |
| Cliquer sur la carte | Une alerte indique que la carte a été sélectionnée. |
| Cliquer sur **Clique ici pour voir la description** | Le texte de la profession est remplacé par une description. L’alerte de la carte s’affiche également, car le clic se propage jusqu’à celle-ci. |
| Survoler la carte | La couleur de fond de la carte change. |
| Utiliser les boutons de navigation | Accès à l’exercice 1, à la page principale ou à l’exercice 3. |

## Fichiers

- [`Exercice2.html`](Exercice2.html) — structure de la carte et liens de navigation.
- [`Exercice2.css`](Exercice2.css) — mise en page, couleurs et effets au survol.
- [`Exercice2.js`](Exercice2.js) — mise à jour de la description et alerte au clic.
- [`cheikh.JPG`](cheikh.JPG) — image affichée sur la carte.

## Lancer l’exercice

Ouvrir `Exercice2.html` dans un navigateur. Garder `cheikh.JPG` dans le même dossier pour afficher correctement la photo. Aucune installation supplémentaire n’est nécessaire.

## À essayer

Modifiez le texte du profil ou le contenu affiché par le bouton. Vous pouvez aussi tester `event.stopPropagation()` pour empêcher le clic sur le bouton de déclencher l’alerte de la carte.
