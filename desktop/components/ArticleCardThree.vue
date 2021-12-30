<template>
  <div class="wrap-article-three">
    <article class="three">
      <NuxtLink to="/news" :rel="title">
        <img :src="props.images" :title="title" />
        <div class="caption">
          <div class="caption-title">{{ props.title }}</div>
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
article {
  width: 235px;
  float: left;
  position: relative;
  margin-bottom: 20px;
  margin-right: 6px;
}

.wrap-article-three {
  display: flex;
}

article .three {
  margin-right: 6px;
}

article a {
  text-decoration: none;
  color: white;
}
article img {
  width: 235px;
  height: 150px;
  object-fit: cover;
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