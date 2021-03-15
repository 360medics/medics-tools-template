<template>
  <div class="score-1">
      <h2>Binet Staging System for Chronic Lymphocytic Leukemia (CLL)</h2>
        
      <div>
          <table>
            <tr>
                  <td>Areas of lymphadenopathy Cervical, axillary, inguinal, spleen, and liver</td>
                  <td>
                    <button style="background:green">>3</button>
                </td>
                <td>
                    <button style="background:green">inf3</button>
                </td>
            </tr>
        </table>

    </div>

      <input type="text" value="0">
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "BinetScore",
  data()
  {
    return {
        result: null,
    }
  },
  mounted()
  {
      
  },
})
</script>
