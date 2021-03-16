<template>
  <div id="app">
        <Header></Header>
        <div class="scrollable-content">
            <router-view></router-view>
        </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import Header from "@/components/Header.vue"
import DataService from "@/service/DataService"

export default Vue.extend({
    components: { Header },
    data() {
        return {
           
        }
    },
    methods: {

    },
    mounted()
    {
        DataService.load()
    },
})
</script>

<style lang="scss">
@import "./sass/global.scss";
@import "./sass/_variables.scss";

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.scrollable-content {
    margin-top: $headerHeight;
    overflow: auto;
    width: 100%;
    height: 100%;
}
</style>
