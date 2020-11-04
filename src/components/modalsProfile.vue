<template>
  <div>
      <b-modal class="bg-primary text-white" hide-header  :title="`Profile: ${semuaData.username}`" id="seeProfile" hide-footer>
          <div class="row justify-content-center mt-n1  py-2 mx-2" style="background: #7E98DF;">
              <h6 class="my-auto text-white">Profile&nbsp;: {{semuaData.username}}</h6>
          </div>
          <div class="row justify-content-center mt-3" >
              <img v-if="semuaData.image === null" style="width:300px;max-height:300px;" src="..\assets\img\default.jpg" >
              <img v-else style="width:300px;max-height:300px;" :src="`http://3.89.119.22:2040/${semuaData.image}`" >
          </div>
          <div class="row justify-content-center mt-1">
              <h6 v-if="semuaData.inisial_name === null">@{{semuaData.username}}</h6>
              <h6 v-else>@{{semuaData.inisial_name}}</h6>
                 </div>
                 <div class="row justify-content-center mt-1">
              <p>Join on&nbsp;:&nbsp;{{semuaData.created_at}}</p></div>

          <div class="row mt-n2 justify-content-center">
                  <p v-if="semuaData.bio === null" >Status : &nbsp; &nbsp; <span>&nbsp;&nbsp;&nbsp;-</span></p>
                  <p v-else>Status : &nbsp; &nbsp; <span>&nbsp;&nbsp;&nbsp;{{semuaData.bio}}</span></p>
        </div>
        <div class="row justify-content-center">
            <button class="btn mt-3 border-0 text-white" style="background: #7E98DF;" @click="$bvModal.hide('seeProfile')">Close</button>
        </div>
      </b-modal>
  </div>
</template>

<script>
export default {
  props: ['semuaData']
}
</script>

<style scoped>
</style>
