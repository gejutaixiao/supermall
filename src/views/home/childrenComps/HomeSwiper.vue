<template>
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="homeSwiperLoad">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/index.js'

  export default {
    components: {
      Swiper,
      SwiperItem
    },
    data() {
      return {
        isHomeSwiper: false
      }
    },
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      homeSwiperLoad() {
        if(!this.isHomeSwiper) {
          this.$emit('homeSwiperLoad');
          this.isHomeSwiper = true
          console.log('111')
        }
      }
    }
  }
</script>

<style>
</style>
