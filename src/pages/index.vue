<template>
  <div id="root">
    <router-view />
  </div>
</template>
<script>

export default {
  name: 'index',
  watch: {
    $route: function (to, from) {
      console.log(to.name);
      if (to.name.indexOf('_p') > 0 && !this.$pc) {
        this.$router.replace(to.name.split('_p')[0])
        console.log('手机端')
      } else if (to.name.indexOf('_p') < 0 && this.$pc) {
        this.$router.replace(to.name + '_p')
        console.log('电脑端')
      }
    }
  }
}
</script>
<style lang="scss">
@import url(~@/styles/index.scss);
</style>

