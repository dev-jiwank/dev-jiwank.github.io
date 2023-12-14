<template>
<!-- <div style="text-align:center;">
    <Typography>
        <Title :level="1" class="title-left-padding">
                      {{ "EPL SPORT OVERALL" }}
        </Title>
    </Typography>
</div> -->
<div>
  <el-tabs v-model="activeName" class="football-tabs">
      <el-tab-pane label="순위" name="standing" @click="activeName='standing'"></el-tab-pane>
      <el-tab-pane label="일정" name="match" @click="activeName='match'">
          <el-radio-group v-model="activeName_2" style="margin-bottom: 10px; text-align: center;" v-if="isMobile==true">
            <el-radio-button label="start" @click="activeName_2='start'">{{'진행'}}</el-radio-button>
            <el-radio-button label="end" @click="activeName_2='end'">{{'종료'}}</el-radio-button>
          </el-radio-group>
      </el-tab-pane>
  </el-tabs>

    <el-row :gutter="5" v-if="activeName=='standing'">
      <el-col :xs="24" :sm="24" :md="24" :lg="10" :xl="10">
        <el-card class="box-card-score">
          <template #header>
            <div>
              <span>{{ "순위 (Standings)"}}</span>
            </div>
          </template>
          <el-scrollbar height="1000px">
          <standing></standing>
          </el-scrollbar>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="14" :xl="14">
        <el-card class="box-card-score">
          <template #header>
            <div>
              <span>{{ "분석"}}</span>
            </div>
          </template>
          <el-scrollbar height="1000px">
          </el-scrollbar>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="5" v-else-if="activeName=='match'&&isMobile==true">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" v-if="activeName_2=='start'">
        <el-card class="box-card-match">
          <template #header>
            <div>
              <span>{{ "경기 일정"}}</span>
            </div>
          </template>
          <el-scrollbar :height="scrollbarHeight" always>
          <match :someProp="'match'"></match>
          </el-scrollbar>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" v-else-if="activeName_2=='end'">
        <el-card class="box-card-match">
          <template #header>
            <div>
              <span>{{ "종료 일정"}}</span>
            </div>
          </template>
          <el-scrollbar height="1000px" always>
          <match :someProp="'match-end'"></match>
          </el-scrollbar>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="5" v-else-if="activeName=='match'&&isMobile==false">
      <!-- <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="9">
        <el-card class="box-card-score">
          <template #header>
            <div>
              <span>{{ "순위 (Standings)"}}</span>
            </div>
          </template>
          <el-scrollbar height="1000px">
          <standing></standing>
          </el-scrollbar>
        </el-card>
      </el-col> -->
      <el-col :xs="24" :sm="24" :md="24" :lg="10" :xl="10">
        <el-card class="box-card-match">
          <template #header>
            <div>
              <span>{{ "경기 일정"}}</span>
            </div>
          </template>
          <!-- <el-scrollbar height="1000px" always> -->
          <match :someProp="'match'"></match>
          <!-- </el-scrollbar> -->
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="14" :xl="14">
        <el-card class="box-card-match">
          <template #header>
            <div>
              <span>{{ "종료 일정"}}</span>
            </div>
          </template>
          <!-- <el-scrollbar height="1000px" always> -->
          <match :someProp="'match-end'"></match>
          <!-- </el-scrollbar> -->
        </el-card>
      </el-col>
    </el-row>
</div>


</template>
<script>
import standing from './standing.vue'
import match from './match.vue'
import mobileCheck from "../../shared/mobilecheck.js";

export default {
    components: {
      standing,
      match
    },
    mixins: [mobileCheck],
    data() {
        return {
          scrollbarHeight: null,
          activeName : 'standing',
          activeName_2 : 'start'
        }
    },
    mounted() {
      this.adjustScrollbarHeight();
      window.addEventListener('resize', this.adjustScrollbarHeight);
    },

    beforeDestroy() {
      window.removeEventListener('resize', this.adjustScrollbarHeight);
    },

    methods: {
      adjustScrollbarHeight() {
        const windowHeight = window.innerHeight;
        const desiredHeight = windowHeight - 285;
        this.scrollbarHeight = `${desiredHeight}px`;
      },
    },
}
</script>

<style scoped>
  @media screen and (max-width: 600px) {
    .box-card-score {
        margin: 0;
        width: auto; /* or any other value suitable for mobile screens */
    }
    .el-row .el-col {
        margin-bottom: 10px;
    }
  }

  .football-tabs {
    margin: 0px 10px 0;
  }
  /* .football-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  } */
  /* .el-col {
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
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  } */



  /* .box-card-score {
    margin: 50px;
    width: 620px;
  }

    @media screen and (max-width: 600px) {
        .box-card-score {
            margin: 0px;

        }
        .el-row .el-col {
            margin-bottom: 10px;
        }
        .responsive-row-index {
        flex-direction: column;
        }
        .el-col-8 {
            max-width: none;
        }
        .el-col-12 {
            max-width: none;
        }
    } */
</style>