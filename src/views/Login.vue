<template>
  <div class="container-fluid">
    <div class="row" style="min-height: 100vh">
      <div
        class="col-12 col-lg-4 m-lg-auto responsiveDisplay"
      >
        <div class="row mx-1 my-2">
          <div class="col-12 text-center py-4">
            <small
              style="color: #7e98df; font-size: 27px"
              >Login</small
            >
          </div>
          <div class="col-12">
            <small style="font-size: 15px"
              >Hi, Welcome back!</small
            >
          </div>
          <div class="col-12 pl-0 pr-0">
            <form @submit.prevent="loginUser">

              <div class="col-12">
                <div class="md-form" style="cursor: pointer">
                  <input required v-model="form.email" type="email" id="email" class="form-control" />
                  <label  for="email">Email </label>
                </div>
                <div  class="md-form input-with-post-icon mb-n4">
                  <i
                    @click="seePassword"
                    class="fas fa-eye input-prefix"
                    style="pointer-events: initial; cursor: pointer"
                  ></i>
                  <input required v-model="form.password" type="password" id="myInput" class="form-control" />
                  <label for="password">Password </label>
                </div>
                <router-link to="/forgotpassword"
                  class="float-right mt-5 text-decoration-none"
                  ><small style="font-size: 14px; color: #7e98df"
                    >Forgot password?</small
                  >
                </router-link>
                <br />
                <button
                  style="background: #7e98df; border-radius: 70px"
                  class="btn col-12 text-center mx-auto mt-4 py-2 mb-4 text-white"
                  type="submit"
                >
                  <small
                    class="text-capitalize"
                    style="font-size: 16px"
                  >
                    Login</small
                  >
                </button>
                <div class="row" >
                  <div class="col-3"><hr /></div>
                  <div
                    class="col-6 text-center mb-4 text-muted"
                    style="font-size: 18px"
                  >
                    <small >Login with</small>
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
                <div  class="mt-3 mb-3 text-center">
                  <small style="font-size: 14px">
                    Don't have an account?
                    <router-link to="/register" style="color: #7e98df"
                      class="text-decoration-none"
                      >Sign up</router-link
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
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      actionLogin: 'auth/login'
    }),
    loginUser () {
      this.actionLogin(this.form)
        .then(response => {
          if (response.message === 'Success Login') {
            this.$router.push({
              path: '/home',
              query: {
                email: this.form.email
              }
            })
          } else {
            Swal.fire({
              icon: 'question',
              title: 'Oops...',
              text: `${response.message}`
            })
          }
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.message}`
          })
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

<style  scoped>
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
