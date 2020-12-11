<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Login</div>
          <div class="card-body">
            <!-- <div v-if="error" class="alert alert-danger">{{error}}</div> -->
            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="form.password"
                  />
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">Login</button>
                </div>
              </div>
            </form>
            <div>
                  <button type="submit" class="btn btn-primary" @click='googleSubmit'>Login as google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { firebase } from '@firebase/app'
import '@firebase/auth'
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      // eslint-disable-next-line
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          //console.log(data)
          this.$router.replace({ path:'/'});
        })
        .catch(err => {
          this.error = err.message;
          Swal.fire({
            title: this.error,
            icon: 'error',
            confirmButtonText: 'OK'
          })
        });
    },
    googleSubmit(){
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        //console.log(result)
        Swal.fire({
              title: 'Confirmed!',
              icon: 'success',
              confirmButtonText: 'OK'
        })
        this.$router.replace({ path:'/'});
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var credential = result.credential;
        // The signed-in user info.
        // var user = result.user;
        // ...
      })
      .catch(function(error) {
        //console.log(error)
      });
        
    }
  }
};
</script>