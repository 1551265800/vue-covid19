<template>
  <div class="home">
    <Header></Header>
    <Covid19Info></Covid19Info>
  </div>
</template>

<script>

import Heradr from '../components/Header.vue';
import Header from '../components/Header.vue';
import Covid19Info from '@/components/Covid19-info.vue';
export default {
  components: {
    Heradr,
    Header,
    Covid19Info
},
}
</script>
