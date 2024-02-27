<template>
<div>
  <el-row :gutter="12">
    <el-col :xs="24" :sm="24" :md="5" :lg="5" :xl="5">
      <el-card style="margin:10px;">
        <div class="container-info">
          <div class="text-left">Model</div>
          <div class="text-right">HCR-12A</div>
        </div>
        <div class="container-info">
          <div class="text-left">S/W Version</div>
          <div class="text-right">v1.00.01</div>
        </div>
        <div class="container-info">
          <div class="text-left">H/W Version</div>
          <div class="text-right">v1.00.01</div>
        </div>
        <div class="container-info">
          <div class="text-left">MAC Address</div>
          <div class="text-right">00:00:00:00:00:00</div>
        </div>
        <hr>
        <div class="container-info">
          <div class="text-left">Power</div>
          <div class="text-right">ON</div>
        </div>
        <div class="container-info">
          <div class="text-left">EtherCAT</div>
          <div class="text-right">Offline</div>
        </div>
        <div class="container-info">
          <div class="text-left">Uptime</div>
          <div class="text-right">0d:00h:00m:00s</div>
        </div>
        <div class="container-info">
          <div class="text-left">Temp</div>
          <div class="text-right">00 °C</div>
        </div>
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
      <el-card style="margin:10px;">
        <chart class="chart-container"></chart>
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="24" :md="5" :lg="5" :xl="5">
      <el-card style="margin:10px;">
      </el-card>
    </el-col>
  </el-row>
</div>
</template>
<script>

import chart from './chart.vue'

export default {
    components: {
      chart
    },
    data() {
        return {

        }
    },
    mounted() {

    },
    beforeDestroy () {

    },
    methods: {

    }
}
</script>

<style>
.container-info {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 5px;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
  opacity: 0.7;
}

/* .chart-container {
  display: flex;
  justify-content: center;
  align-items: center;
} */

.centered-chart {
  max-width: 100%; 
  max-height: 100%;
}
@media (max-width: 767px) {
  .mobile-hide {
    display: none;
  }
}
</style>
