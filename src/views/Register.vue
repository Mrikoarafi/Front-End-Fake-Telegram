<template>
  <div class="container-fluid">
    <div class="row" style="min-height: 100vh">
      <div
        class="col-12 col-lg-4 m-lg-auto responsiveDisplay"
      >
        <div class="row mx-1 my-2">
          <div class="col-12 text-center py-4">
            <small style="color: #7e98df; font-size: 27px">Register</small>
          </div>
          <div class="col-12">
            <small style="font-size: 15px">Let’s create your account!</small>
          </div>
          <div class="col-12 pl-0 pr-0">
            <form @submit.prevent="registerUser()">
              <div class="col-12">
                <div class="md-form">
                  <input
                    required
                    v-model="form.username"
                    type="text"
                    id="nama"
                    class="form-control"
                  />
                  <label for="nama">Nama </label>
                </div>
                <div class="md-form">
                  <input
                    required
                    type="email"
                    v-model="form.email"
                    id="email"
                    class="form-control"
                  />
                  <label for="email">Email </label>
                </div>
                <div class="md-form input-with-post-icon mb-n4">
                  <i
                    @click="seePassword"
                    class="fas fa-eye input-prefix"
                    style="pointer-events: initial; cursor: pointer"
                  ></i>
                  <input
                    required
                    v-model="form.password"
                    type="password"
                    id="myInput"
                    class="form-control"
                  />
                  <label for="myInput">Password </label>
                </div>
                <br />
                <button
                  style="background: #7e98df; border-radius: 70px"
                  class="btn col-12 text-center mx-auto mt-4 py-2 mb-4 text-white"
                  type="submit"
                >
                  <small class="text-capitalize" style="font-size: 16px">
                    Register</small
                  >
                </button>
                <div class="row">
                  <div class="col-3"><hr /></div>
                  <div
                    class="col-6 text-center mb-4 text-muted"
                    style="font-size: 18px"
                  >
                    <small>Register with</small>
                  </div>
                  <div class="col-3"><hr /></div>
                </div>
                <div>
                  <span
                    class="btn col-12 mb-4 text-info py-2 mx-auto"
                    style="
                      background: #ffffff;
                      box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0),
                        0 2px 10px 0 rgba(0, 0, 0, 0.1);
                      border: 1px solid #7e98df;
                      box-sizing: border-box;
                      border-radius: 70px;
                    "
                  >
                    <img class="ml-n3 mr-2" src="../assets/img/Vector.png" />
                    <span style="color: #7e98df; font-size: 16px">Google</span>
                  </span>
                </div>
                <div class="mt-3 mb-3 text-center">
                  <small style="font-size: 14px">
                    Already account?
                    <router-link
                      to="/login"
                      class="text-decoration-none"
                      style="color: #7e98df"
                      >Login</router-link
                    >
                  </small>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      form: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      actionRegister: 'auth/registrasi'
    }),
    registerUser () {
      this.actionRegister(this.form)
        .then((response) => {
          console.log(response)
          if (response === 'Sukses register') {
            Swal.fire(
              'Success',
              'Sukses,silahkan cek email anda.',
              'success'
            )
            this.$router.push({
              path: '/login'
            })
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${response}`
            })
          }
        })
        .catch((err) => {
          alert(err)
        })
    },
    seePassword () {
      var x = document.getElementById('myInput')
      if (x.type === 'password') {
        x.type = 'text'
      } else {
        x.type = 'password'
      }
    }
  }
}
</script>

<style>
.container-fluid {
  font-family: "Rubik", sans-serif;
}
.responsiveDisplay{
  background: #ffffff;
  box-shadow: 0px 20px 20px rgba(126, 152, 223, 0.05);
  border-radius: 30px;
}

@media screen and (max-width: 550px){
            .responsiveDisplay{
border-radius: 0px;}
}
</style>
