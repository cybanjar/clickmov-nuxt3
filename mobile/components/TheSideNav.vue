<template>
  <div class="sidenav" :class="{active : counter.$state.showSidebar}" >
    <div class="wrap-sidenav">
      <div class="side-menu">
        <ul>
          <li @click="counter.$state.showSidebar = !counter.$state.showSidebar">
            <NuxtLink to="/">Beranda</NuxtLink>
          </li>
          <li class="br-b-2-grey">
            <a href="#"> Most Popular Video </a>
          </li>
          <li class="br-b-2-grey">
            <a href="#"> Playlist </a>
          </li>
          <li @click="counter.$state.showSidebar = !counter.$state.showSidebar">
            <NuxtLink to="/news">News</NuxtLink>
          </li>
          <li @click="counter.$state.showSidebar = !counter.$state.showSidebar">
            <NuxtLink to="/entertainment">Entertainment</NuxtLink>
          </li>
          <li @click="counter.$state.showSidebar = !counter.$state.showSidebar">
            <NuxtLink to="/sport">Sport</NuxtLink>
          </li>
          <li @click="counter.$state.showSidebar = !counter.$state.showSidebar">
            <NuxtLink to="/lifestyle">Lifestyle</NuxtLink>
          </li>
          <li @click="counter.$state.showSidebar = !counter.$state.showSidebar">
            <NuxtLink to="/travel">Travel</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="side-other-portal mb20 pb20">
        <ul class="mt20">
          <li>
            <a href="https://www.suara.com" target="_blank">
              <img src="../assets/images/icons/Icon_suara.png" />
              <span> Suara.com </span>
            </a>
          </li>
          <li>
            <a href="https://www.matamata.com" target="_blank">
              <img src="../assets/images/icons/Icon_mata2.png" />
              <span> Matamata.com </span>
            </a>
          </li>
          <li>
            <a href="https://www.bolatimes.com" target="_blank">
              <img src="../assets/images/icons/Icon_bolatimes.png" />
              <span> Bolatimes.com </span>
            </a>
          </li>
          <li>
            <a href="https://www.hitekno.com" target="_blank">
              <img src="../assets/images/icons/Icon_hitekno.png" />
              <span> Hitekno.com </span>
            </a>
          </li>
          <li>
            <a href="https://www.dewiku.com" target="_blank">
              <img src="../assets/images/icons/Icon_dewiku.png" />
              <span> Dewiku.com </span>
            </a>
          </li>
          <li>
            <a href="https://www.mobimoto.com" target="_blank">
              <img src="../assets/images/icons/Icon_mobimoto.png" />
              <span> Mobimoto.com </span>
            </a>
          </li>
          <li>
            <a href="https://www.guideku.com/" target="_blank">
              <img src="../assets/images/icons/Icon_guideku.png" />
              <span> Guideku.com </span>
            </a>
          </li>
          <li>
            <a href="https://www.himedik.com/" target="_blank">
              <img src="../assets/images/icons/Icon_Himedik.png" />
              <span> Himedik.com </span>
            </a>
          </li>
          <li>
            <a href="https://www.serbada.com/" target="_blank">
              <img src="../assets/images/icons/Icon_serbada.png" />
              <span> Serbada.com </span>
            </a>
          </li>
        </ul>
      </div>

      <div class="side-info">
        <h4>Follow Us:</h4>
        <ul class="wrap-list-sosmed">
          <li>
            <a href="https://www.facebook.com/suaradotcom" target="_blank">
              <i class="icon-svg icon-svg-fb-color"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/suaradotcom" target="_blank">
              <i class="icon-svg icon-svg-tw-color"></i>
            </a>
          </li>
          <li>
            <a href="https://instagram.com/suaradotcom" target="_blank">
              <i class="icon-svg icon-svg-ig-color"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/user/suaradotcom" target="_blank">
              <i class="icon-svg icon-svg-yt-color"></i>
            </a>
          </li>
        </ul>
        <p>
          <strong>PT. Arkadia Media Nusantara</strong> <br />Jl.
          Sisingamangaraja No. 21 Kebayoran Baru, Jakarta Selatan 12120,
          Indonesia <br />
          Tel: 021 - 724 1888 / 021 - 720 8374 <br />
          Fax: 021 - 724 1887 <br />
          Email: redaksi@suara.com <br />
          Iklan: sales@suara.com
        </p>
      </div>

      <div class="side-foot mt20 pb20">
        <span class="footer"> &copy; 2020 moov - All Rights Reserved. </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCounter } from "~/store/counter";
const counter = useCounter();
</script>

<style lang="scss" scoped>
li a.router-link-active {
    font-weight: 600;
    letter-spacing: 1.5px;
  }
  li a.router-link-exact-active {
    color: #fcf318;
  }

</style>