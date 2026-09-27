# To-Do List — Gestion d’équipe

Une petite application web pour organiser des tâches et les associer à des utilisateurs. L’interface permet de gérer les deux listes et conserve les données dans le navigateur.

## Fonctionnalités

- **Utilisateurs** : ajout, modification, archivage et restauration.
- **Tâches** : ajout, modification, assignation à un utilisateur et suppression avec confirmation.
- **Suivi** : marquer une tâche comme terminée ou la rouvrir ; son statut est conservé dans le navigateur.
- **Filtre** : afficher toutes les tâches ou uniquement celles d’un utilisateur actif. La vue complète inclut aussi les tâches non assignées.
- **Liste des tâches** : affichage des tâches, de leur statut et de leur utilisateur assigné ; les plus récentes apparaissent en premier.
- **Archives** : affichage des utilisateurs archivés et restauration depuis la liste d’archives.
- **Thème** : bascule entre l’apparence claire et sombre.
- **Persistance locale** : utilisateurs et tâches sont enregistrés dans `localStorage` et restent disponibles après rechargement dans le même navigateur.

Les tâches peuvent rester sans utilisateur assigné. Archiver un utilisateur retire son assignation des tâches associées. Le thème n’est pas conservé après rechargement.

## Utilisation

1. Ouvrez `index.html` dans un navigateur.
2. Cliquez sur **Ajouter un utilisateur** et saisissez un nom.
3. Cliquez sur **Ajouter une tâche**, donnez-lui un titre et, si souhaité, choisissez un utilisateur.
4. Utilisez les actions de chaque ligne pour terminer ou rouvrir une tâche, la modifier, l’assigner ou la supprimer. Toute suppression de tâche ou archivage d’utilisateur demande une confirmation.
5. Cliquez sur **Archives** pour consulter les utilisateurs archivés et les restaurer.
6. Utilisez le bouton lune/soleil pour changer le thème.
7. Choisissez un utilisateur dans le filtre au-dessus de la liste des tâches pour n’afficher que ses tâches.

## Fichiers

- [`index.html`](index.html) — structure de l’application, tableaux et fenêtres de saisie.
- [`css/style.css`](css/style.css) — mise en page, composants et styles responsive.
- [`js/app.js`](js/app.js) — gestion des utilisateurs, tâches, fenêtres modales et stockage local.
- [`assets/archive-icon.png`](assets/archive-icon.png) — icône du bouton d’archives.

## Stockage

Les données sont enregistrées localement dans le navigateur sous les clés `users` et `tasks`. Elles ne sont pas envoyées à un serveur et ne sont pas partagées entre navigateurs ou appareils. Pour repartir de zéro, effacez le stockage local du site depuis les outils de développement du navigateur.
