<template>
  <div class="dashboard-container">
    <div v-text="list"></div>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="22" :lg="12" :xl="12">
        <div class="dashboard-block">
          <div class="head">病历总数：</div>
          <div class="num"><span v-text="list.allMedicallCount"></span> 例</div>
          <div class="info">
            <el-row>
              <el-col :span="8">
                <el-row>
                  <el-col :span="8">昨日新增：</el-col>
                  <el-col :span="16" v-text="list.dayMedicallCount"></el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row>
                  <el-col :span="8">近7天新增：</el-col>
                  <el-col :span="16" v-text="list.weekMedicallCount"></el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row>
                  <el-col :span="8">近30天新增：</el-col>
                  <el-col :span="16" v-text="list.monthMedicallCount"></el-col>
                </el-row>
              </el-col>
              <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
              <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="22" :lg="12" :xl="12">
        <div class="dashboard-block">
          <div class="head">协诊总数：</div>
          <div class="num"><span v-text="list.allConsCount"></span> 例</div>
          <div class="info">
            <el-row>
              <el-col :span="8"><div class="grid-content bg-purple">昨日新增</div></el-col>
              <el-col :span="8"><div class="grid-content bg-purple-light">近7天新增</div></el-col>
              <el-col :span="8"><div class="grid-content bg-purple">近30天新增</div></el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getDashboard } from '@/api/dashboard'

export default {
  data() {
    return {
      list: {
        allMedicallCount: '...',
        dayMedicallCount: '...',
        weekMedicallCount: '...',
        monthMedicallCount: '...',
        allConsCount: '...'
      }
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
  @import 'src/styles/color.scss';
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
.dashboard {
  &-container {
    margin: 30px;
  }
  &-block {
    padding: 20px;
    background-color: #ffffff;
    color:$grey;
    border-radius: 10px;
    box-shadow: #000 0 0 10px 0;
    font-size: 14px;
    .head{
      height: 30px;
      line-height: 30px;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .num{
      margin-left: 30px;
      height: 40px;
      span {
        font-size: 36px;
        font-weight: bold;
        color: #2B8DE5;
        height: 40px;
        line-height: 40px;
      }
    }
    .info{
      height: 30px;
      margin: 40px 0 0 20px;
      line-height: 30px;
      color: #a6a6a6;
      position: relative;
    }
  }
}
</style>
