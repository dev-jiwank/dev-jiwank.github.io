<template>
    <div>
      <el-table
        align="center"
        :data="timedtableData"
        style="width: 100%;">
        <!-- <el-table-column
          type="index"
          width="50">
        </el-table-column> -->
        <el-table-column
          property="utcDate"
          label="날짜">
        </el-table-column>
        <el-table-column
          property="homeTeam.name"
          label="홈팀">
        </el-table-column>
        <el-table-column
          property="awayTeam.name"
          label="어웨이팀">
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

import matchdatas from '@/shared/matchdata.json'

export default {
components: {
  matchdatas
},
    data() {
        return {
          // currentRow: null,
          json_data : matchdatas,
          standingtableData : [],
          timedtableData : []
        }
    },
    mounted() {
      //this.get_api_match()

      this.localtest()
    },
    methods: {
      async get_api_match() {
        const axios = require('axios');
        axios.get("https://definitely-handy-cow.ngrok-free.app/api/foot/matches?matchday=23",{
            headers: {
                'ngrok-skip-browser-warning': '69420'
            }
        }).then(response => {
          console.log(response.data[0].matches)
          })
          .catch(error => {
            console.error('Error:', error.message);
          });
      },

      async localtest() {
        this.standingtableData = this.json_data[0].matches

        this.standingtableData.forEach(element => {
          if(element.status=='FINISHED') {
            
          }
          else if(element.status=='SCHEDULED') {

          }
          else if(element.status=='TIMED') {
            this.timedtableData.push(element)
            // console.log(this.timedtableData)
          }

        });
      },

      // tableRowClassName({row, rowIndex}) {
      //   if (rowIndex<4) {
      //     return 'warning-row';
      //   } else if (rowIndex == 4) {
      //     return 'success-row';
      //   }
      //   return '';
      // }
    }
}
</script>

<style>
  /* .box-card-score {
    margin: 50px;
    width: 620px;
  } */
  /* .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  } */

/* .card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

@media (max-width: 768px) {
  .box-card {
    margin: auto;
  }
}

.demo-Circle-custom h1{
    color: #3f414d;
    font-size: 28px;
    font-weight: normal;
}
.demo-Circle-custom p{
    color: #657180;
    font-size: 14px;
    margin: 10px 0 15px;
}
.demo-Circle-custom span{
    display: block;
    padding-top: 15px;
    color: #657180;
    font-size: 14px;
}
.demo-Circle-custom span:before{
    content: '';
    display: block;
    width: 50px;
    height: 1px;
    margin: 0 auto;
    background: #e0e3e6;
    position: relative;
    top: -15px;
}
.demo-Circle-custom span i{
    font-style: normal;
        color: #3f414d;
}

@media (max-width: 767px) {
  .mobile-hide {
    display: none;
  }
} */
</style>
