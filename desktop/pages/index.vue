<template>
  <div>
    <main class="content-wrapper">
      <h3 class="title--primary">Top Playlist</h3>
      <div class="grid-toplist">
        <ArticleTopList v-for="(item, index) in data['results']" :key="index" :title="item.title" :images="item.images[0].url_300x300" :url="item.url" />
      </div>

      <h3 class="title--primary mt-25">Category</h3>
      <div class="grid">
        <ArticleCategory />
      </div>

      <!-- <h3 class="title--primary">Popular</h3>
      <div class="grid">
        <ArticleCardThree v-for="(item, index) in 6" :key="index"/>
      </div> -->

      <h3 class="title--primary">News</h3>
      <div class="grid">
        <ArticleCardThree v-for="(item, index) in filterNews" :key="index" :publishDate="item.publish_date.substr(0,10)" :title="item.title" :url="item.url" :images="item.images[0].url_300x300" />
      </div>

      <h3 class="title--primary">Entertainment</h3>
      <div class="grid">
        <ArticleCardThree v-for="(item, index) in filterEntertainment" :key="index" :publishDate="item.publish_date.substr(0,10)" :title="item.title" :url="item.url" :images="item.images[0].url_480x260" />
      </div>

      <h3 class="title--primary">LifeStyle</h3>
      <div class="grid">
        <ArticleCardThree v-for="(item, index) in filterLifestyle" :key="index" :publishDate="item.publish_date.substr(0,10)" :title="item.title" :url="item.url" :images="item.images[0].url_300x300" />
      </div>
    </main>
  </div>
</template>

<script setup>
const { data } = await useAsyncData('data', () => $fetch('/api/data'))
console.log(data.value.results);

const dataNews = [...data.value.results];
const filterNews = dataNews.filter(datanew => datanew.category[1] == 'news');
const filterLifestyle = dataNews.filter(datanew => datanew.category[1] == 'lifestyle');
const filterEntertainment = dataNews.filter(datanew => datanew.category[1] == 'entertainment');
</script>

<style lang="scss">
.content-wrapper {
  padding: 25px 0 0 20px;
  width: 1000px;
}

.grid-toplist {
  display: flex;
  overflow-x: scroll;
  max-width: 980px;
}
</style>