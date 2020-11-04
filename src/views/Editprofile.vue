<template>
  <div class="container-fluid bg-white" style="min-height:100vh;">
    <div class="row">
      <div class="avatar-image mt-5 text-center mx-auto mt-lg-5 sizeImage ">
          <img v-if="getDetailUser.detailUser.image === null " class="shadow-sm position-relative" src="../assets/img/default.jpg" />
          <img  v-else class="position-relative shadow-sm "
          :src="`http://3.89.119.22:2040/${getDetailUser.detailUser.image}`"
        />
         <label for="file-input" style="cursor:pointer;">
           <span class="dot position-absolute ml-n5 mt-5"  >
        <b-icon  style="color:white;" class="p-2" font-scale="3" icon="camera"></b-icon>
          </span>
        </label>
        <input  type="file" id="file-input" class="d-none"   @change="uploadImage($event)"/>

        <!-- <input  type="file" class="position-absolute"   @change="uploadImage($event)"/> -->
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 col-lg-4 "><form class="mx-3 mx-lg-5">
        <div class="md-form input-with-post-icon">
          <small class="form-text text-muted">Name</small>
          <i class="fas fa-pen input-prefix" style="color:#7E98DF"></i>
          <input
            type="text"
            class="form-control"
            v-model="getDetailUser.detailUser.username"
            required
          />
        </div>
        <div class="md-form input-with-post-icon">
          <small class="form-text text-muted">Nickname</small>
           <i class="fas fa-pen input-prefix" style="color:#7E98DF"></i>
          <input
            type="text"
            class="form-control"
            v-model="getDetailUser.detailUser.inisial_name"
            required
          />
        </div>
        <div class="md-form input-with-post-icon">
          <small class="form-text text-muted">Status</small>
          <i class="fas fa-comment input-prefix" style="color:#7E98DF"></i>
          <input
            type="text"
            class="form-control"
            v-model="getDetailUser.detailUser.bio"
            required
          />
        </div>
        <div class="row justify-content-center mt-2">
              <button class="mb-2 btn btn-block  text-capitalize text-white" style="background-color:#7E98DF;" @click.prevent="update()">
                Update Profile
              </button>
              <button class="btn btn-block text-white text-capitalize" style="background-color:#7E98DF;" @click="chatlist()">
                Back to Home
              </button>
        </div>
      </form></div>

    </div>
  </div>
</template>

<script>

import Swal from 'sweetalert2'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'editprofile',
  components: {},
  data () {
    return {
      id: localStorage.getItem('id'),
      image: localStorage.getItem('image'),
      URL: process.env.VUE_APP_URL
    }
  },
  computed: {
    ...mapGetters({
      getDetailUser: 'auth/getDetailUser'
    })
  },
  methods: {
    uploadImage (event) {
      this.getDetailUser.detailUser.image = event.target.files[0]
      const fd = new FormData()
      fd.append('image', this.getDetailUser.detailUser.image)
      fd.append('username', this.getDetailUser.detailUser.username)
      fd.append('inisial_name', this.getDetailUser.detailUser.inisial_name)
      fd.append('bio', this.getDetailUser.detailUser.bio)
      const id = this.getDetailUser.detailUser.id
      const save = {
        id: id,
        dataUser: fd
      }
      this.actUpdateUser(save)
        .then((result) => {
          if (result === 'Sukses update') {
            this.actgetDetailUser(this.id)
          } else {
            this.actgetDetailUser(this.id)
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${result}`
            })
          }
        }).catch((err) => {
          alert(err.message)
        })
    },
    ...mapActions({
      actgetDetailUser: 'auth/actgetDetailUser',
      actUpdateUser: 'auth/actUpdateUser'
    }),
    onSelectFileedit (event) {
      this.getDetailUser.detailUser.image = event.target.files[0]
    },
    update () {
      const fd = new FormData()
      fd.append('username', this.getDetailUser.detailUser.username)
      fd.append('image', this.getDetailUser.detailUser.image)
      fd.append('inisial_name', this.getDetailUser.detailUser.inisial_name)
      fd.append('bio', this.getDetailUser.detailUser.bio)
      const id = this.getDetailUser.detailUser.id
      const save = {
        id: id,
        dataUser: fd
      }
      this.actUpdateUser(save)
        .then((result) => {
          if (result === 'Sukses update') {
            Swal.fire(
              'Success',
              `${result}`,
              'success'
            )
            this.actgetDetailUser(this.id)
            // window.location = '/chatlist'
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${result}`
            })
            // window.location = '/editprofile'
          }
        }).catch((err) => {
          alert(err.message)
        })
    },
    chatlist () {
      this.$router.push({
        path: '/home',
        query: {
          user: this.getDetailUser.detailUser.username
        }
      })
    }
  },
  mounted () {
    this.actgetDetailUser(this.id)
  }
}
</script>

<style>
.dot {
  background-color:#7E98DF;
  border-radius: 50%;
  display: inline-block;
}
.dot:hover{
  background-color:#667ec0;
}
button:hover{
  background-color: #607dcc !important;
}
.sizeImage img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
</style>
