<template>
  <section class="home">
    <main>
      <img alt="logo"
           src="@/assets/img/logo.png" />
      <div class="home__title">Hello pc端!</div>
      <router-link to="/home">
        <el-button type="primary"
                   icon="el-icon-user">豪爽</el-button>
      </router-link>
      <router-link to="/piano">
        <el-button type="normal"
                   icon="el-icon-s-home">钢琴</el-button>
      </router-link>
    </main>
  </section>
</template>

<script>

export default {

  name: 'index_p',
  watch: {
    $route: function (to, from) {
      if (to.name.indexOf('_p') > 0 && !this.$pc) {
        this.$router.replace(to.name.split('_p')[0])
      } else if (to.name.indexOf('_p') < 0 && this.$pc) {
        this.$router.replace(to.name + '_p')
      }
    }

  }, mounted () {
    console.log(2222);
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;
  background-color: #282c34;
  display: flex;
  &__title {
    font-size: 60px;
    margin-top: 40px;
    color: #ffffff;
  }

  &__link {
    margin-top: 20px;
    text-decoration: underline;
    color: #61dafb;
  }

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    text-align: center;
  }
}
</style>