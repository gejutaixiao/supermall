<template>
  <div class="nav-bar-item">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  .nav-bar-item {
    display: flex;
    height: 44px;
    width: 100%;
    line-height: 44px;
    text-align: center;
    background-color: var(--color-tint);
    color: #fff;
  }

  .left, .right {
    width: 60px;
  }

  .center {
    flex: 1;
  }
</style>
