<template>
  <div class="recommends">
    <div v-for="item in recommends" class="recommends-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style>
  .recommends {
    display: flex;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 10px solid #EEEEEE;
  }
  .recommends-item {
    flex: 1;
  }
  .recommends-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>
