<template>
  <div class="home">
    <img alt="Logo" src="../assets/logo.png" width="140">
    <HelloWorld msg="Welcome to your app"/>
    <h1>Bienvenue sur {{appInfo.name}}</h1>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import Vue from "vue"
import HelloWorld from '@/components/HelloWorld.vue'
import Auth from "../service/Auth"

export default Vue.extend({
  name: "Home",
  components: { HelloWorld },
  data()
  {
    return {
      appInfo: {},
      appSection: {}
    }
  },
  mounted()
  {
    console.log(Auth.getApiKey())
    this.loadData()
    .then((result: any) => {
      this.appInfo = result.appData
      this.appSection = result.tree
    })
  },
  methods:
  {
    async loadData() {
      const data = await axios.get(`${window.location.origin + window.location.pathname}/data.json`);
      return data.data
    }
  }
})
</script>
