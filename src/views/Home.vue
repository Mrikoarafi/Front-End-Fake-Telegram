<template>
  <div
    class="container-fluid"
    style="
      max-height: 100vh !important;
      overflow: hidden !important;
      overflow-y: hidden !important;"
  >
    <!-- LEFT BAR ONLINE -->
    <div class="row">
      <div
        class="col-12 col-lg-3 bg-white align-self-center"
        style="
          min-height: 100vh;
          overflow-y: hidden !important;
          z-index: 2;
          box-shadow: 0px -4px 5px rgba(0, 0, 0, 0.3);
        "
      >
        <div class="row py-3">
          <div class="col-6">
            <small class="ml-1 logoTelegram">Telegram</small>
          </div>
          <div class="col-6 text-right align-self-center position-relative">
            <h3 class="my-auto">
              <b-icon-text-left
                @click="modol = !modol"
                style="color: #7e98df; cursor: pointer"
              ></b-icon-text-left>
            </h3>
            <div
              v-if="modol === true"
              class="d-none d-md-block menuUser position-absolute text-white text-left"
            >
              <div class="py-3 ml-3 clickList">
                <router-link
                  :to="`/editprofile?name=${getDetails.detailUser.username}`"
                  class="text-decoration-none text-white"
                >
                  <p>
                    <b-icon-gear class="ml-2"></b-icon-gear
                    ><span class="ml-1">Settings</span>
                  </p>
                </router-link>
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
                <router-link
                  :to="`/maps?name=${getDetails.detailUser.username}`"
                  class="text-decoration-none text-white"
                >
                  <p>
                    <b-icon-map class="ml-2"></b-icon-map
                    ><span class="ml-1">Map</span>
                  </p>
                </router-link>
                <p @click="onLogout()">
                  <b-icon-power class="ml-2"></b-icon-power
                  ><span class="ml-1">Logout</span>
                </p>
              </div>
            </div>
            <div
              v-if="modol === true"
              class="d-block  d-md-none menuHp position-fixed "
            >
              <div class="py-3 mx-3 clickList  mt-5">

                  <h5 class="mr-3 d-flex justify-content-between mb-4 ">
                    <b-icon-chevron-right
                      @click="modol = false"
                    ></b-icon-chevron-right>

                    <b-icon-gear class="ml-auto"></b-icon-gear>
                  </h5>

                <div class="row d-block d-md-none text-left d-flex mb-4 ">
                  <div class="col-4">
                    <img
                      v-if="getDetails.detailUser.image === null"
                      style="width: 82px; height: 82px; border-radius: 30px"
                      src="..\assets\img\default.jpg"
                    />
                    <img
                      v-else
                      class=" shadow-sm"
                      style="width: 82px !important; height: 82px; border-radius: 30px"
                      :src="
                        `http://3.89.119.22:2040/${getDetails.detailUser.image}`
                      "
                    />
                  </div>
                  <div class="col align-self-center">
                    <small class=" font-weight-bold" style="font-size: 17px;">
                      {{ getDetails.detailUser.username }}
                    </small>
                  </div>
                </div>
                <router-link
                  :to="`/editprofile?name=${getDetails.detailUser.username}`"
                  class="text-decoration-none"
                  style="color: #7E98DF;"
                >
                <p class="text-left my-4 hoverHp pl-2 py-1">
                  <b-icon-person scale="1.5"></b-icon-person
                  ><span class="ml-3">Profile</span>
                </p>

                  </router-link>
                <p class="text-left my-4 hoverHp pl-2 py-1">
                  <b-icon-telephone scale="1.5"></b-icon-telephone
                  ><span class="ml-3">Call</span>
                </p>
                <p class="text-left hoverHp pl-2 py-1">
                  <b-icon-bookmark scale="1.5"></b-icon-bookmark
                  ><span class="ml-3">Save messages</span>
                </p>
                <p class="text-left my-4 hoverHp pl-2 py-1">
                  <b-icon-person-plus scale="1.5"></b-icon-person-plus
                  ><span class=" ml-3">Invite friends</span>
                </p>
                <p @click="onLogout()" class="text-left hoverHp pl-2 py-1">
                  <b-icon-power scale="1.5"></b-icon-power
                  ><span class="ml-3">Logout</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row d-none d-md-block">
          <div class="col-12 text-center">
            <img
              v-if="getDetails.detailUser.image === null"
              class="mx-auto"
              style="width: 82px; height: 82px; border-radius: 30px"
              src="..\assets\img\default.jpg"
            />
            <img
              v-else
              class="mx-auto shadow-sm"
              style="width: 92px; height: 92px; border-radius: 30px"
              :src="`http://3.89.119.22:2040/${getDetails.detailUser.image}`"
            />
            <p
              class="mt-2 mb-n1 font-weight-bold"
              style="font-size: 20px; letter-spacing: 1.165px"
            >
              {{ getDetails.detailUser.username }}
            </p>
            <small
              v-if="getDetails.detailUser.inisial_name === null"
              class="text-muted"
              style="font-size: 14px"
              >@{{ getDetails.detailUser.username }}</small
            >
            <small v-else class="text-muted" style="font-size: 14px"
              >@{{ getDetails.detailUser.inisial_name }}</small
            >
          </div>
        </div>
        <div class="row mt-4 mx-1">
          <div
            class="col-10 py-2 my-auto"
            style="background: #f7f7f7; border-radius: 15px"
          >
            <span
              ><img class="d-inline" src="../assets/sidebar/Search.png"/>
              <input
                style="outline: none; background: transparent"
                class="mr-n3 border-0 ml-2"
                placeholder="Type your message.."
                type="text"
            /></span>
          </div>
          <div class="col text-right align-self-center">
            <h1 class="my-auto ml-1">
              <b-icon-plus
                style="color: #7e98df; cursor: pointer"
              ></b-icon-plus>
            </h1>
          </div>
        </div>
        <div class="row mt-3 justify-content-between mx-1 py-2">
          <div class="col-3">
            <small
              class="h6 changeChat font-weight-bold"
              style="cursor: pointer"
              >All</small
            >
          </div>
          <div class="text-center col-5">
            <small
              class="h6 changeChat font-weight-bold"
              style="cursor: pointer"
              >Important</small
            >
          </div>
          <div class="col-3">
            <small
              class="h6 changeChat font-weight-bold"
              style="cursor: pointer"
              >Unread
                  </small
            >
          </div>
        </div>
        <div class="maxHeightListchat" style="overflow-y: scroll "
        >
          <div
            class="row mt-2 mb-2  mx-auto mx-lg-0"
            v-for="(item, index) in listUsers"
            :key="index"
          >
            <div
              v-if="item.username !== getDetails.detailUser.username"
              class=" py-lg-auto col-12 pl-lg-0 hoverChat  "
              style="min-height:12vh;max-height: 12vh; cursor:pointer;"
              @click="selectUser(item, item.username, item.image)"
            >
              <div class="d-flex " style="height: 100% ">
                <img
                  v-if="item.image === null"
                  class="my-auto"
                  style="width: 64px; height: 64px; border-radius: 20px"
                  src="..\assets\img\default.jpg"
                />
                <img
                  v-else
                  class="my-auto"
                  style="width: 64px; height: 64px; border-radius: 20px"
                  :src="`http://3.89.119.22:2040/${item.image}`"
                />
                <div class="ml-3 mt-2 d-flex flex-column">
                  <small
                    class="mr-auto mt-2 font-weight-bold"
                    style="font-size: 16px"
                  >
                    {{ item.username }}
                  </small>
                  <!-- {{newMessage[0].message}} -->
                  <!-- <small
                    v-if="newMessage.length === 0"
                    class="mr-auto mt-2 text-truncate"
                    style="
                    font-size: 14px;
                    color: #7e98df;
                    min-width: 170px;
                    max-width: 170px;
                  "
                  >
                  </small> -->
                  <small
                    class="mr-auto mt-2 text-truncate "
                    style="
                    font-size: 14px;
                    color: #7e98df;
                    min-width: 170px;
                    max-width: 170px;
                  "
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, tenetur enim deserunt neque nobis ab dolorem nisi minus unde excepturi nulla accusantium est doloribus recusandae, molestias voluptates? Deleniti, atque rem!

                  </small>
                </div>
                <div class="ml-auto ml-lg-3 d-flex flex-column">
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
                    ><small style="font-size: 14px" class="py-1 text-white">
                      2

                    </small></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="usersReceiver !== null" class="col-lg-9 d-flex flex-column positionResponsive">
        <div class="row bg-white heightChat " >
          <div class="d-flex align-items-center mx-auto mx-lg-0  ml-lg-4 py-lg-2" style="height: 100%">
            <b-icon icon="chevron-left" @click="clickChat()" scale="1.5" class=" d-md-none ml-n5 pt-3 pb-4 mr-4 pl-1 pr-3  my-auto" style="color: #7E98DF;">
              </b-icon>
            <a style="cursor:pointer;" @click="$bvModal.show('seeProfile')">
              <img
                v-if="imageChatReceiver === null"
                class="my-auto "
                style="width: 64px; height: 64px; border-radius: 20px"
                src="../assets/img/default.jpg"
              />
              <img
                v-else
                class="my-auto "
                style="width: 64px; height: 64px; border-radius: 20px;cursor:pointer;"
                :src="`http://3.89.119.22:2040/${imageChatReceiver}`"
              />
            </a>
            <div class="ml-3 d-flex flex-column">
              <small
                class="mr-auto mt-2 font-weight-bold"
                style="font-size: 16px"
                >{{ usersReceiver }}
              </small>
              <small
                class="mr-auto mt-1 text-truncate"
                style="
                  font-size: 14px;
                  color: #7e98df;
                  min-width: 170px;
                  max-width: 170px;
                "
              >
                Online
              </small>
            </div>
            <ModalsSeeProfile :semuaData="semuaDataClick" />
          </div>
        </div>
        <div
          v-chat-scroll
          class="container-fluid"
          style="overflow-y: auto;  max-height: 76vh;"
        >
          <div
            class="ml-0 mr-0 row mt-auto"
            v-for="(item, index) in historyMessages"
            :key="'A' + index"
          >
            <Message
              :message="item"
              :imageChatSender="getDetails.detailUser.image"
              :imageChat="imageChatReceiver"
            />
          </div>
          <!-- <div
            class="ml-0 row d-flex flex-column-reverse "
            v-for="(item, index) in privateMessages"
            :key="index"
          >
            <Message  :message="item" :imageChatSender="getDetails.detailUser.image" :imageChat="imageChatReceiver" />
          </div> -->

          <div
            class="ml-0 row "
            v-for="(listMessage, index) in listMessages"
            :key="index"
          >
            <Message
              :message="listMessage"
              :imageChatSender="getDetails.detailUser.image"
              :imageChat="imageChatReceiver"
            />
          </div>
        </div>
        <div class="row mt-auto bg-white justify-content-center">
          <form
            @submit.prevent="sendMessage()"
            class="col-11 my-3"
            style="background: #f7f7f7; border-radius: 15px"
          >
            <input
              required
              v-model="messageChat"
              style="outline: none; background: transparent; width: 100%"
              class="py-3 border-0"
              placeholder="Type your message.."
              type="text"
            />
          </form>
        </div>
      </div>
      <div v-else class="col-lg-9 d-flex flex-column positionResponsive">
        <h6 class="my-auto mx-auto" style="color: #848484;">
          Please select a chat to start messaging
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
import ModalsSeeProfile from '../components/modalsProfile'
import { mapActions, mapGetters } from 'vuex'
import Message from '../components/Message'
import io from 'socket.io-client'
export default {
  data () {
    return {
      modol: false,
      username: localStorage.getItem('username'),
      id: localStorage.getItem('id'),
      socket: io('http://3.89.119.22:2040'),
      semuaDataClick: [],
      listUsers: [],
      usersReceiver: null,
      imageChatReceiver: '',
      messageChat: '',
      listMessages: [],
      privateMessages: [],
      historyMessages: [],
      status: null
    }
  },
  components: {
    Message,
    ModalsSeeProfile
  },
  computed: {
    ...mapGetters({
      getDetails: 'auth/getDetailUser'
    })
  },
  methods: {
    clickChat () {
      const chat = document.querySelector('.positionResponsive')
      chat.classList.toggle('position-chat')
    },
    ...mapActions({
      actgetDetailUser: 'auth/actgetDetailUser',
      logoutUser: 'auth/logout'
    }),
    onLogout () {
      this.logoutUser().then(() => {
        localStorage.removeItem('id')
        localStorage.removeItem('image')
        localStorage.removeItem('username')
        this.$router.push({
          path: '/login',
          query: {
            logout: this.getDetails.detailUser.username
          }
        })
      })
    },
    selectUser (semuaData, nama, image) {
      this.listMessages = []
      this.privateMessages = []
      this.semuaDataClick = semuaData
      this.imageChatReceiver = image
      this.usersReceiver = nama
      // get private message dari front-end array /offline
      this.getPrivateMessages()
      this.socket.emit('get-history-message', {
        sender: this.username,
        receiver: nama
      })
      this.getHitoryMessages()
      this.clickChat()
    },
    sendMessage () {
      // untuk ngirim message ke si pengirim,agar tampil juga di pengirim
      const msg = `${this.messageChat}`
      // setelah dia send messages dia akan masukin data ke listMessages
      this.listMessages = [
        ...this.listMessages,
        {
          sender: this.username,
          receiver: this.usersReceiver,
          message: msg
        }
      ]
      // kemudian dia ngambil untuk private messages nya

      this.getPrivateMessages()
      // emit ke backend untuk send-message
      this.socket.emit('send-messages', {
        sender: this.username,
        receiver: this.usersReceiver,
        message: this.messageChat
      })
      this.messageChat = ''
    },
    getPrivateMessages () {
      const privateMessage = this.listMessages.filter(data => {
        if (this.usersReceiver === null) {
          return (
            data.sender === this.usersReceiver || data.sender === this.username
          )
        } else {
          return (
            data.receiver === this.usersReceiver ||
            data.sender === this.usersReceiver
          )
        }
      })
      this.privateMessages = privateMessage
    },
    getHitoryMessages () {
      this.socket.on('history-list-message', data => {
        this.historyMessages = data
      })
    }
  },
  mounted () {
    this.actgetDetailUser(this.id)
    // ngirim request untuk getallusers
    this.socket.emit('get-all-users', [])
    // kita terima dengan list-users dan masukkan ke listusers di data
    this.socket.on('list-users', value => {
      this.listUsers = value
    })
    // CHAT
    this.socket.emit('join-room', {
      userRoom: this.username
    })
    // menampilkan list message nya
    this.socket.on('list-messages', async data => {
      this.listMessages = await [...this.listMessages, data]
      if (this.userReceiver !== null) {
        this.getPrivateMessage()
      }
    })
    this.socket.on('status', status => {
      this.status = status
    })
  }
}
</script>
<style scoped>
.maxHeightListchat{
min-height:50vh;
max-height:50vh;
}
.heightChat{
  min-height: 10vh
}
.clickList p {
  cursor: pointer;
}
.clickList p:hover {
  color: rgb(210, 236, 176);
}
.menuUser {
  left: -70px;
  z-index: 1;
  background: #7e98df;
  border-radius: 35px 10px 35px 35px;
  width: 210px;
  height: 290px;
}
/* HOME */
.container-fluid {
  font-family: "Rubik";
}
/* SIDEBAR */
.changeChat:hover {
  color: #7e98df;
}
.logoTelegram {
  font-size: 26px;
  color: #7e98df;
  letter-spacing: -0.165px;
}
/* LISTCHAT */
.hoverChat:hover {
  background-color: rgb(200, 200, 206);
}
@media screen and (max-width: 550px) {

.maxHeightListchat{
min-height:72vh;
}
.heightChat{
  min-height: 12vh
}
  .menuHp {
    top: 0;
    right: 0;
    z-index: 1;
    color: #7e98df;
    background: #ffffff;
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.03);
    border-radius: 35px 0px 0px 35px;
    width: 302px;
    height: 100vh;
  }
  .hoverHp:hover{
    background: #7e98df;
  }
  .positionResponsive{
    background:rgb(255, 255, 255);
    position: fixed;
    z-index: 2;
    top:0;
    left:380px;
    right:0;
    bottom:0;
    transition: all 0.3s ease;
  }
  .position-chat{
    left:0;
  }
}
</style>
