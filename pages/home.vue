<template>
  <div class="home">
    <Aside class="aside" @home-emit="getShare"></Aside>

    <div class="share__wrapper">
      <h2 class="share__wrapper__ttl">ホーム</h2>
      <ul class="share__list">
        <li class="share__list__item" v-for="item in items" :key="item.id">
          <div class="list__item__display">
            <h3 class="share__list__ttl">{{item.user.name}}</h3>
            <div class="heart">
              <img src="../img/heart.png" @click="insertLike(item.id)">
            </div>
            <p class="heart__count">{{item.like_count}}</p>

            <div class="cross" @click="deleteShare(item.id)">
              <img src="../img/cross.png" >
            </div>

            <div class="detail">
              <img src="../img/detail.png" @click="showShare(item.id)">
            </div>
          </div>
          <p>{{item.share}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";

export default {
  comments: {
    Aside
  },
  data() {
    return {
      items: [],
      email: null,
      share_id: null,
    }
  },
  methods: {
    getShareId(share_id) {
      this.share_id = share_id;
    },
    async insertLike(share_id) {
      this.getShareId(share_id);
      const sendData = {
        email: this.email,
        share_id: this.share_id,
      };
      const resData = await this.$axios.post("http://127.0.0.1:8000/api/v1/like/", sendData);
      this.getShare();
    },
    async getShare() {
      const resData = await this.$axios.get(
        "http://127.0.0.1:8000/api/v1/share/"
      );
      this.items = resData.data.data;
    },
    async deleteShare(id) {
      await this.$axios.delete("http://127.0.0.1:8000/api/v1/share/" + id);
      this.getShare();
    },
    async showShare(id) {
      const showData = await this.$axios.get("http://127.0.0.1:8000/api/v1/share/" + id);
      this.$router.push({ path: '/comment' , query : showData.data.data})
    },
    checkLogin() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.email = user.email
        }
      })
    }
  },
  mounted() {
    this.getShare();
    this.checkLogin();
  },
}
</script>

<style>
.home {
  height: 100vh;
  background-color: black;
  display: flex;
}

.share__wrapper {
  width: 100%;
}

.share__list {
  width: 100%;
  color: white;
  list-style: none;
}

.share__wrapper__ttl {
  color: white;
  border: 1px solid white;
  padding: 10px;
}

.share__list__item {
  color: white;
  border: 1px solid white;
  padding: 10px;
}

.list__item__display {
  color: white;
  display: flex;
  width: 100%;
}

.heart,
.cross,
.detail,
.heart__count {
  width: 20px;
  padding: 10px;
}

.heart:hover,
.cross:hover,
.detail:hover,
.heart__count:hover {
  cursor: pointer;
}

.share__list__ttl {
  width: 150px;
  color:  white;
  padding: 10px;
}

.heart img,
.cross img,
.detail img{
  width: 100%;
}

.detail {
  padding-left: 40px;
}

button:hover {
  cursor: pointer;
}
</style>