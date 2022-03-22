<template>
  <div class="login">
    <Header></Header>

    <validation-observer ref="obs" v-slot="ObserverProps">

      <form class="login__form" action="login" method="POST">
        
        <h2 class="login__form__ttl">ログイン</h2>

        <validation-provider v-slot="ProviderProps" rules="required">
          <input v-model="email" type="email" name="メールアドレス" placeholder="メールアドレス">
          <div class="error">{{ ProviderProps.errors[0] }}</div>
        </validation-provider>

        <validation-provider v-slot="ProviderProps" rules="required">
          <input v-model="password" type="password" name="パスワード" placeholder="パスワード">
          <div class="error">{{ ProviderProps.errors[0] }}</div>
        </validation-provider>

        <button @click="login" type="button"
        :disabled="ObserverProps.invalid || !ObserverProps.validated">ログイン</button>
      </form>

    </validation-observer>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    login() {
      if(!this.email || !this.password) {
        alert('メールアドレスまたはパスワードが入力されていません。')
        return
      }
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push('/home')
        })
    }
  },
}
</script>

<style>
  .login{
  height: 100vh;
  background-color: black;
  text-align: center;
}

.login__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  margin: 40px 30%;
  padding: 20px 0;
}

.login__form__ttl {
  font-size: 20px;
  padding: 15px 0;
}

input {
  width: 250px;
  height: 30px;
  border-radius: 7px;
  margin-bottom: 15px;
}

button {
  background-color: blueviolet;
  color: white;
  border-radius: 20px;
  padding: 10px 20px;
}
</style>