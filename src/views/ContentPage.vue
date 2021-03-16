<template>
  <div class="content-page">
      
      <keep-alive>
        <component v-bind:is="currentComponent"></component>
      </keep-alive>

      <template v-if="notFound">
          <p>Page not found.</p>
      </template>

      <!--<CllBallScore v-if="scoreName === 'cll-ball-3'"></CllBallScore>
      <BinetScore v-if="scoreName === 'binet-2'"></BinetScore>
        -->
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import DataService from "@/service/DataService"
import CllBallScore from "@/components/scores/CllBallScore.vue"
import BinetScore from "@/components/scores/BinetScore.vue"

export default Vue.extend({
    name: "ContentPage",
    components: {
        CllBallScore,
        BinetScore,
    },
    data()
    {
        return {
            notFound: false,
            currentComponent: null,
        }
    },
    mounted()
    {
        //this.scoreName = this.$route.params.slug
        const slug = this.$route.params.slug

        // boucle sur data.json pour trouver l'entrée
        //....
        //@TODO: Search in data.json WHERE slug === slug
        //this.currentComponent = "BinetScore"
        DataService.load()
            .then(() => {

                const cat = this.searchBySlug(DataService.$data.tree, slug)
                
                if (cat === null) {
                    this.notFound = true
                } else {
                    this.currentComponent = cat.component
                }

            }).catch(e => {
                console.log(e)
            })
    },
    methods: {
        searchBySlug(dataJsonTree: Array<any>, slug: string) {
            for (let i in dataJsonTree) {
                const mainCategory = dataJsonTree[i]

                for (let j in mainCategory.children) {
                    const subCategory = mainCategory.children[j]

                    if (subCategory.slug === slug) {
                        return subCategory
                    }
                }

            }

            return null
        }
    }
})
</script>
