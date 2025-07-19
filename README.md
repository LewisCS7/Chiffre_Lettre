# Convertisseur – Chiffres en lettres

Convertisseur web moderne permettant de transformer un nombre (entier ou décimal) en toutes lettres en français, avec une interface professionnelle et zen.

## Fonctionnalités

- **Conversion instantanée** de nombres (entiers et décimaux, positifs ou négatifs) en lettres françaises.
- **Interface responsive** et épurée, design zen avec dégradés et effets modernes (Tailwind CSS via CDN).
- **Gestion des subtilités linguistiques** :
  - Accords de "cent", "quatre-vingts", suppression de "un mille", pluriels pour "million(s)", "milliard(s)", etc.
  - Cas particuliers : "soixante et onze", "quatre-vingt-un", "vingt et un", etc.
- **Bouton de copie** du résultat dans le presse-papier.
- **Validation** de la saisie et gestion des erreurs utilisateur.
- **Tests unitaires** intégrés (décommenter `runTests();` dans le JS pour les lancer dans la console).
- **Support des très grands nombres** (jusqu'à décillion/décilliard).

## Aperçu

![Aperçu de l'application](https://user-images.githubusercontent.com/0000000/placeholder.png)

## Utilisation

1. Ouvrez `index.html` dans votre navigateur.
2. Saisissez un nombre (ex : `1234,56` ou `-987654321`).
3. Cliquez sur **Convertir en lettres**.
4. Le résultat s'affiche en toutes lettres.
5. Cliquez sur **Copier le résultat** pour le mettre dans le presse-papier.

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
└── README.md          # Ce fichier
```

## Tests unitaires

Pour lancer les tests intégrés :
- Ouvrez la console du navigateur sur la page.
- Décommentez la ligne `runTests();` en bas du fichier JS.
- Rechargez la page : les résultats s'affichent dans la console.

## Déploiement

- Déposez simplement `index.html` sur n'importe quel hébergement statique (GitHub Pages, Netlify, Vercel, etc.).

## Auteur

- [LewisCS7](https://github.com/LewisCS7)

## Licence

MIT
