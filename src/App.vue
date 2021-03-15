<template>
  <div id="app">
        <Header></Header>
        <router-view></router-view>
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
            .then(() => {
                this.name = DataService.$data.appData.name
                this.categories = DataService.$data.tree
            }).catch(e => {
                console.log(e)
            })
    },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

position: fixed;
  width: 100%;
  height: 100%
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
