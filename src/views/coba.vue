<template>
<div >
<h4>
  <b-icon-text-left
                style="color:#7E98DF;cursor:pointer; margin-left:50px"
                @click="menu_toggle"
              ></b-icon-text-left></h4>
  <div class="menu-list">
          <p>
            <b-icon-gear class="ml-2"></b-icon-gear
            ><span class="ml-1" @click="list()">Settings</span>
          </p>
          <p>
            <b-icon-person class="ml-2"></b-icon-person
            ><span class="ml-1">Contacts</span>
          </p>
          <p>
            <b-icon-telephone class="ml-2"></b-icon-telephone
            ><span class="ml-1">Call</span>
          </p>
          <p>
            <b-icon-bookmark class="ml-2"></b-icon-bookmark
            ><span class="ml-1">Save messages</span>
          </p>
          <p>
            <b-icon-person-plus class="ml-2"></b-icon-person-plus
            ><span class="ml-1">Invite friends</span>
          </p>
          <p>
            <b-icon-map class="ml-2"></b-icon-map
            ><span class="ml-1" @click="map">Map</span>
          </p>
          <p>
            <b-icon-power class="ml-2"></b-icon-power
            ><span class="ml-1" @click.prevent="logout()">Logout</span>
          </p>
        </div>
        </div>
</template>
<style scoped>
.menu-list {
  position: absolute;
  background-color: #7e98df;
  height: 0;
  width: 0;
  left: 200px;
  top: 75px;
  transition: all 0.3s;
  transform: scale(0);
}
.menu-list-toggle {
  padding-top: 5px;
  transform: scale(1);
  position: absolute;
  width: 200px;
  height: 290px;
  background-color: #7e98df;
  border-radius: 35px 10px 35px 35px;
  left: 100px;
  top: 75px;
  overflow: hidden;
  z-index: 2;
  cursor: pointer;
}

.menu-user-toggle {
  padding-top: 5px;
  transform: scale(1);
  position: absolute;
  width: 200px;
  padding: 15px;
  background-color: #7e98df;
  border-radius: 35px 10px 35px 35px;
  left: 250px;
  top: 55px;
  overflow: hidden;
  z-index: 2;
  cursor: pointer;
}
.menu-list-toggle p:hover {
  color: #a9c1e6;
}
.menu-list-toggle p {
  color: white;
  margin-top: 10px;
  margin-left: 20px;
}
</style>

<script>
export default {
  data () {
    return {
      file1: null,
      file2: null
    }
  },
  methods: {
    menu_toggle () {
      const menuToggle = document.querySelector('.menu-list')
      menuToggle.classList.toggle('menu-list-toggle')
    }
  }
}
</script>
