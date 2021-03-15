<template>
  <div class="score-1">
      Score ACR/EU

        Choisir l'entrée
        Atteintes articulaires
      <input type="checkbox">

      <button>Calculer</button>
      <input type="text" value="0">
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "CriteresAcrEu",
  data()
  {
    return {
        result: [],
    }
  },
  mounted()
  {
      
  },
})
</script>
