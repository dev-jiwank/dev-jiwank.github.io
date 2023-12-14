<template>
    <div>
      <el-table
        align="center"
        :data="standingtableData"
        :row-class-name="tableRowClassName"
        style="width: 100%;">
        <el-table-column
          fixed
          type="index"
          :width="isMobile ? '45px' : '50'">
        </el-table-column>
        <el-table-column
          fixed
          property="team.name"
          label="클럽"
          :width="isMobile ? '100px' : '200'">
        </el-table-column>
        <el-table-column
          property="playedGames"
          label="경기"
          width="55">
        </el-table-column>
        <el-table-column
          property="won"
          label="승"
          width="50">
        </el-table-column>
        <el-table-column
          property="draw"
          label="무"
          width="50">
        </el-table-column>
        <el-table-column
          property="lost"
          label="패"
          width="50">
        </el-table-column>
        <el-table-column
          property="points"
          label="승점"
          width="55">
        </el-table-column>
        <el-table-column
          property="goalDifference"
          label="득실"
          width="55">
        </el-table-column>
      </el-table>

      <!-- <div style="text-align:center; margin:25px;">
        <el-collapse>
          <el-collapse-item title="json Data" name="1">
            <div>{{this.json_data}}</div>
          </el-collapse-item>
        </el-collapse>
      </div> -->
    </div>
</template>
<script>

import standingdatas from '@/shared/standingdata.json'

export default {
components: {
  standingdatas
},
    data() {
        return {
          isMobile: false,
          currentRow: null,
          json_data : standingdatas,
          standingtableData : []
        }
    },
    mounted() {
      this.isMobile = window.innerWidth < 768;
      window.addEventListener('resize', this.updateIsMobile);

      process.env.NODE_ENV=='development' ? this.localtest() : this.get_api_standing()
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.updateIsMobile);
    },
    methods: {
      async get_api_standing() {
        const axios = require('axios');
        axios.get("https://definitely-handy-cow.ngrok-free.app/api/foot/standings",{
            headers: {
                'ngrok-skip-browser-warning': '69420'
            }
        }).then(response => {
            this.json_data = response
            this.standingtableData = response.data[0].standings[0].table
          })
          .catch(error => {
            console.error('Error:', error.message);
          });
      },
      async localtest() {
        this.standingtableData = this.json_data[0].standings[0].table
      },

      tableRowClassName({row, rowIndex}) {
        if (rowIndex<4) {
          return 'warning-row';
        } else if (rowIndex == 4) {
          return 'success-row';
        }
        return '';
      },

      updateIsMobile() {
        this.isMobile = window.innerWidth < 768;
      }
    }

}
</script>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }

  @media (max-width: 768px) {
    .mobile-width-tab {
      width: 10px;
    }
  }
</style>
