<template>
  <div>
    <header class="header">
      <div class="navbar-top">
        <div class="other-portal">
          <a v-for="(item, index) in state.iconsOtherPortal"
             :key="index" 
             :href="item['link']" target="_blank" :rel="item['link']">
            <img
              :alt="item['link']"
              :src="item['img']"
            />
          </a>
        </div>
        <div class="sosmed">
          <span class="date-now"> {{ currentDate.substr(0, 15) }}</span>
          <a v-for="(i, index) in state.iconsHeaderSosmed"
             :key="index" 
             :href="i['link']"
             target="_blank"
          >
            <img
              class="mr-6"
              :src="i['img']"
            />
          </a>
        </div>
      </div>
      <div class="wrap-live-searching">
        <button class="button-live" type="button">Live</button>
        <img class="img-live-right" src="/images/icons/live.png" />
        <input
          type="text"
          class="button-search"
          placeholder="Masukkan kata kunci..."
        />
      </div>
      <div>
        <img width="1090" height="101" alt="ads-leaderboard" class="ads-leaderboard" src="/images/icons/ads1.png" />
      </div>
    </header>
  </div>
</template>

<script>
export default {
  layout: "default",
};
</script>

<script setup>
import { onMounted, reactive } from "vue";
import data from "../data/dummy.json";

const state = reactive({
  iconsHeaderSosmed: [],
  iconsOtherPortal: [],
});

const dataDummy = data;
state.iconsOtherPortal = dataDummy["iconsHeader"];
state.iconsHeaderSosmed = dataDummy["iconsHeaderRight"];

let date = new Date();
const currentDate = date.toString();
</script>

<style lang="scss">

.other-portal {
  padding: 8px 8px 8px 20px;
  display: flex;
  img {
    padding: 0 8px 0 0;
  }
}

.wrap-live-searching  {
  display: flex;
  padding: 16px;
}

.sosmed {
  display: flex;
  align-items: center;
  margin-right: 12px;
}

.date-now {
  font-size: 12px;
  margin-right: 8px;
}

.navbar-top {
  display: flex;
  justify-content: space-between;
}

.button-live {
  background: #ff0000;
  color: white;
  padding: 8px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  margin-right: 16px;
}

.button-search {
  width: 384px;
  border-radius: 5px;
  padding: 8px 16px;
  border: none;
}

.ads-leaderboard {
  width: 100%;
  padding: 8px 16px;
}

.img-live-right {
  margin-right: 24px;
}
</style>