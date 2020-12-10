<template>
    <div id="app">
        <particles-bg type="cobweb" :bg="true"/>
        <LayoutPage></LayoutPage>
    </div>
</template>
<script>
  import LayoutPage from './layouts/LayoutPage.vue'
  import 'babel-polyfill'
  import { ParticlesBg } from "particles-bg-vue";
  export default {
    components: {
      LayoutPage,
      ParticlesBg,
    }
  }
</script>
