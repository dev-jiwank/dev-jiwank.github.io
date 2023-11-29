<template>
<!-- <div style="text-align:center;">
    <Typography>
        <Title :level="1" class="title-left-padding">
            {{ title_introduce }}
            <Icon type="md-swap" />
        </Title>
    </Typography>
</div> -->

  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ "Cryptocurrency Fear & Greed index" }}</span>
      </div>
    </template>
    <div style="text-align:center;">

        <Circle
            :size="300"
            :trail-width="4"
            :stroke-width="5"
            :percent="Math.floor(this.pageForm.fields.CURRENT_ALL_FG_POINT)"
            stroke-linecap="square"
            stroke-color="#43a3fb">
            <div class="demo-Circle-custom">
                <p>{{'공포지수'}}</p>
                <h1 :style="{ color: '#43a3fb', display: 'inline-block' }">{{this.pageForm.fields.CURRENT_ALL_FG_POINT}}</h1>
                <h1 style="display: inline-block;">/100</h1>
                <p>{{this.pageForm.fields.CURRENT_DATE}}</p>
                <span>
                    <h1>{{this.pageForm.fields.CURRENT_ALL_STATUS}}</h1>
                </span>
            </div>
        </Circle>

        <div style="margin-top:20px;">
          <el-row :gutter="12">
            <el-col :span="this.findBox.card_1 ? 8 : 4">
                <el-card :shadow="this.findBox.card_1 ? 'always' : 'hover'" :style="this.findBox.card_1 ? 'height: 100%;' : 'color: rgba(150, 150, 150, 0.7); height: 100%;'">
                    <template #header>
                        <div>
                            <span>{{ "매우공포 ( < 20 )" }}</span>
                        </div>
                    </template>
                    <div style="text-align:center;">
                        {{"변동성이 크고 높은 거래량을 동반한 하락을 의미합니다. 패닉셀링이 이어지고 있습니다."}}
                    </div>
                </el-card>
            </el-col>
            <el-col :span="this.findBox.card_2 ? 8 : 4">
                <el-card :shadow="this.findBox.card_2 ? 'always' : 'hover'" :style="this.findBox.card_2 ? 'height: 100%;' : 'color: rgba(150, 150, 150, 0.7);height: 100%;'">
                    <template #header>
                        <div>
                            <span>{{ "공포 ( < 40 )" }}</span>
                        </div>
                    </template>
                    <div style="text-align:center;">
                        {{"지수가 점진적으로 하락하고 있습니다. 가격이 변동성이 높아지면서, 거래량이 높아지고 있습니다. 단기적인 저점이 형성될 수 있습니다."}}
                    </div>
                </el-card>
            </el-col>
            <el-col :span="this.findBox.card_3 ? 8 : 4">
                <el-card :shadow="this.findBox.card_3 ? 'always' : 'hover'" :style="this.findBox.card_3 ? 'height: 100%;' : 'color: rgba(150, 150, 150, 0.7);height: 100%;'">
                    <template #header>
                        <div>
                            <span>{{ "중립 ( < 60 )" }}</span>
                        </div>
                    </template>
                    <div style="text-align:center;">
                        {{"현재 지수가 참여자들의 심리적인 저항, 지지를 받고 있습니다. 거래량과 유동성이 많은 시장이라면, 단기간 주가 움직임의 중요 결정 구간임을 암시합니다."}}
                    </div>
                </el-card>
            </el-col>
            <el-col :span="this.findBox.card_4 ? 8 : 4">
                <el-card :shadow="this.findBox.card_4 ? 'always' : 'hover'" :style="this.findBox.card_4 ? 'height: 100%;' : 'color: rgba(150, 150, 150, 0.7);height: 100%;'">
                    <template #header>
                        <div>
                            <span>{{ "탐욕 ( < 80 )" }}</span>
                        </div>
                    </template>
                    <div style="text-align:center;">
                        {{"지수가 점진적으로 상승하고 있습니다. 가격의 변동성과 거래량 또한 높아지고 있음을 의미합니다. 단기적인 고점이 형성될 수 있습니다."}}
                    </div>
                </el-card>
            </el-col>
            <el-col :span="this.findBox.card_5 ? 8 : 4">
                <el-card :shadow="this.findBox.card_5 ? 'always' : 'hover'" :style="this.findBox.card_5 ? 'height: 100%;' : 'color: rgba(150, 150, 150, 0.7);height: 100%;'">
                    <template #header>
                        <div>
                            <span>{{ "매우탐욕( < 100 )" }}</span>
                        </div>
                    </template>
                    <div style="text-align:center;">
                        {{"높은 거래량, 강한 변동성을 동반한 상승을 의미합니다. 변동성을 주의해야 합니다."}}
                    </div>
                </el-card>
            </el-col>
          </el-row>
        </div>

    </div>
  </el-card>


  <div style="text-align:center; margin:50px;">
    <el-table
      :data="FG_tableData">
      <el-table-column
        type="index"
        :index="indexMethod">
      </el-table-column>
      <el-table-column
        prop="1"
        label="어제">
      </el-table-column>
      <el-table-column
        prop="2"
        label="일주일">
      </el-table-column>
      <el-table-column
        prop="3"
        label="1개월전">
      </el-table-column>
      <el-table-column
        prop="4"
        label="3개월전">
      </el-table-column>
      <el-table-column
        prop="5"
        label="6개월전">
      </el-table-column>
      <el-table-column
        prop="6"
        label="1년전">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
