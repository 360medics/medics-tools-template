<template>
  <div id="app">
        <Header></Header>

        <div>{{name}}</div>
        <div class="main-categories">
            <div v-for="cat in categories" :key="cat.id">
                <router-link :to="'/'+cat.slug">{{cat.name}}</router-link>
            </div>
        </div>

  </div>
</template>

<script lang="ts">
import Vue from "vue"
import Header from "@/components/Header.vue"
//import Auth from "./service/Auth"
import DataService from "@/service/DataService"

export default Vue.extend({
    components: { Header },
    data() {
        return {
           name: "RIEN",
           categories: [],
        }
    },
    methods: {

    },
    mounted()
    {
        //const apiKey = Auth.getApiKeyFromUrl()

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
