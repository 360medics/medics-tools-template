<template>
  <div class="home">
     <div class="main-categories">
        <div v-for="cat in categories" :key="cat.id">
            <router-link :to="'/list/'+cat.slug">{{cat.name}}</router-link>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import DataService from "@/service/DataService"

export default Vue.extend({
    name: "Home",
    data()
    {
        return {
            categories: []
        }
    },
    mounted()
    {
        DataService.load()
            .then(() => {
                this.categories = DataService.$data.tree
            }).catch(e => {
                console.log(e)
            })
    },
})
</script>
