<template>
  <div class="wrap-article-three">
    <article class="three">
      <img src="../assets/images/popular/popular.png" alt="Trulli" />
      <div class="caption">
        <div class="caption-title">{{ state.captionTitle.length >= 30 ? state.captionTitle.substr(0,30) + '..' : state.captionTitle }}</div>
        <div class="purchase-date">2 month</div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
    captionTitle: 'Sering kali keluar rumah dan keluar daerah'
})
</script>

<style lang="scss">
.wrap-article-three {
  display: flex;
  margin: 0 8px 16px 0;
}
article .three {
  margin-right: 6px;
}
article img {
    width: 235px;
    height: auto;
  }
.caption {
  .caption-title {
    font-size: 14px;
    font-weight: 500;
  }
  .purchase-date {
    font-size: 12px;
    color: #4f4f4f;
  }
}
</style>