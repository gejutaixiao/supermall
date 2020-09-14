<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      //1.创建一个scroll对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      });

      //2.监听滚动
      this.scroll.on('scroll', position => {
        // console.log(position);
        this.$emit('contentScroll', position)
      });

      //3.监听上拉加载完成
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
        // this.pullingUpLoad()
      });
    },
    methods: {
      backTop(x, y, time = 300) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      pullingUpLoad() {
        setTimeout(() => {
          this.$emit('pullingUp');
          // console.log('+++')
        }, 500)
      },
      pullingUpFinish() {
        this.scroll && this.scroll.finishPullUp();
      },
      refresh() {
        this.scroll && this.scroll.refresh();
        console.log('000')
      }
    }
  }
</script>

<style scoped="scoped">
</style>
