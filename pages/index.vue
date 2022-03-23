<template>
  <div class="register">
    <Header></Header>

    <validation-observer ref="obs" v-slot="ObserverProps">

      <form class="register__form">
        <h2 class="register__form__ttl">新規登録</h2>
        <validation-provider v-slot="ProviderProps" rules="required|max:20">
          <input v-model="name" type="text" name="名前" placeholder="ユーザーネーム">
          <div class="error">{{ ProviderProps.errors[0] }}</div>
        </validation-provider>

        <validation-provider v-slot="ProviderProps" rules="required|email">
          <input v-model="email" type="email" name="メールアドレス" placeholder="メールアドレス">
          <div class="error">{{ ProviderProps.errors[0] }}</div>
        </validation-provider>

        <validation-provider v-slot="ProviderProps" rules="required|min:6">
          <input v-model="password" type="password" name="パスワード" placeholder="パスワード">
          <div class="error">{{ ProviderProps.errors[0] }}</div>
        </validation-provider>

        <button @click="register" type="button"
        :disabled="ObserverProps.invalid || !ObserverProps.validated">新規登録</button>
      </form>

    </validation-observer>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
export default {
  data() {
    return {
      name: null,
      email: null,
      password: null,
    }
  },
  methods: {
    register() {
      if(!this.name || !this.email || !this.password) {
        alert('入力されていない箇所があります')
        return
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          data.user.sendEmailVerification().then(() => {
            this.$router.replace({ path: '/home' , query :{ name: this.name, email: this.email }})
          })
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
              alert('メールアドレスの形式が違います。')
              break
            case 'auth/email-already-in-use':
              alert('このメールアドレスはすでに使われています。')
              break
            case 'auth/weak-password':
              alert('パスワードは6文字以上で入力してください。')
              break
            default:
              alert('エラーが起きました。しばらくしてから再度お試しください。')
              break
          }
        });
        this.insertLoginUser();
    },
    
    async insertLoginUser() {
      const sendData = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      console.log(sendData);
      await this.$axios.post("http://127.0.0.1:8000/api/v1/user/", sendData);
    },
  },
}
</script>

<style>
.register{
  height: 100vh;
  background-color: black;
  text-align: center;
}

.register__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  margin: 40px 30%;
  padding: 20px 0;
}

.register__form__ttl {
  font-size: 20px;
  padding: 15px 0;
}

input {
  width: 250px;
  height: 30px;
  border-radius: 7px;
}

.error {
  padding-bottom: 10px;
}

button {
  background-color: blueviolet;
  color: white;
  border-radius: 20px;
  padding: 10px 20px;
}
</style>