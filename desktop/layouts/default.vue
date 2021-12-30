<template>
  <div>
    <div class="container">
      <TheSidebar />
      <div class="main-content">
        <TheHeader />
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
}
.main-content {
  width: 1000px;
}
</style>