<template>
  <div class="wrap-article-three">
    <article class="three">
      <NuxtLink to="/news" :rel="title">
        <img src="/images/popular/popular.png" title="sering kunjungi rumah" />
        <div class="caption">
          <div class="caption-title">Sering kunjungi rumah dan</div>
          <div class="purchase-date">2 Hari lalu</div>
        </div>
      </NuxtLink>
    </article>
  </div>
</template>

<script setup>
const props = defineProps(["publishDate", "title", "url", "images"]);
</script>

<style lang="scss" scoped>
.wrap-article-three {
  display: flex;
  float: left;
}

article {
  width: 120px;
  float: left;
  position: relative;
  margin-bottom: 20px;
  margin-right: 6px;
}


article .three {
  margin-right: 6px;
}

article a {
  text-decoration: none;
  color: white;
}
article img {
  width: 120px;
  height: auto;
  object-fit: cover;
}
.caption {
  .caption-title {
    font-size: 12px;
    font-weight: 400;
  }
  .purchase-date {
    font-size: 12px;
    color: #4f4f4f;
  }
}
</style>