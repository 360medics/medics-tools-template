<template>
  <div class="home">
    <img alt="Logo" src="../assets/logo.png" width="140">
    <HelloWorld msg="Welcome to your app"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import HelloWorld from '@/components/HelloWorld.vue'
import Auth from "../service/Auth"

export default Vue.extend({
    name: "Home",
    components: { HelloWorld },
    mounted()
    {
        console.log(Auth.getApiKey())
    }
})
</script>
