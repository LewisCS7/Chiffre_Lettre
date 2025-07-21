# Convertisseur de nombres en lettres - PWA

Application web moderne et Progressive Web App (PWA) permettant de transformer instantanément un nombre (entier ou décimal) en toutes lettres en français, avec une interface professionnelle, zen et un arrière-plan dégradé. Possible de l'installer et de l'utiliser hors-ligne.

[![Licence MIT](https://img.shields.io/badge/licence-MIT-blue.svg)](LICENSE)
![Langue](https://img.shields.io/badge/langue-Fran%C3%A7ais-blue)
![Version](https://img.shields.io/badge/version-1.0.0-green)
  

## Fonctionnalités

- **Conversion instantanée** de nombres (entiers et décimaux, positifs ou négatifs) en lettres françaises.
- **Interface responsive** et épurée, design zen avec dégradés et effets modernes (Tailwind CSS via CDN).
- **Gestion des subtilités linguistiques** :
  - Accords de "cent", "quatre-vingts", suppression de "un mille", pluriels pour "million(s)", "milliard(s)", etc.
  - Cas particuliers : "soixante et onze", "quatre-vingt-un", "vingt et un", etc.
- **Boutons de copie et de lecture vocale** du résultat : copie dans le presse-papier et lecture à voix haute (Web Speech API, français).
- **Validation** de la saisie et gestion des erreurs utilisateur.
- **Tests unitaires** intégrés (décommenter `runTests();` dans le JS pour les lancer dans la console).
- **Support des très grands nombres** (jusqu'à décillion/décilliard).

## Aperçu

![Aperçu de l'application](Capture_d'écran.png)

## Utilisation

1. Ouvrez `index.html` dans votre navigateur.
2. Saisissez un nombre (ex : `1234,56` ou `-987654321`) dans le champ prévu.
3. Le résultat s'affiche automatiquement en toutes lettres sous le champ.
4. Cliquez sur l'icône de copie à droite du résultat pour le mettre dans le presse-papier.
5. Cliquez sur l'icône haut-parleur pour écouter le résultat à voix haute (français).

## Exemples

| Nombre         | Résultat en lettres                                 |
|---------------|-----------------------------------------------------|
| 0             | zéro                                               |
| 21            | vingt et un                                        |
| 71            | soixante et onze                                   |
| 80            | quatre-vingts                                      |
| 1234,56       | mille deux cent trente-quatre virgule cinq six      |
| 1000000       | un million                                         |
| 2000000000    | deux milliards                                     |
| -42           | moins quarante-deux                                |

## Technologies

- **Frontend** :
  - HTML5 / CSS3
  - JavaScript (ES6+)
  - Tailwind CSS v4 (via CDN)
- **PWA** :
  - Service Worker
  - Manifest WebApp
  - Icons optimisés
- **APIs Web** :
  - Clipboard API (copie)
  - Web Speech API (synthèse vocale)
  - Web App Manifest API

## Structure du projet

```
Chiffre_Lettre/
├── index.html              # Application principale
├── script.js               # Logique de conversion et interactions
├── style.css               # Styles personnalisés
├── manifest.webmanifest    # Configuration PWA
├── sw.js                   # Service Worker
├── background.jpg          # Image d'arrière-plan
├── icon-192.png            # Icône PWA (192x192)
├── icon-512.png            # Icône PWA (512x512)
└── README.md               # Documentation
```

## Tests unitaires
Pour lancer les tests intégrés :
- Ouvrez la console du navigateur sur la page.
- Décommentez la ligne `runTests();` en bas du fichier JS.
- Rechargez la page : les résultats s'affichent dans la console.

## Notes sur l’interface

- Les boutons de copie et de lecture vocale sont masqués tant qu’aucun résultat n’est affiché, puis apparaissent dynamiquement.
- Le bouton de lecture vocale utilise l’API Web Speech (langue : fr-FR) ; il est désactivé pendant la lecture.

## Déploiement

1. Clonez le dépôt :
```bash
git clone https://github.com/LewisCS7/Chiffre_Lettre.git
cd Chiffre_Lettre
```

2. Options de déploiement :
   - Ouvrez `index.html` directement dans un navigateur
   - Utilisez un serveur local (ex: Live Server dans VS Code)
   - Déployez sur un hébergement statique :
     - GitHub Pages
     - Netlify
     - Vercel
     - Firebase Hosting

3. Pour un déploiement PWA :
   - Utilisez HTTPS
   - Assurez-vous que tous les fichiers sont accessibles
   - Vérifiez le manifest et le service worker

## Contributions

Les contributions sont les bienvenues ! N'hésitez pas à :
- Ouvrir une issue pour signaler un bug
- Proposer des améliorations via une pull request
- Suggérer de nouvelles fonctionnalités

## Auteur

- [Lewis HOUNNAHIN](https://github.com/LewisCS7)

## Licence

MIT