// import Profile from '@/assets/Profile.png'

export default {
components: {
},
    data() {
        return {
            title_introduce : 'Award',
            api_value : '',
            pageForm : {
              fields : {
                CURRENT_DATE : '',
                CURRENT_TIME : '',
                CURRENT_ALL_FG_POINT : '',
                CURRENT_ALL_COMMENT : '',
                CURRENT_ALL_STATUS : '',
                DESCRIPTION_EXPLANATION : false,
                DESCRIPTION_ARRAY : '',
              }
            },
            findBox : {
              card_1 : false, 
              card_2 : false, 
              card_3 : false, 
              card_4 : false, 
              card_5 : false
            },
            FG_tableData : []
        }
    },
    mounted() {
      //this.getBitcoinRSI()
      this.get_upbit_ubci()
    },
    beforeDestroy () {

    },
    methods: {
      async get_upbit_ubci() {
        const axios = require('axios');
        axios.get('https://ubci-api.ubcindex.com/v1/crix/feargreed').then(response => {
            this.api_value = response.data;

            /* MAKE */
            let api_time_split = this.api_value.at.split('T')
            this.pageForm.fields.CURRENT_DATE = api_time_split[0]
            this.pageForm.fields.CURRENT_TIME = api_time_split[1].split(':')[0]+":"+api_time_split[1].split(':')[1]
            this.pageForm.fields.CURRENT_ALL_FG_POINT = this.api_value.today.score.toFixed(1)
            this.pageForm.fields.CURRENT_ALL_COMMENT = this.api_value.today.comment
            this.pageForm.fields.CURRENT_ALL_STATUS = this.api_value.today.stage

            this.findDescriptionBox(Math.floor(this.pageForm.fields.CURRENT_ALL_FG_POINT))
            this.factoringHistoryTable(this.api_value.intv)
          })
          .catch(error => {
            console.error('Error:', error.message);
          });
      },

      factoringHistoryTable (history_object) {
        var extractedData = history_object.map(function(item) {
            return {
                name: item.name,
                stage: item.stage,
                score: item.score
            };
        });

        const result_state = {};
        const result_score = {};

        extractedData.forEach((item, index) => {
            result_state[index + 1] = item.stage;
            result_score[index + 1] = item.score;
        });

        const formattedResult_state = [result_state];
        const formattedResult_score = [result_score];

        const combinedData = [...formattedResult_state, ...formattedResult_score];

        this.FG_tableData = combinedData
      },

      findDescriptionBox (value) {
          if (value >= 0 && value <= 20) {
            this.findBox.card_1 = true;
          } else if (value >= 21 && value <= 40) {
            this.findBox.card_2 = true;
          } else if (value >= 41 && value <= 60) {
            this.findBox.card_3 = true;
          } else if (value >= 61 && value <= 80) {
            this.findBox.card_4 = true;
          } else if (value >= 81 && value <= 100) {
            this.findBox.card_5 = true;
          }
      },
      indexMethod(index) {
        if(index == 0) {
          return '점수'
        }
        else {
          return '상태'
        }
      }

      //  LEGACY

      // async getBitcoinRSI () {
      //   const axios = require('axios');
      //   const endpoint = 'https://api.upbit.com/v1/candles/minutes/30';
      //   const endpoint_week = 'https://api.upbit.com/v1/candles/weeks';
      //   const endpoint_month = 'https://api.upbit.com/v1/candles/months';
      //   const market = 'KRW-BTC'; // Coin name
      //   const count = 12; // RSI 봉 갯수

      //   try {
      //     const response = await axios.get(endpoint_month, {
      //       params: {
      //         market,
      //         count,
      //       },
      //     });
      //     const candles = response.data;

      //     // RSI 계산
      //     const closePrices = candles.map((candle) => candle['trade_price']);
      //     this.calculateRSI(closePrices);
      //   } catch (error) {
      //     console.error('Error:', error.message);
      //   }
      // },

      // calculateRSI(closingPrices) {
      //   // Calculate the average of the upward price changes
      //   let avgUpwardChange = 0;
      //   for (let i = 1; i < closingPrices.length; i++) {
      //     avgUpwardChange += Math.max(0, closingPrices[i] - closingPrices[i - 1]);
      //   }
      //   avgUpwardChange /= closingPrices.length;

      //   // Calculate the average of the downward price changes
      //   let avgDownwardChange = 0;
      //   for (let i = 1; i < closingPrices.length; i++) {
      //     avgDownwardChange += Math.max(0, closingPrices[i - 1] - closingPrices[i]);
      //   }
      //   avgDownwardChange /= closingPrices.length;

      //   // Calculate the RSI
      //   const rsi = 100 - (100 / (1 + (avgUpwardChange / avgDownwardChange)));

      //   console.log(rsi)
      //   return rsi;
      // }
    }
}
</script>

<style>
.card-header {
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

.box-card {
  margin: 50px;
  width: auto;
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
</style>
