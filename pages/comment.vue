<template>
  <div class="comment">
    <Aside></Aside>
    <div class="comment__wrapper">
      <h2 class="comment__list__ttl">コメント</h2>
      <ul class="comment__list">
        <li></li>
      </ul>
    </div>

    <form action="/comment" method="POST">
      <input type="text">
      <button>コメント</button>
    </form>
  </div>
</template>

<style>
.comment {
  height: 100vh;
  background-color: black;
  color: white;
}

.commnet__list__ttl {
  color: white;
  width: 100%;
  border: 1px solid white;
  padding: 10px;
}
</style>