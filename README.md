# session-9
Javascript : coder la logique d'une application

Vous savez coder un site web. Ou plutôt, vous savez afficher des éléments sur une page web, les positionner, leur appliquer un style, et même séparer vos styles, votre template, et votre contenu.

En revanche, vous ne savez pas encore utiliser les actions de l'utilisateur, et les transformer en modifications sur la page. Pour cela, il vous faut coder **la logique de l'application**.

Tout se fait en javascript, et Vue.js va nous aider.

# Petits rappels utiles

## Variables et conditions

Une **variable javascript** s'écrit comme ceci : `var maVariable = 1;`

Si je veux vérifier que maVariable contient bien la valeur 1, je peux écrire cette condition : 

```js
if (maVariable === 1) {
  /* Éxécuter quelque chose ici */
}
```

Je peux même définir une action si maVariable ne contient pas la valeur 1 : 

```js
if (maVariable === 1) {

} else {
  /* Éxécuter quelque chose ici
}
```

Cela s'appelle **une condition**.

## Fonctions

Une **fonction** permet d'éxécuter un ensemble d'instruction, et éventuellement renvoie une valeur. Elle peut prendre en paramètre des **arguments**, mais c'est optionnel.

```js
function somme(number1, number2) {
	return number1 + number2;
}

var maVariable = somme(2, 3);
```

```js
function eteindreLaLumiere() {
	/* Ensemble d'instructions pour éteindre la lumière */
}

eteindreLaLumiere();
```

# Avec Vue

Avec Vue.js, il est possible de définir des **conditions** et des **fonctions** dans le code HTML. Normalement, cela devrait être une mauvaise pratique. Mais puisque Vue est un framework **réactif**, c'est à dire qui maintient constamment les conditions et les fonctions à jour, cela va nous être utile.

```html
<button v-if="maVariable === 1">Mon Bouton</button> <!-- Ce bouton ne s'affiche que quand maVariable est égale à 1 -->

<button v-on:click="maVariable = 2">Éteindre la lumière</button> <!-- Ce bouton modifiera la valeur de maVariable à 2 lorsqu'il sera cliqué -->

<button v-on:click="eteindreLaLumiere">Éteindre la lumière</button> <!-- Ce bouton lancera la fonction eteindreLaLumiere lorsqu'il sera cliqué. -->
```

Mais pour que cela marche, il faut écrire le code dans Vue au bon endroit. Encore une fois, **la vie est plus simple quand on lit la documentation**.

```js
var app = new Vue({
  el: '#app',
  data: { /* Ceci est l'endroit où je peux définir mes variables. Elles deviennent en fait des propriétés */
    maVariable: 1,
    maSecondeVariable: 2,
    monObjet: {
     value: 4
    }
  },
  computed: { /* Ceci est l'endroit où je peux définir des variables dynamiques. Elles sont constamment réactualisées. */
    maTroisiemeVariable: function maTroisiemeVariable() {
    	return this.maVariable + this.maSecondeVariable;
    }
  },
  methods: { /* Ceci est l'endroit où je peux définir des actions à exécuter */
    eteindreLaLumiere: function eteindreLaLumiere() {
      /* Toujours pas éteinte cette lumière ? */
    },
    somme(value1, value2) {
    	return value1 + value2;
    }
  }
});
```

Remarque importante : dans les fonctions computed et methods, **le mot-clé this** est une référence à l'objet Vue. Il contient toutes les propriétés de data, toutes les propriétés dynamiques de computed, et toutes les fonctions de methods.

Dans mon code HTML, je peux donc écrire ceci : 

```html
<html>
  <head></head>
  <body>
  	<div id="app">
  		<div>1 + 2 = {{ somme(1, 2) }}</div>
  		<div v-if="maTroisiemeVariable === 3">Ma troisième variable égale 3</div>
  		<button v-on:click="maVariable = 2">Click</button>
  	</div>
  </body>
</html>
```