/*new Vue({
  el: '#app',
  data(){
    return{
      form:{
        name: null,
        pwd: null
      }
    }
  },
  methods:{
    submitForm(){
      const nameIsValid = !!this.form.name
      const pwdIsValid = !!this.form.pwd

      const formIsValid = nameIsValid && pwdIsValid
      if(formIsValid){
        console.log('login succesful', this.form)
      }else{
        console.log('tu es un échec')
      }
    }
  }
})*/