<template>
  <div class="content-page">
      
      <keep-alive>
        <component v-bind:is="currentComponent"></component>
      </keep-alive>

      <!--<CllBallScore v-if="scoreName === 'cll-ball-3'"></CllBallScore>
      <BinetScore v-if="scoreName === 'binet-2'"></BinetScore>
        -->
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import CllBallScore from "@/components/scores/CllBallScore.vue"
import BinetScore from "@/components/scores/BinetScore.vue"

export default Vue.extend({
    name: "Home",
    components: {
        CllBallScore,
        BinetScore,
    },
    data()
    {
        return {
            currentComponent: null,
            //scoreName: null,
        }
    },
    mounted()
    {
        //this.scoreName = this.$route.params.slug
        const slug = this.$route.params.slug

        // boucle sur data.json pour trouver l'entrée
        //....
        this.currentComponent = "BinetScore"
        //DataService.load()
        //    .then(() => {
        //        this.categories = DataService.$data.tree
        //    }).catch(e => {
        //        console.log(e)
        //    })
    },
})
</script>
