var app = new Vue({
  el: '#app',
  data: {
    current: 0,
    success: null,
    quiz: quiz,
    score: 0
  },
  computed: {
    step: function step () {
      return this.quiz[this.current];
    }
  },
  methods: {
    submitButton: function submitButton (answer) {
      var correction = this.step.choices[this.step.answer];
      if (answer === correction) {
        this.success = true;
      } else {
        this.success = false;
      }
    },
    submitText: function submitText () {
      var answer = this.$refs.textInput.value;
      var correction = this.step.answer;
      if (answer === correction) {
        this.success = true;
      } else {
        this.success = false;
      }
    },
    nextQuestion: function nextQuestion () {
      if (this.success) this.score++;
      this.success = null;
      this.current++;
    },
    buttonClasses: function buttonClasses (value) {
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