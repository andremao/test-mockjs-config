<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { login } from '../api/user';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  async mounted() {
    const res = await login({ uname: 'andremao', pwd: 'qwe123' });
    console.log(res);
  },
};
</script>
