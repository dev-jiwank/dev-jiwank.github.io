<template>
<!-- <div style="text-align:center;">
    <Typography>
        <Title :level="1" class="title-left-padding">
                      {{ "EPL SPORT OVERALL" }}
        </Title>
    </Typography>
</div> -->
  <div style="text-align:center; margin:25px;">
    <el-collapse>
      <el-collapse-item title="json Data" name="1">
        <div>{{this.json_data}}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>

export default {
components: {

},
    data() {
        return {
          json_data : ''
        }
    },
    mounted() {
      this.get_api()
    },
    methods: {
      async get_api() {
        const axios = require('axios');
        axios.get("https://api-football-standings.azharimm.dev/leagues/eng.1/standings?season=2023&sort=asc").then(response => {
            console.log(response.data.data)
            this.json_data = response.data.data
          })
          .catch(error => {
            console.error('Error:', error.message);
          });
      },

    }
}
</script>

<style>
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

@media (max-width: 767px) {
  .mobile-hide {
    display: none;
  }
} */
</style>
