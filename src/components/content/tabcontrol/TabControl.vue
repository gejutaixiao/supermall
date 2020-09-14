<template>
  <div class="tab-control">
    <div v-for="(item, index) in title" class="tab-control-item" :class="{active: currentIndex == index}" @click="tabControlClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      tabControlClick(index) {
        this.currentIndex = index;
        this.$emit('tabClick', index);
      }
    }
  }
</script>

<style scoped="scoped">
  .tab-control {
    display: flex;
    text-align: center;
    padding: 10px;
    background-color: #fff;
  }

  .tab-control-item {
    flex: 1;
  }

  .active {
    color: var(--color-high-text);
  }

  .active span {
    padding: 5px;
    border-bottom: 3px solid var(--color-tint);
  }
</style>
