<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <nav-bar-item>
        <div slot="center">购物街</div>
      </nav-bar-item>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommends-view :recommends="recommends"></home-recommends-view>
    <feature-view></feature-view>
    <tab-control :title="['流行', '新款', '精选']" class="tab-control" @tabClick="tabClick"></tab-control>
    <goods-list :goods="showGoods"></goods-list>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
  //公共组件
  import {NavBar, NavBarItem} from 'components/common/navbar/navbar.js'
  import TabControl from 'components/content/tabcontrol/TabControl.vue'
  import GoodsList from 'components/content/goods/GoodsList.vue'

  //home的子组件
  import HomeSwiper from './childrenComps/HomeSwiper.vue'
  import HomeRecommendsView from './childrenComps/HomeRecommendsView.vue'
  import FeatureView from './childrenComps/FeatureView.vue'

  //.网络请求相关
  import {HomeMultidata, getHomeGoods} from 'network/home.js'
  export default {
    name: "Home",
    components: {
      NavBar,
      NavBarItem,
      TabControl,
      GoodsList,

      HomeSwiper,
      HomeRecommendsView,
      FeatureView,
    },

    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 1, list: []},
          'new': {page: 1, list: []},
          'sell': {page: 1, list: []}
        },
        currentType: 'pop'
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },

    created() {
      this.HomeMultidataa();
      this.getHomeGoodss('pop');
      this.getHomeGoodss('new');
      this.getHomeGoodss('sell');
    },
    methods: {
      /**
       * 事件监听相关方法
       */

      tabClick(index) {
        switch(index) {
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new'
            break;
         case 2:
            this.currentType = 'sell'
            break;
        }
      },

      /**
       * 网络请求相关方法
       */
      HomeMultidataa() {
        HomeMultidata().then(res => {
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list
        })
      },
      getHomeGoodss(type) {
        const page = this.goods[type].page
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.data.list);
          this.goods[type].page += 1;
        })
      }
    }
  }
</script>

<style scoped>
  #home {
    width: 100%;
    padding-top: 44px;
  }

  .nav-bar {
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>
