var app = new Vue({
  el: '#app',
  data: {
    firstName: "Jules",
    lastName: "Bonnard",
    description: "Je suis datajournaliste à l'AFP et j'enseigne le code, le traitement, et la visualisation de données à Sciences Po.",
    photo: "https://pbs.twimg.com/profile_images/899285838516936704/nfeLD7he_400x400.jpg",
    twitter: "julesbonnard",
    github: "julesbonnard",
    mail: "julesbonnard@gmail.com",
    experiences: [{
      dateBegin: "2014",
      dateEnd: "Today",
      name: "Agence France Presse",
      title: "Datajournalist",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }, {
      dateBegin: "Été 2013",
      dateEnd: false,
      name: "Le Monde.fr",
      title: "Data-journalist",
      description: false
    }, {
      dateBegin: "2012",
      dateEnd: "2013",
      name: "Le Dauphiné Libéré",
      title: "Stagiaire et correspondant de presse",
      description: false
    }],
    formations: [{
      dateBegin: "2012",
      dateEnd: "2014",
      name: "Master Journalisme",
      university: "Sciences Po Grenoble"
    }, {
      dateBegin: "2009",
      dateEnd: "2012",
      name: "Bachelor Sciences Politiques",
      university: "Sciences Po Grenoble"
    }],
    languages: ["Anglais"],
    skills: ["Node", "VueJS", "D3js", "SCSS", "HTML"]
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName
    }
  }
})