

<template>
  <div class="container">
    <h1 class="title">Connexion</h1>
    <form @submit="onSubmit" class="add-form">
      <div class="form-control">
        <label>Nom d'utilisateur</label>
        <input type="text" v-model="username" name="username"
          placeholder="Entrez votre nom d'utilisateur"
        />
      </div>
      <div class="form-control">
        <label>Prénom </label>
        <input type="text" v-model="firstName" name="firstName"
          placeholder="Entrez votre prénom"
        />
      </div>
      <div class="form-control">
        <label>Nom </label>
        <input type="text" v-model="lastName" name="lastName"
          placeholder="Entrez votre nom"
        />
      </div>
      <div class="form-control">
        <label>Email</label>
        <input type="password" v-model="email" name="email"
          placeholder="Entrez votre courriel"
        />
      </div>
      <div class="form-control">
        <label for="department">Choisissez votre département:</label>
            <select name="Département" id="departement">
            <option value="info">Informatique</option>
            <option value="archi">Architecture</option>
            <option value="med">Science</option>
            </select>
      </div>
      <div class="form-control">
        <label>Mot de passe</label>
        <input type="password" v-model="pwd" name="pwd"
          placeholder="Entrez votre mot de passe"
        />
      </div>
       <div class="form-control">
          <p>{{errorMessage}}</p>
       </div>
      <input type="submit" value="Se connecter" class="btn btn-block" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
function getUserType(username) {
  if (username.startsWith("E")) {
    return "student";
  } else if (username.startsWith("M")) {
    return "monitor";
  } else if (username.startsWith("S")) {
    return "supervisor";
  } else if (username.startsWith("G")) {
    return "internshipManager";
  }
}
export default {
  name: "SignupSupervisor",
  inheritAttrs: false,
  data() {
    return {
      username: "",
      firstName: "",
      lasstName: "",
      email: "",
      department: "",
      pwd: "",
      errorMessage: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (!this.username || !this.firstName || !this.lasstName || !this.email || !this.pw) {
        this.errorMessage = "Erreur! Veillez remplir tous les champs!"
        return;
      } else {
        axios
          .get("http://localhost:9090/signUp/supervisor")
          .then(function (response) {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error)
            this.errorMessage = "Échec de connexion"
          });
      }
    },
  },
};
</script>

<style>

</style>