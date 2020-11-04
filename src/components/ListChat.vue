<template>
    <div v-if="usersOnline.username !== idUsers " class=" py-auto col-12 mx-3 hoverChat" style="min-height:12vh;max-height: 12vh;cursor:pointer;" @click="selectTo(usersOnline.username)">
            <div class="d-flex " style="height: 100% "  >
              <img
              v-if="usersOnline.image === '' "
                class="my-auto"
                style="width: 64px; height: 64px; border-radius: 20px"
                src="..\assets\img\default.jpg"
              />
              <img v-else
                class="my-auto"
                style="width: 64px; height: 64px; border-radius: 20px"
                :src="`${URL}/${usersOnline.image}`"
              />
              <div class="ml-3 mt-2 d-flex flex-column">
                <small
                  class="mr-auto mt-2 font-weight-bold"
                  style="font-size: 16px"
                >
                  {{usersOnline.username}}
                </small>
                <small
                  class="mr-auto mt-2 text-truncate"
                  style="
                    font-size: 14px;
                    color: #7e98df;
                    min-width: 170px;
                    max-width: 170px;
                  "
                >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt laboriosam ullam nesciunt nulla totam. Facilis, sit? Sint veritatis, deserunt similique non sapiente dolorem ratione quidem omnis quam nobis voluptatem animi.
                </small>
              </div>
              <div class="ml-3 d-flex flex-column">
                <small class="mr-auto mt-2" style="font-size: 16px">
                  15:20
                </small>
                <span
                  class="ml-auto mt-2"
                  style="
                    text-align: center;
                    height: 25px;
                    width: 25px;
                    background-color: #7e98df;
                    border-radius: 50%;
                    display: inline-block;
                  "
                  ><small style="font-size: 14px" class="text-white"
                    >2</small
                  ></span
                >
              </div>
            </div>
          </div>
</template>

<style scoped>
.hoverChat:hover{
background-color: rgb(200, 200, 206);
}
</style>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      idUsers: localStorage.getItem('username')
    }
  },
  props: ['usersOnline'],
  methods: {
    ...mapActions({
      gantiData: 'auth/onClickChat'
    }),
    selectTo (id) {
      this.gantiData(id)
      id = this.gantiData
    }
  }
}
</script>
