<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { getUsers } from '../api/user';
export default {
  name: 'About',
  async mounted() {
    const res = await getUsers();
    console.log(res);
  },
};
</script>
