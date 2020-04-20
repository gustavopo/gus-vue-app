import Vue from 'vue'
const EventBus = new Vue({
  methods: {
    showDrawer() {
      this.$emit('showDrawer', event)
    },
    toggleNavigation() {
      this.$emit('toggleNavigation', event)
    }
  }
})
export default EventBus
