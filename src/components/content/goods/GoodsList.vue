<template>
  <div class="goodslist">
    <goods-list-item v-for="item in goods" :goodsitem="item"></goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem.vue'

  export default {
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped="scoped">
  .goodslist {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;

  }
</style>
