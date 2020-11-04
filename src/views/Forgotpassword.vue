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
              >Forgot Password
            </small>
          </div>
          <div class="col-12">
            <small   style="font-size: 15px"
              >You’ll get messages soon on your e-mail
            </small>
          </div>
          <div class="col-12 pl-0 pr-0">
            <form >

              <div class="col-12">
                <div class="md-form" style="cursor: pointer">
                  <input  required type="email" id="email" class="form-control" />
                  <label  for="email">Email </label>
                </div>
                <br />
                <button
                  style="background: #7e98df; border-radius: 70px"
                  class="btn col-12 text-center mx-auto py-2 mb-4 text-white"
                  type="submit"
                >
                  <small
                    class="text-capitalize"
                    style="font-size: 16px"
                  >
                    Send</small
                  >
                </button>
                <div class="mt-3 mb-3 text-center">
                  <small style="font-size: 14px">
                    Remember password?
                    <router-link to="/login"
                      class="text-decoration-none" style="color: #7e98df"
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
