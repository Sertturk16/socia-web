<template>
  <div class="layout">
    <navBar />
    <div class="d-flex">
      <leftBar />
      <router-view></router-view>
      <rightBar />
    </div>
  </div>
</template>

<script>
  import leftBar from '@/components/leftBar.vue'
  import rightBar from '@/components/rightBar.vue'
  import navBar from '@/components/navBar.vue'
  export default {
    components: {
      leftBar,
      rightBar,
      navBar,
    },
    data() {
      return {
        abc: 'abc',
      }
    },
  }
</script>
