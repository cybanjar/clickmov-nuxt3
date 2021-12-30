<template>
  <div>
    <NuxtLink to="/tv"> TV </NuxtLink>
    <NuxtLink to="/user"> User </NuxtLink>
    <section class="top-playlist mb25">
      <h2 class="c-blue-ocean ml20">Top Playlist</h2>
      <div class="scroll-x-wrap">
        <div class="wrap-items">
          <div v-for="index in 7" :key="index" class="item-list">
            <a href="#">
              <img src="../assets/images/top/kuliner.png" alt="">
              <h6>Suara Jelajah Makanan</h6>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="categorylist mb25">
        <h2 class="c-blue-ocean">Category</h2>
        <div class="wrap-items">
          <ul>
            <li v-for="index in 7" :key="index">
              <a href="#">
                <img src="../assets/images/category/news.png" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <div class="ads mt25">
        <a href="#">
          <img src="../assets/images/ads/banner300x250.png" alt="">
        </a>
      </div>
    </section>
    <section>
      <div class="s-news mt25">
        <h2>
          <a class="c-blue-ocean" href="#">Popular</a>
        </h2>
        <div class="scroll-x-wrap">
          <div class="wrap-items">
            <div v-for="index in 7" :key="index" class="item-list">
              <div class="thumbnail">
                <img class="img-cover" src="../assets/images/news/rapid.png" alt="">
              </div>
              <h3>
                <a href="#">
                  Jering bilang covid itu konspirasi global
                </a>
              </h3>
              <span>2 Hari yang lalu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="s-news-list-vertical mt25">
      <h2 class="t-uppercase">
        <a class="c-blue-ocean" href="#">News</a>
      </h2>
      <div v-for="index in 4" :key="index" class="item-list">
        <div class="thumbnail">
          <img class="img-cover" src="../assets/images/news/rapid.png" alt="">
        </div>
        <div class="info">
          <h3>
            <a href="#">Jerig bilang covid itu konspirasi global</a>
          </h3>
          <span class="t-capitalize c-grey-1 fz-10">suaradotcom</span>
          <span>2 hari lalu</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { data } = await useAsyncData('data', () => $fetch('/api/data'))
</script>

<style lang="scss">
.content-wrapper {
  margin: 25px 0 0 20px;
  max-width: 1000px;
}
</style>