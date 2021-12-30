<template>
  <aside class="sidebar">
    <NuxtLink to="/">
      <div class="logo">
        <img src="/images/Logo.png" />
      </div>
    </NuxtLink>
    <ul class="menu">
      <li>
        <NuxtLink to="/"> Beranda </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/most-popular"> Most Popular </NuxtLink>
      </li>
    </ul>
    <hr />
    <ul class="menu">
      <li>
        <NuxtLink to="/playlist"> Playlist </NuxtLink>
      </li>
    </ul>
    <hr />
    <ul class="menu">
      <li>
        <NuxtLink to="/news">News</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/entertainment">Entertainment</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/sport">Sport</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/lifestyle">Lifestyle</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/travel">Travel</NuxtLink>
      </li>
    </ul>
    <hr />
    <ul class="list-other-portal" v-for="(item, index) in state.linkIcon" :key="index">
      <li class="icons">
          <a class="link" :href="item['link']" target="_blank">
            <img
              :src="item['img']"
              style="width: 24px; height: auto; margin: 0 8px 0 0"
            />
            <span>{{ item["label"] }}</span>
          </a>
      </li>
    </ul>
    <hr />
    <div class="follow-us">
      <div>Follow Us:</div>
      <div class="image-sosmed">
        <a href="https://www.facebook.com/suaradotcom" target="_blank" rel="noopener noreferrer">
          <img src="/images/fb.png" alt="" />
        </a>
        <a href="https://twitter.com/suaradotcom" target="_blank" rel="noopener noreferrer">
          <img src="/images/tw.png" alt="" />
        </a>
        <a href="https://instagram.com/suaradotcom" target="_blank" rel="noopener noreferrer">
          <img src="/images/ig.png" alt="" />
        </a>
        <a href="https://www.youtube.com/user/suaradotcom" target="_blank" rel="noopener noreferrer">
          <img src="/images/yt.png" alt="" />
        </a>
      </div>
      <div class="profile-arkadia">
        <div class="profile-name">{{ state.profile.companyName }}</div>
        <div> {{ state.profile.address }} </div>
        <div>{{ state.profile.tel }}</div>
        <div>{{ state.profile.fax }}</div>
        <div> Email: {{ state.profile.email }} </div>
        <div> Iklan: {{ state.profile.iklan }} </div>
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
  profile: {},
});

const dataDummy = data;
state.linkIcon = dataDummy.linkIcon;
state.profile = dataDummy.profileSuara;
</script>

<style lang="scss">
ul.menu {
  padding: 0 24px;
  li {
    padding: 10px 0 10px 0;
    list-style: none;
    .active {
      color: #fcf318;
      text-decoration: none;
    }
  }
  li a {
    color: white;
    text-decoration: none;
  }
  li a:active {
    color: #fcf318;
  }
  li a:hover {
    color: #fcf318;
  }
  li a.router-link-active {
    font-weight: 600;
    letter-spacing: 1.5px;
  }
  li a.router-link-exact-active {
    color: #fcf318;
  }
  li.icons {
    display: flex;
    justify-items: center;
  }
  li a.link {
    display: flex;
  }
}

ul.list-other-portal {
 padding: 0 24px;
 li {
   padding: 2px 0 2px 0;
   list-style: none;
 }
 li a.link {
   display: flex;
   color: #dbdbdb;
   text-decoration: none;
   cursor: pointer;
   span {
      font-size: 14px;
      font-weight: 300;
    }
 } 
}

hr {
  border: 1px solid #302f2f;
}

.sidebar {
  width: 280px;
  background-color: #111;
  height: 100vh;
  overflow-y: auto;
  top: 0;
  z-index: 5;
  position: sticky;
}

.follow-us {
  padding: 8px 24px;
  img {
    padding: 0 6px 0 0;
    flex-wrap: wrap;
  }
}

.profile-arkadia {
  font-size: 11px;
  color: #c9c9c9;
}

.copyright {
  margin: 16px 0;
  text-align: center;
  font-size: 11px;
  color: #c9c9c9;
}

.logo {
  display: flex;
  justify-content: center;
  justify-items: center;
  padding: 24px;
  background-color: #46184A;
}

.image-sosmed {
  margin: 16px 0;
}
</style>

<style scoped>
.profile-name {
  font-weight: 700;
}
</style>