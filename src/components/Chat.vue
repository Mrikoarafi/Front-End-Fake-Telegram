<template>
    <div v-if="usersReceivers !== null" class="col-lg-9 d-flex flex-column">
        <div class="row bg-white" style="min-height: 10vh">
          <div class="d-flex py-3 ml-4" style="height: 100%">
            <img
            v-if="userReceiverChat === '' "
              class="my-auto "
              style="width: 64px; height: 64px; border-radius: 20px"
              src="../assets/img/default.jpg"
            />
            <img
            v-else
              class="my-auto "
              style="width: 64px; height: 64px; border-radius: 20px"
              src="../assets/img/default.jpg"
            />
            <div class="ml-3 d-flex flex-column">
              <small
                class="mr-auto mt-2 font-weight-bold"
                style="font-size: 16px"
              >{{userReceiverChat}}
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
          </div>
        </div>
        <div
          class="container-fluid"
          style="overflow-y: scroll; min-height: 74vh; max-height: 70vh"
        >
          <div class="ml-0 row" >
            <h6>{{userReceiverChat}}</h6>
            <div v-for="(item,index) in privateMessages" :key="index">
              {{ item.message }}
            </div>
<!-- <Message  /> -->
          </div>
        </div>
        <div class="row bg-white justify-content-center">
          <form @submit.prevent="selectUser(usersReceivers.chat),sendMessage()"
            class="col-11 my-3"
            style="background: #f7f7f7; border-radius: 15px"
          >

            <input
            v-model="messageChat"
              style="outline: none; background: transparent; width: 100%"
              class="py-3 border-0"
              placeholder="Type your message.."
              type="text"
            />
          </form>
        </div>
      </div>
<div v-else class="col-lg-9 d-flex flex-column">
        <h6 class="my-auto mx-auto" style="color: #848484;">Please select a chat to start messaging</h6>
    </div>
</template>

<script>
// import Message from '../components/Message'
import io from 'socket.io-client'
export default {
  props: ['usersReceivers'],
  data () {
    return {
      socket: io('http://3.89.119.22:2040'),
      username: localStorage.getItem('username'),
      URL: process.env.VUE_APP_URL,
      userReceiverChat: null,
      messageChat: '',
      listMessages: [],
      privateMessages: [],
      historyMessages: []
    }
  },
  components: {
    // Message
  },
  methods: {
    selectUser (user) {
      this.userReceiver = user
      // list messages sama private di kosongin dlu
      this.listMessages = []
      this.privateMessages = []
      // get private message dari front-end array /offline
      this.getPrivateMessages()
      // request private message dari database
      this.socket.emit('get-history-message', {
        sender: this.username,
        receiver: this.usersReceivers.chat
      })
      // get history message dari database online
      this.getHistoryMessages()
    },
    getPrivateMessages () {
      // // filter untuk semua list messages nya
      const privateMessage = this.listMessages
        .filter((item) => item.sender === this.userReceiver || item.sender === this.username)
      // setelah di filter dia di simpen di array privateMessages
      this.privateMessages = privateMessage
    },
    // untuk ngirim chat
    sendMessage () {
      // untuk ngirim message ke si pengirim,agar tampil juga di pengirim
      const msg = `${this.messageChat}`
      // setelah dia send messages dia akan masukin data ke listMessages
      this.listMessages = [...this.listMessages, {
        sender: this.username,
        receiver: this.userReceiver,
        message: msg
      }]
      // kemudian dia ngambil untuk private messages nya
      this.getPrivateMessages()
      // emit ke backend untuk send-message
      this.socket.emit('send-messages', {
        sender: this.username,
        receiver: this.userReceiver,
        message: this.messageChat
      })
      this.messageChat = ''
    }
  },
  // getHistoryMessages () {
  //   this.socket.on('history-list-message', (data) => {
  //     this.historyMessages = data
  //   })
  // },
  mounted () {
    // masuk ke roomnya sendiri ketika click orang untuk chat
    this.socket.emit('join-room', {
      userRoom: this.username
    })
    // menampilkan list message nya
    this.socket.on('list-messages', async (data) => {
      this.listMessages = await [...this.listMessages, data]
      this.getPrivateMessages()
    })
  }
}
</script>
