<template>
    <div>
      <el-table v-if="someProp=='match'"
        align="center"
        :data="timedtableData"
        style="width: 100%;">
        <el-table-column
          property="krwDate"
          label="날짜">
        </el-table-column>
        <el-table-column
          sortable
          property="homeTeam.shortName"
          label="홈">
        </el-table-column>
        <el-table-column
          sortable
          property="awayTeam.shortName"
          label="원정">
        </el-table-column>
      </el-table>

      <el-table v-else-if="someProp=='match-end'"
        align="center"
        :data="endtableData"
        style="width: 100%;">
        <el-table-column
          property="krwDate"
          label="날짜">
        </el-table-column>
        <el-table-column
          sortable
          property="homeTeam.shortName"
          label="홈">
        </el-table-column>

        <el-table-column
          sortable
          property="awayTeam.shortName"
          label="원정">
        </el-table-column>

        <el-table-column
          property="fullscore"
          label="결과">
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
props: {
  someProp: {
    type: String,
    default: ""
  }
},
components: {
  matchdatas
},
    data() {
        return {
          // currentRow: null,
          json_data : matchdatas,
          standingtableData : [],
          timedtableData : [],
          endtableData : []
        }
    },
    mounted() {
      process.env.NODE_ENV=='development' ? this.localtest() : this.get_api_match()
    },
    methods: {
      async get_api_match() {
        const axios = require('axios');
        axios.get("https://definitely-handy-cow.ngrok-free.app/api/foot/matches?matchday=23",{
            headers: {
                'ngrok-skip-browser-warning': '69420'
            }
        }).then(response => {
            this.standingtableData = response.data[0].matches
            const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Seoul' };

            this.standingtableData.forEach(element => {
              const utcDate = new Date(element.utcDate);
              const koreanDate = new Intl.DateTimeFormat('en-US', options).format(utcDate);
              const parts = koreanDate.split(', ')[0].split('/');
              const formattedDate = `${parts[2]}-${parts[0].padStart(2, '0')}-${parts[1].padStart(2, '0')}`;

              element.krwDate = formattedDate+" "+koreanDate.split(', ')[1]
              element.krwTime = koreanDate.split(', ')[1]

              if(element.status=='FINISHED') {
                element.fullscore = element.score.fullTime.home+":"+element.score.fullTime.away
                this.endtableData.push(element)
              }
              else if(element.status=='SCHEDULED') {
                this.timedtableData.push(element)
              }
              else if(element.status=='TIMED') {
                this.timedtableData.push(element)
              }
            });
          })
          .catch(error => {
            console.error('Error:', error.message);
          });
      },

      async localtest() {
        this.standingtableData = this.json_data[0].matches
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Seoul' };

        this.standingtableData.forEach(element => {
          const utcDate = new Date(element.utcDate);
          const koreanDate = new Intl.DateTimeFormat('en-US', options).format(utcDate);
          const parts = koreanDate.split(', ')[0].split('/');
          const formattedDate = `${parts[2]}-${parts[0].padStart(2, '0')}-${parts[1].padStart(2, '0')}`;

          element.krwDate = formattedDate+" "+koreanDate.split(', ')[1]
          element.krwTime = koreanDate.split(', ')[1]

          if(element.status=='FINISHED') {
            element.fullscore = element.score.fullTime.home+":"+element.score.fullTime.away
            this.endtableData.push(element)
          }
          else if(element.status=='SCHEDULED') {
            this.timedtableData.push(element)
          }
          else if(element.status=='TIMED') {
            this.timedtableData.push(element)
          }

        });
      },

      async utctokoreatime(time) {
        let utcDate = new Date(time);

        let krwDate = new Intl.DateTimeFormat('ko-KR', {
          timeZone: 'Asia/Seoul',
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
        }).format(utcDate);

        return krwDate;
      }


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
