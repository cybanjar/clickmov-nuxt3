<template>
  <aside class="sidebar">
    <NuxtLink to="/">
      <div class="flex justify-content-center items-center pa-lg logo">
        <img src="~/assets/images/Logo.png" />
      </div>
    </NuxtLink>
    <ul>
      <li>Beranda</li>
      <li>
        <NuxtLink class="active" to="/tv"> Most Popular </NuxtLink>
      </li>
    </ul>
    <hr />
    <ul>
      <li>
        <NuxtLink class="active" to="/user"> Playlist </NuxtLink>
      </li>
    </ul>
    <hr />
    <ul>
      <li>News</li>
      <li>Entertainment</li>
      <li>Sport</li>
      <li>Lifestyle</li>
      <li>Travel</li>
    </ul>
    <hr />
    <ul v-for="(item, index) in state.linkIcon" :key="index">
      <li class="icons">
        <img
          :src="item['img']"
          style="width: 24px; height: auto; margin: 0 8px 0 0"
        />
        <span style="font-size: 14px">{{ item["label"] }}</span>
      </li>
    </ul>
    <hr />
    <div class="follow-us">
      <div>Follow Us:</div>
      <div class="my-md">
        <img src="../assets/images/fb.png" alt="" />
        <img src="../assets/images/tw.png" alt="" />
        <img src="../assets/images/ig.png" alt="" />
        <img src="../assets/images/yt.png" alt="" />
      </div>
      <div class="font-11 text-grey-4 opacity-60">
        <div class="text-bold">PT. Arkadia Media Nusantara</div>
        <div>
          Jln Mega Kuningan Timur Blok C6 Kav.9 Kawasan Mega Kuningan, Jakarta
          12950, Indonesia
        </div>
        <div>Tel: 021 - 724 1888 / 021 - 720 8374 Fax: 021 - 724 1887</div>
        <div>
          Email: redaksi@suara.com <br />
          Iklan: sales@suara.com
        </div>
      </div>
    </div>
    <hr />
    <div class="copyright">© 2021 clickmov - All Rights Reserved.</div>
  </aside>
</template>

<script setup>
import { reactive } from "vue";
import data from "~/data/dummy.json";

const state = reactive({
  linkIcon: [],
});

const dataDummy = data;
state.linkIcon = dataDummy.linkIcon;
</script>

<style lang="scss">
ul {
  padding: 0 24px;
  li {
    padding: 10px 0 10px 0;
    list-style: none;
    .active {
      color: #fcf318;
      text-decoration: none;
    }
  }
  li.icons {
    display: flex;
    justify-items: center;
  }
}

hr {
  border: 1px solid #302f2f;
}

.sidebar {
  width: 280px;
  background-color: #111;
  height: 100%;
  overflow-y: auto;
  top: 0;
  z-index: 5;
}

.follow-us {
  padding: 8px 24px;
  img {
    padding: 0 6px 0 0;
    flex-wrap: wrap;
  }
}

.copyright {
  margin: 16px 0;
  text-align: center;
  opacity: 60%;
  font-size: 11px;
}
</style>