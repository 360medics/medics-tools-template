<template>
  <div class="list-page">
      Hello list page
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import DataService from "@/service/DataService"

export default Vue.extend({
  name: "ListPage",
  data()
  {
    return {
        list: [],
    }
  },
  mounted()
  {
      DataService.load()
            .then(() => {
                console.log(DataService.$data)
            }).catch(e => {
                console.log(e)
            })
  },
})
</script>
