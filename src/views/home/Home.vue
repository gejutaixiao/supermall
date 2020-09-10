<template>
  <div id="home">
    <nav-bar>
      <nav-bar-item>
        <div slot="center">购物街</div>
      </nav-bar-item>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommends-view :recommends="recommends"></home-recommends-view>
  </div>
</template>

<script>
  import {NavBar, NavBarItem} from 'components/common/navbar/navbar.js'

  import HomeSwiper from './childrenComps/HomeSwiper.vue'
  import HomeRecommendsView from './childrenComps/HomeRecommendsView.vue'

  import {HomeMultidata} from 'network/home.js'
  export default {
    name: "Home",
    components: {
      NavBar,
      NavBarItem,
      HomeSwiper,
      HomeRecommendsView
    },

    data() {
      return {
        banners: [],
        recommends: []
      }
    },

    created() {
      HomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list
      })
    }
  }
</script>

<style scoped>

</style>
