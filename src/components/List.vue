<template>
  <div class="list">
        <div v-for="item in cats" :key="item.id">
            <div @click="onClick(item)">{{item.name}}</div>
            
            <List :cats="item.children"></List>
            <!--<div v-for="subItem in item.children" :key="subItem.id">
                <router-link :to="'/score/'+subItem.slug">{{subItem.name}}</router-link>
            </div>-->

        </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue"

export default Vue.extend({
    name: "List",
    props: ["cats"],
    data()
    {
        return {
            
        }
    },
    mounted()
    {
        
    },
    methods: {
        onClick(item: any) {
            this.$emit("truc", item)
        } 
    }
})
</script>