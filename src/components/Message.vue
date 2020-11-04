<template>
    <div v-if="message.sender !== username" class="pr-0 pr-lg-3 col-12 mb-3">
              <div class="row mt-3 justify-content-end">
                <div class="mr-3 d-flex flex-column">
                  <div
                  class="bgColorResponsive"
                    style="
                      max-width: 400px;
                      border-radius: 35px 10px 35px 35px;
                    "
                  >
                    <div class="mx-4 my-3">
                      <small style="font-size: 14px">
{{message.message}}
                      </small>
                    </div>
                  </div>
                </div>
                <img
                  class="mt-auto d-none d-md-block"
                  style="width: 54px; height: 54px; border-radius: 20px"
                  :src="`http://3.89.119.22:2040/${imageChat}`"
                />
              </div>
            </div>
    <div v-else class="pl-0 pl-lg-3 col-12 mb-3">
              <div class="row mt-3">
                <img
                  class="mt-auto d-none d-md-block"
                  style="width: 54px; height: 54px; border-radius: 20px"
                  :src="`http://3.89.119.22:2040/${imageChatSender}`"
                />
                <div class="ml-3 d-flex flex-column">
                  <div
                    style="
                      max-width: 400px;
                      border-radius: 35px 35px 35px 10px;
                      background: #7e98df;
                    "
                  >
                    <div class="mx-4 my-3">
                      <small class="text-white" style="font-size: 14px">
{{message.message}}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
</template>
<script>
export default {
  data () {
    return {
      username: localStorage.getItem('username')
    }
  },
  props: ['message', 'imageChat', 'imageChatSender']

}
</script>
<style  scoped>
.bgColorResponsive{
  background: white;
}
@media screen and (max-width: 550px) {

.bgColorResponsive{
  background: #ebebeb;

}
}
</style>
