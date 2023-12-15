<template>
    <div>
        <el-descriptions border :column="4" direction="vertical">
            <template #title>
                <div class="title-container-alyze">
                    <img :src="this.selectteamtableData.img" class="image-alyze" />
                    <div class="text-container-alyze">
                        <div class="team-name-alyze">{{ this.selectteamtableData.name }}</div>
                        {{"감독 : "+this.selectteamtableData.coach }}
                    </div>
                </div>
            </template>
            <el-descriptions-item label="홈구장">{{ this.selectteamtableData.venue }}</el-descriptions-item>
            <el-descriptions-item label="주소">{{ this.selectteamtableData.address }}</el-descriptions-item>
            <el-descriptions-item label="클럽 컬러">{{ this.selectteamtableData.clubColors }}</el-descriptions-item>
            <el-descriptions-item label="창립 연도">{{ this.selectteamtableData.founded }}</el-descriptions-item>
        </el-descriptions>

        <el-collapse v-if="isMobile == true" style="margin-top:10px;">
            <div v-for="(team, index) in selectteamtableData.squad" :key="team">
              <el-collapse-item :title="team.name" :name="String(index+1)">
                <div>{{team.dateOfBirth}}</div>
                <div>{{team.nationality}}</div>
                <div>{{team.position}}</div>
              </el-collapse-item>
            </div>
        </el-collapse>

        <el-card v-else-if="isMobile==false" style="margin-top:10px;" shadow="never">
          <div slot="header">
            <span>{{"스쿼드"}}</span>
          </div>
          <div style="margin-top:10px;">
              <el-row :gutter="20" v-for="(team, index) in chunks(selectteamtableData.squad, 3)" :key="index">
                <el-col :span="8" v-for="(item, innerIndex) in team" :key="innerIndex">
                  <el-collapse>
                        <el-collapse-item :title="item.name" :name="String(index+1)">
                          <div>{{item.dateOfBirth}}</div>
                          <div>{{item.nationality}}</div>
                          <div>{{item.position}}</div>
                        </el-collapse-item>
                  </el-collapse>
                </el-col>
              </el-row>
          </div>
        </el-card>

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

import teamdata from '@/shared/team.json'

export default {
components: {
  teamdata
},
    data() {
        return {
          isMobile: false,
          // currentRow: null,
          dataLoaded : false,
          json_data : teamdata,
          teamtableData : [],
          selectteamtableData : {
            venue: '',
            founded: '',
            address: '',
            clubColors: '',
            name : '',
            coach : '',
            squad : []
          }
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
            axios.get("https://definitely-handy-cow.ngrok-free.app/api/foot/teams",{
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
            this.teamtableData = this.json_data.data[0].teams;
            this.selectteamtableData = [];

            try {
                var foundElement = this.teamtableData.find(function (team) {
                    return team.name == localStorage.getItem('teamNameWithPositionOne');
                });

                if (foundElement) {
                    this.generate_analyze_table(foundElement)
                } else {
                    this.generate_analyze_table(foundElement)
                }
            } catch (error) {
                console.error('에러 발생:', error);
            }
        },

        generate_analyze_table(value){
            this.selectteamtableData.venue = value.venue
            this.selectteamtableData.founded = value.founded
            this.selectteamtableData.address = value.address
            this.selectteamtableData.clubColors = value.clubColors
            this.selectteamtableData.name = value.name
            this.selectteamtableData.coach = value.coach.name
            this.selectteamtableData.img = value.crest
            this.selectteamtableData.squad=value.squad

            this.selectteamtableData.squad.map((team, index) => {
                return { ...team, num: String(index) };
            });

            this.dataLoaded = true;
        },

        chunks(array, size) {
          const result = [];
          for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
          }
          return result;
        },

        updateIsMobile() {
          this.isMobile = window.innerWidth < 768;
        }
    }
}
</script>

<style>
  /* .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }

  @media (max-width: 768px) {
    .mobile-width-tab {
      width: 10px;
    }
  } */
.title-container-alyze {
    display: flex;
    align-items: center;
}

.image-alyze {
    width: 50px; /* 이미지의 고정된 너비 설정 */
    height: 50px; /* 이미지의 고정된 높이 설정 */
    object-fit: cover; /* 이미지가 고정된 사이즈 안에서 적절하게 맞추도록 설정 */
    margin-right: 10px; /* 이미지와 텍스트 사이의 간격 조절을 위한 마진 */
}

.text-container-alyze {
    flex: 1;
}

.team-name-alyze {

    line-height: 50px; /* 이미지의 높이와 동일하게 조절 */
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; /* 글자가 너무 길 경우 생략(...)으로 표시 */
}
</style>
