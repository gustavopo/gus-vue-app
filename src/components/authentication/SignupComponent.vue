<template>
  <v-card class="mx-auto" max-width="800">
    <v-container>
      <v-row>
        <v-col>
          <h1>Signup</h1>
          <v-form @submit.prevent="onSubmit">
            <v-text-field label="Email" type="email" v-model="email" id="email"></v-text-field>
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>

            <v-text-field
              v-model="confirmPassword"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show2 ? 'text' : 'password'"
              name="input-10-1"
              label="Confirm Password"
              hint="Should be the same as the Password"
              counter
              @click:append="show2 = !show2"
            ></v-text-field>
            <!--
          <v-autocomplete
            label="Which browser do you use?"
            :items="browsersList"
            v-model="browsers"
          ></v-autocomplete>
          <v-file-input label="Attach profile picture" v-model="picture"></v-file-input>
          <v-text-field label="Birthday" readonly></v-text-field>
          <v-date-picker v-model="birthday"></v-date-picker>
            <v-checkbox label="Agree to terms & conditions"></v-checkbox>-->
            <v-btn type="submit" color="primary">Submit</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      show2: false,
      /* rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters'
      },*/

      //fields
      email: '',
      password: '',
      confirmPassword: '',
      browsers: '',
      picture: '',
      birthday: '',
      browsersList: ['Chrome', 'Firefox', 'Safari', 'Edge']
    }
  },
  methods: {
    onSubmit() {
      const formData = {
        email: this.email,
        //age: this.age,
        password: this.password,
        confirmPassword: this.confirmPassword
        //country: this.country,
        //hobbies: this.hobbyInputs.map(hobby => hobby.value),
        //terms: this.terms
      }
      console.log(formData)
      this.$store.dispatch('signup', formData)
      /*    this.$store.dispatch('signup', {
        email: formData.email,
        password: formData.password
      })*/
    }
  }
}
</script>
