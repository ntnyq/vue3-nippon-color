<template>
  <div class="home">
    <div class="display">

    </div>
    <div class="tab-wrapper">
      <div class="tab">
        <color-tab
          @click="changeColor(color)"
          v-for="color in colorList"
          :key="color.name"
          :kanji="color.name"
          :rgb="color.rgb"
          class="tab-item js-tab-item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import {
  ColorTab,
} from '@/components'

export default {
  name: 'Home',

  components: {
    ColorTab,
  },

  setup () {
    const router = useRouter()
    const store = useStore()

    const colorList = ref(store.state.colors)
    const activeColor = ref({})

    const changeColor = color => {
      router.push({ path: '/', query: { c: color.rgb } })
    }

    return {
      colorList,
      activeColor,
      changeColor,
    }
  },
}
</script>

<style lang="stylus" scoped>
@import '~@/styles/core/index'

.home
  display flex
  justify-content center
  align-items center
  height 100%

.display
  position relative
  width 100px
  height 100%
  flex-grow 1
  transition all 1s

.tab-wrapper
  flex-shrink 0
  height 100%
  overflow-y auto

  +mq-phone()
    flex-basis 100px

  +mq-tablet()
    flex-basis 400px

  +mq-desktop()
    flex-basis 800px

  +mq-desktop-plus()
    flex-basis 1200px

.tab
  position relative
  width 100%
  min-height 100%

  &:before
    content ''
    position absolute
    display block
    width 100%
    height 100%
    background-image url('~@/assets/images/bg1.png')
    background-attachment local
    background-repeat repeat
    opacity 0.3

  +mq-tablet-up()
    display flex
    justify-content flex-start
    align-items flex-start
    flex-wrap wrap

.tab-item
  margin-bottom 1rem

  +mq-phone()
    width 100%

  +mq-tablet()
    width 33%

  +mq-desktop()
    width 25%

  +mq-desktop-plus()
    width 20%

.color-bright
  color #fffffb !important

.bg-bright
  background-color #fffffb !important

.js-tab-item
  // For animate initial state
  opacity 1
</style>
