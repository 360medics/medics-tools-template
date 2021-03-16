<template>
  <div class="home">
        
        <div class="main-categories">
            <List @truc="test($event)" :cats="categories"></List>
            <input v-model="myValue" @change="onInputChange">
        </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import List from "@/components/List.vue"
import BinetScore from "@/components/scores/BinetScore.vue"
import DataService from "@/service/DataService"

export default Vue.extend({
    name: "Home",
    components: { List, BinetScore },
    data()
    {
        return {
            myValue: 42,
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
    methods: {
        onInputChange() {
            console.log(this.myValue)
        },
        test(e: any) {
            console.log("Sub item list clicuqed!", e)
        }
    }
})
</script>
