<template>
<!-- <div style="text-align:center;">
    <Typography>
        <Title :level="1" class="title-left-padding">
                      {{ "EPL SPORT OVERALL" }}
        </Title>
    </Typography>
</div> -->
    <el-row :gutter="5">
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="9">
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
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <el-card class="box-card-match">
          <template #header>
            <div>
              <span>{{ "경기 일정"}}</span>
            </div>
          </template>
          <el-scrollbar height="1000px" always>
          <match :someProp="'match'"></match>
          </el-scrollbar>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="7">
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


</template>
<script>
import standing from './standing.vue'
import match from './match.vue'

export default {
components: {
  standing,
  match
},
    data() {
        return {

        }
    }
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