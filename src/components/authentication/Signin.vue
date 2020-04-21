<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Login</h1>
        <v-form @submit.prevent="onSubmit">
          <v-text-field id="email" label="Email" type="email" v-model="email"></v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Normal with hint text"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>

          <v-btn type="submit" color="primary">Submit</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      show1: false,

      /* rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters'
      },*/

      //fields
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    onSubmit() {
      const formData = {
        email: this.email,
        //age: this.age,
        password: this.password
        //country: this.country,
        //hobbies: this.hobbyInputs.map(hobby => hobby.value),
        //terms: this.terms
      }
      console.log(formData)
      this.$store.dispatch('login', formData)
      /*this.$store.dispatch('login', {
        email: formData.email,
        password: formData.password
      })*/
    }
  }
}
</script>
