<template>
  <div class="goods-list-item">
      <img :src="goodsitem.show.img" alt="" @load="imageLoad">
      <div class="goods-info">
        <p>{{goodsitem.title}}</p>
        <span class="price">{{goodsitem.price}}</span>
        <span class="cfav">{{goodsitem.cfav}}</span>
      </div>
  </div>
</template>

<script>
  export default {
    props: {
      goodsitem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imageLoad() {
        this.$bus.$emit('imageLoad')
      }
    }
  }
</script>

<style>
  .goods-list-item {
    width: 48%;
    padding-bottom: 40px;
    position: relative;
  }

  .goods-list-item img {
    width: 100%;
    border-radius: 8px;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .cfav {
    position: relative;
  }
  .cfav::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
