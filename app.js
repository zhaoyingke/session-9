var app = new Vue({
  el: '#app',
  data: {
    quiz: quiz, // Références aux questions du quiz
    current: 0, // Numéro de la question en cours
    success: null, // null si pas de réponse, true si succès, false si erreur
    score: 0 // Incrémentation du score final
  },
  computed: {
    step: function step () {
      // Renvoie l'objet de la question en cours
      return this.quiz[this.current];
    }
  },
  methods: {
    submitButton: function submitButton (answer) {
      // Modifie la propriété succès en fonction de la réponse (QCM)
      var correction = this.step.choices[this.step.answer];

      // ******* Ecris ici la condition nécessaire
    },
    submitText: function submitText () {
      // Modifie la propriété succès en fonction de la réponse (réponse libre)
      var answer = this.$refs.textInput.value;
      var correction = this.step.answer;

      // ******* Ecris ici la condition nécessaire
    },
    nextQuestion: function nextQuestion () {
      // Incrémente le score, réinitialise la propriété succès, passe à la question suivante

      // ******* Ecris ici les actions et la condition nécessaires
    },
    buttonClasses: function buttonClasses (value) {
      // Renvoie les classes pour colorer les bouttons QCM en fonction de la réponse
      // Ne pas modifier :)
      var correction = this.step.choices[this.step.answer];
      if (this.success === true) {
        if (correction === value) {
          return 'btn-success';
        } else {
          return ''
        }
      }
      if (this.success === false) {
        if (correction === value) {
          return 'btn-outline-success';
        } else {
          return 'btn-outline-danger';
        }
      }
      return 'btn-outline-dark';
    }
  }
});