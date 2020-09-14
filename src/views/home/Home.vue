<template>
  <div id="home">
    <nav-bar class="nav-bar"><nav-bar-item><div slot="center">购物街</div></nav-bar-item></nav-bar>
    <tab-control :title="['流行', '新款', '精选']" class="tab-control" @tabClick="tabClick" ref="tabControl1" v-show="isTabControlShow"></tab-control>

    <scroll class="content" :probe-type="3" @contentScroll="contentScroll" ref="scroll" :pull-up-load="true" @pullingUp="loaderMore">
      <home-swiper :banners="banners" @homeSwiperLoad="homeSwiperLoad"></home-swiper>
      <home-recommends-view :recommends="recommends"></home-recommends-view>
      <feature-view></feature-view>
      <tab-control :title="['流行', '新款', '精选']" class="tab-control" @tabClick="tabClick" ref="tabControl2"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <back-top @click.native="backTopClick" v-show="isBackTopShow"></back-top>
  </div>
</template>

<script>
  //公共组件
  import {NavBar, NavBarItem} from 'components/common/navbar/navbar.js'
  import TabControl from 'components/content/tabcontrol/TabControl.vue'
  import GoodsList from 'components/content/goods/GoodsList.vue'
  import Scroll from 'components/common/scroll/Scroll.vue'
  import BackTop from 'components/content/backtop/BackTop.vue'

  //home的子组件
  import HomeSwiper from './childrenComps/HomeSwiper.vue'
  import HomeRecommendsView from './childrenComps/HomeRecommendsView.vue'
  import FeatureView from './childrenComps/FeatureView.vue'

  //.网络请求相关
  import {HomeMultidata, getHomeGoods} from 'network/home.js'
  import {debounce} from 'common/utils.js'
  export default {
    name: "Home",
    components: {
      NavBar,
      NavBarItem,
      TabControl,
      GoodsList,
      Scroll,
      BackTop,

      HomeSwiper,
      HomeRecommendsView,
      FeatureView,
    },

    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        isBackTopShow: false,
        tabControlOffsetTop: 0,
        isTabControlShow: false
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
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh, 50);
      this.$bus.$on('imageLoad', () => {
        refresh()
      });

      // this.tabControlOffsetTop = .$refs.tabControl2.$el.offsetTop;
      // console.log(this.tabControlOffsetTop)
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
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      contentScroll(position) {
        this.isBackTopShow = (-position.y) > 1000;
        this.isTabControlShow = (-position.y) > this.tabControlOffsetTop;
      },
      backTopClick() {
        this.$refs.scroll.backTop(0, 0)
      },
      loaderMore() {
        this.getHomeGoodss(this.currentType);
      },
      homeSwiperLoad() {
      this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      console.log(this.tabControlOffsetTop)
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
        const page = this.goods[type].page +1;
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.data.list);
          this.goods[type].page += 1;

          this.$refs.scroll.pullingUpFinish();
        })
      }
    }
  }
</script>

<style scoped>
  #home {
    /* width: 100%; */
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
  }

  .nav-bar {
    position: relative;/*
    right: 0;
    left: 0;
    top: 0;
    z-index: 9; */
  }

/*  .tab-control {
    position: sticky;
    top: 44px;
    background-color: #fff;
  } */

  .content {
    position: absolute;
    right: 0;
    left: 0;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }

/* .active {
    position: fixed;
    z-index: 9;
    margin-top: 44px;
  } */

  .tab-control {
    position: relative;
    z-index: 9;
  }
</style>
