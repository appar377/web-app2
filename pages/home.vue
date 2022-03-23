<template>
  <div class="home">
    <Aside class="aside"></Aside>

    <div class="share__wrapper">
      <h2 class="share__wrapper__ttl" @click="getShare">ホーム</h2>
      <ul class="share__list">
        <li class="share__list__item" v-for="item in items" :key="item.id">
          <div class="list__item__display">
            <h3 class="share__list__ttl">{{}}</h3>
            <div class="heart">
              <img src="../img/heart.png">
            </div>
            <p class="heart__count">0</p>

            <div class="cross">
              <img src="../img/cross.png">
            </div>

            <div class="detail">
              <img src="../img/detail.png" @click="$router.push('/comment')">
            </div>
          </div>
          <p>{{item.share}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    }
  },
  methods: {
    async getShare() {
      const resData = await this.$axios.get(
        "http://127.0.0.1:8000/api/v1/share/"
      );
      this.items = resData.data.data;
    },
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

.share__list__ttl {
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
</style>