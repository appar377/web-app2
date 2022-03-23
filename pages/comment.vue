<template>
  <div class="comment">
    <Aside></Aside>
    <div class="comment__right">
      <div class="share__wrapper">
        <h2 class="share__wrapper__ttl">コメント</h2>
        
        <ul class="share__list">
          <li class="share__list__item">
            <div class="list__item__display">
              <h3 class="share__list__ttl">{{}}</h3>

              <div class="heart">
                <img src="../img/heart.png">
              </div>
              <p class="heart__count">0</p>

              <div class="cross">
                <img src="../img/cross.png">
              </div>
            </div>
            <p>{{}}</p>
          </li>
        </ul>
      </div>

      <p class="comment__ttl">コメント</p>
      <ul class="comment__list">
        <li class="comment__list__item" v-for="item in items" :key="item.id">
          <p class="comment__list__ttl">
            {{item.id}}
          </p>
          <p class="comment__list__content">
            {{item.comment}}
          </p>
        </li>
      </ul>

      <form class="comment__form">
        <div class="comment__input">
          <input type="text">
        </div>

        <div class="comment__button">
          <button>コメント</button>
        </div>
      </form>
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
    async getComment() {
      const resData = await this.$axios.get(
        "http://127.0.0.1:8000/api/v1/comment/"
      );
      this.items = resData.data.data;
    },
  },
}
</script>

<style>
.comment {
  height: 100vh;
  background-color: black;
  color: white;
  display: flex;
}

.comment__right {
  width: 100%;
}

.share__wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.share__wrapper__ttl {
  color: white;
  border: 1px solid white;
  padding: 10px;
}

.share__list {
  list-style: none;
  width: 100%;
  color: white;
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
.heart__count {
  width: 20px;
  padding: 10px;
}

.share__list__ttl {
  color:  white;
  padding: 10px;
}

.heart img,
.cross img {
  width: 100%;
}


.share__list__ttl {
  color:  white;
  padding: 10px;
}

.comment__ttl {
  border: 1px solid white;
  text-align: center;
  padding: 5px 0;
  font-size: 15px;
}

.comment__list {
  list-style: none;
}

.comment__list__item {
  border: 1px solid white;
  padding: 10px;
}

.comment__list__ttl {
  font-size: 15px;
  padding-bottom: 5px;
}

.comment__list__content {
  font-size: 13px;
}

.comment__input {
  width: 100%;
  text-align: center;
  padding: 20px 0;
}

.comment__form {
  width: 100%;
}

.comment__input input {
  width: 80%;
  height: 25px;
  border-radius: 10px;
  border: 1px solid white;
  background-color: black;
  caret-color: white;
}

.comment__button {
  text-align: right;
}

.comment__button button {
  width: 120px;
  background-color: blueviolet;
  color: white;
  border-radius: 20px;
  padding: 10px 20px;
}

</style>