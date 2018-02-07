<template>
  <div class="dashboard-container">
    <div class="dashboard-text">roles:<span v-for='role in roles' :key='role'>{{role}}</span></div>
    <div class="dashboard-text" v-text="list"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getDashboard } from '@/api/dashboard'

export default {
  data() {
    return {
      list: null
    }
  },
  name: 'dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  created() {
    getDashboard().then(response => {
      this.list = response.data
    })
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
