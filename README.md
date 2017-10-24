# session-8
Javascript : séparer mise en forme, template, logique et données

# Positionnement en flexbox, let's play

Le positionnement en CSS est complexe. C'est pour cela que l'utilisation d'un framework CSS et d'une grille est recommandée. Mais depuis peu, les designers web ont un nouvel outil à leur disposition : Flexbox.

Ce sont de nouvelles propriétés CSS qui modifient la façon de voir les blocs, en permettant des alignements réguliers en 2D, avec une gestion automatique des espacements.

Bootstrap v4 utilise Flexbox. Pour mieux comprendre les possibilités, réalisez les 10 premiers exercice de ce petit jeu : [Flexbox Froggy](http://flexboxfroggy.com/)

# Javascript

Si on récapitule ce que l'on a appris : 

- HTML : la structure de la page
- CSS : la mise en forme

Cela permet une séparation du contenu et de la mise en forme. Mais il manque une brique : la logique, ou l'interactivité.

Pour l'interactivité, nous allons ajouter un 3ème langage : le Javascript.

Le Javascript s'écrit : 
- soit dans la page .html entre des balises `<script></script>`
- soit dans un fichier séparé nommé par exemple `app.js` et appelé depuis le HTML de la manière suivante : 
`<script src="./app.js"></script>`

## Comment ça marche ?

Lorsqu'on visite une page web, le navigateur charge les éléments dans leur ordre d'apparition dans le code HTML.

Généralement, cela donne : 

1. Les feuilles de styles CSS
2. Le contenu HTML
3. Les scripts Javascript

Pour modifier la page, le Javascript va cibler un ou plusieurs éléments grâce à leur nom, à leur identifiant, ou à leurs classes.

En Vanilla Javascript, cela donne : 
```js
	document.getElementById('monparagraphe').textContent = 'Un nouveau contenu';
```

Avec JQuery, une collection d'outils très utiles pour le Javascript, cela donne : 
```js
	$('#monparagraphe').text('Un nouveau contenu');
```

## Mais si on écrit dans le Javascript, cela ne casse t-il pas la séparation entre le contenu, la logique et la mise en forme ?

Si. C'est pourquoi nous allons également séparer le contenu de la structure, et utiliser un framework Javascript : Vue.js

Ainsi, notre application web moderne aura 4 composants : 

- index.html : La structure, ou template, en HTML
- styles.css : Nos styles personnalisés en CSS
- app.js : La logique de notre application, en Javascript
- Les données : Le contenu de l'application, en JSON ou dans un objet dans le Javascript

Vue.js fera donc office de lien entre les données, la logique, et le contenu.

Vous pouvez observer le fichier Javascript de ce projet qui reproduit le CV fait la semaine dernière. Un objet `data` contient tout le contenu de notre CV.

Dans le fichier HTML, au lieu d'y trouver du texte, il y a des références à l'objet `data`.

```vue
<p>{{ name }}</p>
```

Il y a également beaucoup moins de code, car là où un élément était répété, il y a maintenant une boucle sur un tableau javascript.

```vue
<ul>
	<li v-for="skill in skills">{{ skill }}</li>
</ul>
```

En guise d'exercice, forkez ce projet et personnalisez le CV avec votre profil. Si vous supprimez ou ajoutez des éléments de tableaux (expérience ou formation), le markup HTML sera automatiquement ajouté.

Désormais, vous pouvez travailler le côté éditorial et le côté développement de façon séparée.

Par exemple, ajoutez un logo pour chaque expérience et formation.

1. Dans le fichier app.js, ajoutez une propriété `logo: 'lemonde.jpg'` pour chaque "item" des deux tableaux
2. Dans le fichier HTML, ajoutez une image `<img class="img-fluid" :src="experience.logo">` dans chacune des deux boucles

Et le tour est joué