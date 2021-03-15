<template>
  <div class="home">
      <!--<CriteresAcrEu></CriteresAcrEu>-->

        <!--<BinetScore></BinetScore>-->
        
        <div class="main-categories">
            <div v-for="item in categories" :key="item.id">
                <div>{{item.name}}</div>
                <div v-for="subItem in item.children" :key="subItem.id">
                    <router-link :to="'/score/'+subItem.slug">{{subItem.name}}</router-link>
                </div>
                <!--<router-link :to="'/list/'+cat.slug">{{cat.name}}</router-link>-->
            </div>
        </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import BinetScore from "@/components/scores/BinetScore.vue"
import DataService from "@/service/DataService"

export default Vue.extend({
    name: "Home",
    components: {BinetScore},
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
