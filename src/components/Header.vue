<template>
  <div class="header">
   <span>Mon header</span>
    <a href="cmd://webview-close">CLOSE</a>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
    mounted()
    {
        //
    }
})
</script>

<style lang="scss">
@import "../sass/_variables.scss";

.header {
    position: fixed;
    width: 100%;
    height: $headerHeight;
    background-color: rgb(108, 108, 202);
}
</style>
