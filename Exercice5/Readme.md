# Exercice 5 — Thème clair et sombre

Une page minimaliste pour découvrir comment changer l’apparence d’un site et mémoriser une préférence avec JavaScript.

## Objectifs

- Écouter un clic avec `addEventListener`.
- Basculer une classe CSS avec `classList.toggle()`.
- Définir des couleurs à l’aide de variables CSS.
- Enregistrer une préférence dans `localStorage`.

## Fonctionnement

- Le bouton **Changer de mode** alterne entre le thème clair et le thème sombre.
- Une transition adoucit le changement des couleurs.
- Le thème choisi est mémorisé dans le navigateur et restauré à la prochaine ouverture de la page.
- Si aucun choix n’a été enregistré, la page s’affiche en thème clair.

## Fichiers

- [`Exercice5.html`](Exercice5.html) — contenu de la page et bouton de changement de thème.
- [`Exercice5.css`](Exercice5.css) — variables de couleur et styles des deux thèmes.
- [`Exercice5.js`](Exercice5.js) — bascule du thème et mémorisation de la préférence.

## Lancer l’exercice

Ouvrir `Exercice5.html` dans un navigateur. Aucune installation ni dépendance supplémentaire n’est nécessaire. La préférence est conservée dans le stockage local de ce navigateur.

## À essayer

Personnalisez les variables CSS pour modifier les couleurs, ou ajoutez d’autres éléments à la page pour observer leur adaptation au thème choisi.
