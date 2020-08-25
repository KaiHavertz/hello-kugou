<template>
  <section class="home">
    <main>
      <img alt="logo"
           src="@/assets/img/logo.png" />
      <div class="home__title">Hello 手机端!</div>
      <router-link to="/home">
        <el-button type="primary"
                   icon="el-icon-user">豪爽</el-button>
      </router-link>
    </main>
  </section>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="scss" scoped>
</style>