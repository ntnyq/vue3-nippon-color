<template>
  <div class="card">
    <div
      :style="`background-color: #${rgb}`"
      class="color-block"
    />
    <div class="monji-block">
      <div class="kanji">
        {{ kanji }}
      </div>
      <div class="rgb">
        {{ `#${rgb}` }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ColorTab',

  props: {
    kanji: {
      type: String,
      required: true,
    },

    rgb: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="stylus" scoped>
@import "~@/styles/core/index"

.card
  display flex
  justify-content flex-start
  align-items center
  height 2.5rem
  color #3a3226
  cursor pointer

.color-block
  width 0.5rem
  height 100%
  margin-right 0.5rem

.monji-block
  flex-grow 0
  flex-shrink 1
  display flex
  flex-direction column
  justify-content center
  align-items flex-start
  width 100%
  ellipsis()

.kanji
  width 100%
  text-align left
  font-family XANO
  font-size 1.2rem
  ellipsis()

.rgb
  font-size 0.8rem
</style>
