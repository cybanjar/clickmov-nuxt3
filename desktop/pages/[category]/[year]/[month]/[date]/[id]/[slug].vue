<template>
  <div class="wrap-content-detail">
    <!-- <div>{{ $route.params }}</div> -->
    <!-- <pre>{{ data }}</pre> -->
    <div class="wrap-content-left">
      <div class="wrap-top-content-left">
        <img src="/images/category/bayi.png" alt="bayi">
        <div class="text-categories">News</div>
        <div class="text-title">Ajukan Sidang Isbat, Pernikahan Rachel Maryam dan Suami Resmi Diakui Oleh Negara</div>
        <div class="publish-author">
          <div>2 jam lalu</div>
          <div>01:37 | Syahrino Putama</div>
          <div>Author: Syahrino Putama</div>
        </div>
        <div class="tag">#asisten rumah tangga #masker</div>
      </div>
      <div class="wrap-bottom-content-left">
        <div class="title--primary">LIHAT JUGA</div>
        <ArticleCardThreeD v-for="index in 10" :key="index" />
      </div>
    </div>

    <div class="wrap-main-right">
      <div v-for="index in 9" :key="index" class="wrap-content-right">
        <img src="/images/category/burger.png" alt="burger">
        <div class="wrap-title__caption">
          <div class="title-side__right">Keren banget unboxing samsung galaxy A51</div>
          <div class="publish-side__right">20 Jam lalu</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
let param = router.currentRoute.value.params;
const { data } = await useAsyncData('data', () => $fetch(`https://suara.com/data/service/detail?slug=${param.year}/${param.month}/${param.date}/${param.id}/${param.slug}`));
</script>

<style scoped>
.wrap-content-detail {
  padding-left: 16px;
  display: flex;
}

.wrap-content-left {
  width: 640px;
}

.wrap-content-left img{
  width: 640px;
  height: auto;
}

.text-categories{
  color: #828282;
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
}

.text-title{
  color: white;
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
}

.publish-author{
  padding-top: 8px;
  color: #828282;
  font-size: 12px;
  font-weight: 300;
}

.tag {
  font-weight: 700;
  font-size: 14px;
  color: #828282;
}

.title--primary {
  padding-top: 8px;
}

.wrap-content-right {
  width: 320px;
  height: 100px;
  padding-left: 6px;
  display: flex;
  align-items: center;
}

.wrap-title__caption{
  padding-left: 6px;
}

.wrap-content-right .title-side__right {
  color: white;
  font-size: 12px;
}

.wrap-content-right .publish-side__right {
  color: #4F4F4F;
  font-size: 12px;
}
</style>