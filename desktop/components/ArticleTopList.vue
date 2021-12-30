<template>
  <div class="top-list">
    <NuxtLink :to="props.url.replace(/^.*\/\/[^\/]+/, '')" :rel="title" :title="title">
      <figure>
        <img :src="props.images"/>
        <div class="tooltip">
          <figcaption> {{ props.title.length >= 40 ? props.title.substr(0,40)+'...' : props.title  }}</figcaption>
          <span class="tooltiptext">{{ props.title }}</span>
        </div>
      </figure>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps([
  'title', 'images', 'url'
])
</script>

<style lang="scss" scoped>
.top-list {
  margin-bottom: 16px;
  width: min-content;
  figure {
      margin: 0 20px 0 0;
      img {
          width: 210px;
          height: 373px;
          object-fit: cover;
      }
      figcaption {
          font-size: 14px;
          color: #c9c9c9;
          text-align: center;
          font-weight: 300;
      }
  }
}

a:link {
  text-decoration: none !important;
}
</style>

<style lang="scss">
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 210px;
  background-color: rgba($color: #000000, $alpha: 0.6);
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -50%;
  font-size: 11px;
  font-weight: 300;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
