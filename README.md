# Convertisseur – Chiffres en lettres

Application web moderne permettant de transformer instantanément un nombre (entier ou décimal) en toutes lettres en français, avec une interface professionnelle, zen et un arrière-plan dégradé.

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

- **HTML5**
- **JavaScript** (logique de conversion embarquée)
- **Tailwind CSS** (CDN, design moderne)

## Structure du projet

```
Chiffre_Lettre/
├── index.html         # Application principale (tout-en-un)
├── background.jpg     # Image d'arrière-plan (optionnelle)
├── style.css          # Feuille de style personnalisée (masquage dynamique des boutons, etc.)
└── README.md          # Ce fichier
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

- Déposez simplement `index.html` (et l'image d'arrière-plan si utilisée) sur n'importe quel hébergement statique (GitHub Pages, Netlify, Vercel, etc.).

## Auteur

- [Lewis HOUNNAHIN](https://github.com/LewisCS7)

## Licence

MIT
