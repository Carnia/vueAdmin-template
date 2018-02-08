<template>
  <div class="dashboard-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="22" :lg="12" :xl="12">
        <div class="dashboard-block">
          <div class="head">病历总数：</div>
          <div class="num"><span v-text="list.allMedicallCount"></span> 例</div>
          <div class="info">
            <el-row>
              <el-col :span="8">
                <el-row>
                  <el-col :span="10">昨日新增：</el-col>
                  <el-col :span="12" v-text="list.dayMedicallCount"></el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row>
                  <el-col :span="10">近7天新增：</el-col>
                  <el-col :span="12" v-text="list.weekMedicallCount"></el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row>
                  <el-col :span="10">近30天新增：</el-col>
                  <el-col :span="12" v-text="list.monthMedicallCount"></el-col>
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
          <div class="infoExtra">
            其中转诊数：<span v-text="list.allTsConsCount"></span>
            手术数： <span v-text="list.allOpsCount"></span>
          </div>
          <div class="info">
            <el-row>
              <el-col :span="8">
                <el-row>
                  <el-col :span="10">昨日新增：</el-col>
                  <el-col :span="12" v-text="list.dayConsCount"></el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row>
                  <el-col :span="10">近7天新增：</el-col>
                  <el-col :span="12" v-text="list.weekConsCount"></el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row>
                  <el-col :span="10">近30天新增：</el-col>
                  <el-col :span="12" v-text="list.monthConsCount"></el-col>
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
          <div class="head">医院总数：</div>
          <div class="num"><span v-text="list.allHospCount"></span> 所</div>
          <div class="info">
            <el-row>
              <el-col :span="8">
                <el-row>
                  <el-col :span="10">昨日新增：</el-col>
                  <el-col :span="12" v-text="list.dayHospCount"></el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row>
                  <el-col :span="10">近7天新增：</el-col>
                  <el-col :span="12" v-text="list.weekHospCount"></el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row>
                  <el-col :span="10">近30天新增：</el-col>
                  <el-col :span="12" v-text="list.monthHospCount"></el-col>
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
          <div class="head">医生总数：</div>
          <div class="num"><span v-text="list.allDoctorCount"></span> 所</div>
          <div class="info">
            <el-row>
              <el-col :span="8">
                <el-row>
                  <el-col :span="10">昨日新增：</el-col>
                  <el-col :span="12" v-text="list.dayDoctorCount"></el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row>
                  <el-col :span="10">近7天新增：</el-col>
                  <el-col :span="12" v-text="list.weekDoctorCount"></el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row>
                  <el-col :span="10">近30天新增：</el-col>
                  <el-col :span="12" v-text="list.monthDoctorCount"></el-col>
                </el-row>
              </el-col>
              <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
              <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
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

        allConsCount: '...',
        dayConsCount: '...',
        weekConsCount: '...',
        monthConsCount: '...',

        allHospCount: '...',
        dayHospCount: '...',
        weekHospCount: '...',
        monthHospCount: '...',

        allDoctorCount: '...',
        dayDoctorCount: '...',
        weekDoctorCount: '...',
        monthDoctorCount: '...',

        allTsConsCount: '...',
        allOpsCount: '...'
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
    margin: 10px 0;
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
    .infoExtra{
      margin-left: 30px;
      height: 40px;
      line-height: 40px;
    }
    .infoExtra+.info{
      margin-top: 0;
    }
    .info{
      height: 30px;
      margin: 40px 0 0 20px;
      line-height: 30px;
      color: #a6a6a6;
      position: relative;
      .el-col-12{
        font-size: 18px;
        color: #000000;
      }
    }
  }
}
</style>
