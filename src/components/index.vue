<template>
  <div>
    手机端
    {{this.$pc}}
  </div>

</template>

<script>

export default {

  name: 'index',
  watch: {
    $route: function (to, from) {
      if (to.name.indexOf('_p') > 0 && !this.$pc) {
        this.$router.replace(to.name.split('_p')[0])
      } else if (to.name.indexOf('_p') < 0 && this.$pc) {
        this.$router.replace(to.name + '_p')
      }
    }

  }, mounted () {
    console.log('手机端');
  }
}
</script>

<style lang="scss" scoped>
</style>