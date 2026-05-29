# Portfolio - Publication avec GitHub Pages

Ce depot est configure pour un deploiement automatique sur GitHub Pages via GitHub Actions.

## Etapes de publication

1. Cree un depot GitHub et pousse ce dossier sur la branche `main`.
2. Va dans **Settings > Pages** de ton depot.
3. Dans **Build and deployment**, choisis **Source: GitHub Actions**.
4. Fais un push sur `main` (ou relance le workflow manuellement dans l'onglet **Actions**).

Le workflow `Deploy static site to GitHub Pages` publie ensuite le site automatiquement.

## URL du site

- Depot standard: `https://<ton-user>.github.io/<ton-repo>/`
- Si ton depot s'appelle `<ton-user>.github.io`, alors l'URL est `https://<ton-user>.github.io/`

## Notes

- Les chemins utilises dans `index.html` sont relatifs, donc compatibles GitHub Pages.
- Le fichier `.nojekyll` est present pour eviter tout traitement Jekyll.