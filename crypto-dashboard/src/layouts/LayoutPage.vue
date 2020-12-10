<template>
    <div class="layout-container">
        <header class="page-header bg-primary">
            <button class="back-btn" v-if="currentPage === 'infoview' || currentPage==='login'  || currentPage === 'register'" @click="$router.push({ path: '/' })">
                <i class="fa fa-angle-left fa-2x"></i>
            </button>
            <span class="page-title">
            <button class='page-title' @click="$router.push({ path: '/' })">
            CRYPTOCURRENCY DASHBOARD
            </button>
            </span>
            <div>
            </div>
        </header>
        <div class="page-container">
            <transition name="fade" mode="out-in">
                <keep-alive include="dashboard">
                    <router-view/>
                </keep-alive>
            </transition>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'LayoutPage',
    data() {
      return {
        currentPage: 'dashboard'
      }
    },
    watch: {
      '$route': {
        deep: true,
        handler: function (page) {
          this.currentPage = page.name;
        }
      }
    }
  }
</script>
