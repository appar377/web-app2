<template>
  <aside class="aside">
    <div class="aside__logo">
      <img src="../img/logo.png" alt="">
    </div>

    <ul class="aside__list">
      <li @click="$router.push('/home')" class="aside__list-home">
        ホーム
      </li>

      <li @click="logout" class="aside__list-logout">
        ログアウト
      </li>
    </ul>

    <form class="share__form">
      <label for="share">シェア</label>
      <textarea type="text" name="share" rows="10" v-model="share"></textarea>

      <button @click="postShare">シェアする</button>
    </form>
  </aside>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      share: "",
    }
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace('/login')
        })
    },
    async  postShare() {
      const sendData = {
        name: this.$route.query.name,
        email: this.$route.query.email,
        share: this.share,
      };
      await this.$axios.post("http://127.0.0.1:8000/api/v1/share/", sendData);
    }
  },
}
</script>

<style>
.aside {
  width: 25%;
  color: white;
}

.aside__logo {
  width: 150px;
  padding: 15px 10px;
}

.aside__logo img {
  width: 100%;
}

.aside__list li {
  padding: 10px 15px;
}

.aside__list-home::before {
  content: "";
  background-image: url(../img/home.png);
  background-size: cover;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 10px;
}

.aside__list-logout::before {
  content: "";
  background-image: url(../img/logout.png);
  background-size: cover;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 10px;
}

.share__form {
  display: flex;
  flex-direction: column;
  padding-left: 10px;
}

.share__form label {
  margin-bottom: 10px;
}

.share__form textarea {
  width: 90%;
  height: 100px;
  border: 1px solid white;
  border-radius: 15px;
  background-color: black;
  caret-color: white;
  color: white;
}

.share__form button {
  width: 120px;
  background-color: blueviolet;
  color: white;
  border-radius: 20px;
  padding: 10px 20px;
  margin: 10px 0 0 auto;
}
</style>