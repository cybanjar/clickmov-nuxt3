<template>
    <div class="wrap-content-detail">
        <!-- <div>{{ $route.params }}</div>
        <pre> {{ data }} </pre>  -->
        <div class="top-header">
            <div class="wrap-images">
                <img src="/images/kuliner.png" alt="">
            </div>
            <div class="wrap-text">
                <div class="text-heading">Kuliner Hunter</div>
                <div>
                <ul>
                    <li>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <img src="/images/sosmed/Icon_Facebook.png" alt="facebook">
                    </a>
                    </li>
                    <li>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <img src="/images/sosmed/Icon_Twitter.png" alt="twitter">
                    </a>
                    </li>
                    <li>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <img src="/images/sosmed/Icon_Instagram.png" alt="instagram">
                    </a>
                    </li>
                    <li>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <img src="/images/sosmed/Icon_Youtube.png" alt="youtube">
                    </a>
                    </li>
                </ul>
                </div>
                <div>
                <p class="text-caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.  Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                </div>
            </div>
            </div>
            <div class="wrap-terbaru">
            <div class="title--primary">Terbaru</div>
            <div v-for="index in 20" :key="index" class="wrap-videos">
                <img src="/images/category/image_terbaru.png" alt="Trulli">
                <div class="wrap-text__caption">
                <div class="text-title">Anya Geraldine petuangan film yang sangat menarik</div>
                <div class="publish-date">2 Hari Lalu</div>
                </div>
                <img src="/images/category/icon_play.png" alt="Trulli">
            </div>
        </div>
    </div>
</template>

<script setup>
const router = useRouter();
let param = router.currentRoute.value.params;
const { data } = await useAsyncData('data', () => $fetch(`https://www.suara.com/data/service/terkini?category=video,${param.slug}`))
// console.log(data.value);

</script>

<style scoped>
.wrap-content-detail {
  padding-left: 16px;
}

.top-header {
  display: flex;
}

.wrap-images {
  width: 480px;
}

.wrap-images img {
  width: 480px;
  object-fit: cover;
}

.wrap-text {
  width: 480px;
  padding: 24px 36px;
}

.text-heading {
  font-size: 24px;
  line-height: 36px;
  font-weight: 500;
  color: #bdbdbd;
}

ul {
  list-style: none;
  display: inline-flex;
}
ul li {
  margin-right: 6px;
}

.text-caption {
  color: #E0E0E0;
  font-size: 14px;
  font-weight: 300;
  line-height: 21px;
}

.wrap-videos {
  display: flex;
  width: 480px;
  float: left;
  align-items: center;
  margin-right: 6px;
  margin-bottom: 6px;
}

.wrap-text__caption{
  padding: 8px;
}

.text-title{
  color: #E0E0E0;
  font-size: 14px;
}

.publish-date{
  color: #4F4F4F;
}
</style>