<template>
  <header class="header">
    <div class="header__logo">
      <img src="../img/logo.png" alt="">
    </div>

    <div class="header__right">
      <NuxtLink to="/" class="header__right__item">新規登録</NuxtLink>
      <NuxtLink to="/login" class="header__right__item">ログイン</NuxtLink>
    </div>
  </header>
</template>

<style>
.header {
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  background-color: black;
  color: white;
}

.header__logo {
  width: 150px;
}

.header__logo img {
  width: 100%;
}

.header__right {
  display: flex;
  align-items: center;
}

.header__right__item {
  padding: 0 15px;
  text-decoration: none;
  color: white;
}
</style>