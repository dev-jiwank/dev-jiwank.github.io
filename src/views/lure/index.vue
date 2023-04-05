<template>
    <div style=";background:#eee;">
        <div style="text-align:center">
            <Typography v-if="true">
                <Title :level="3" class="title-left-padding">
                    {{ title_current }}
                    <Icon type="ios-megaphone"/>
                </Title>
                <Title :level="5">-{{ current_time+" 기준"}}-</Title>
            </Typography>
        </div>
        <Row style="background:#eee;padding:20px">
            <Table border :columns="columns" :data="fish_table"></Table>
        </Row>

        <el-row :gutter="12" style="padding:20px;">
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                <el-card class="box-card" shadow="hover" style="margin-bottom:10px;">
                    <template #header>
                    <div class="card-header">
                        <span>Card name</span>
                        <el-button class="button" text>Operation button</el-button>
                    </div>
                    </template>
                    <div>
                        <Select v-model="model" style="width:200px;" placeholder="SELECT">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </div>
                </el-card>
            </el-col>

            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                <el-card class="box-card" shadow="hover" style="margin-bottom:10px;">
                    <template #header>
                    <div class="card-header">
                        <span>Card name</span>
                        <el-button class="button" text>Operation button</el-button>
                    </div>
                    </template>
                    <div>
                        <el-button class="button" text>Operation button</el-button>
                    </div>
                </el-card>
            </el-col>

            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                <el-card class="box-card" shadow="hover" style="margin-bottom:10px;">
                    <template #header>
                    <div class="card-header">
                        <span>Card name</span>
                        <el-button class="button" text>Operation button</el-button>
                    </div>
                    </template>
                    <div>
                        <!-- <iframe src="https://www.nifs.go.kr/risa/main.risa" frameborder="0" scrolling="no" width="auto" height="525"></iframe> -->
                    </div>
                </el-card>
            </el-col>
        </el-row>

    <!-- <div style="background:#eee;text-align:center;padding:20px;"> -->
    <!-- <div style="background:#eee;text-align:center;">    
        <el-space wrap>
            <el-card class="box-card">
                <template #header>
                <div class="card-header">
                    <span>Card name</span>
                    <el-button class="button" text>Operation button</el-button>
                </div>
                </template>
                <div>
                    <Select v-model="model" style="width:200px;" placeholder="SELECT">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </div>
            </el-card>

            <el-card class="box-card">
                <template #header>
                <div class="card-header">
                    <span>Card name</span>
                    <el-button class="button" text>Operation button</el-button>
                </div>
                </template>
                <div>
                    <el-button class="button" text>Operation button</el-button>
                </div>
            </el-card>

            <el-card class="box-card">
                <template #header>
                <div class="card-header">
                    <span>Card name</span>
                    <el-button class="button" text>Operation button</el-button>
                </div>
                </template>
                <div>
                    <iframe src="https://www.nifs.go.kr/risa/main.risa" frameborder="0" scrolling="no" width="auto" height="525"></iframe>
                </div>
            </el-card>
        </el-space>
    </div>

        <Row style="background:#eee;padding:20px">
            <Col span="7">
                <Card :bordered="false">
                    <template #title>KOANNNNNNNNN</template>
                    <Space direction="vertical" type="flex">
                        <Button type="default" long>https://www.nifs.go.kr/risa/main.risa</Button>
                    </Space>
                </Card>
            </Col>

            <Col span="8" offset="1">
                <Card shadow>
                    <template #title>KAON</template>
                    <Select v-model="model" style="width:200px;" placeholder="SELECT">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </Card>
            </Col>

            <Col span="7" offset="1">
                <Card shadow>
                    <template #title>KAON</template>
                    <p>Content of card</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
                </Card>
            </Col>
        </Row>


        <Row style="background:#eee;padding:20px">
            <iframe src="https://www.nifs.go.kr/risa/main.risa" frameborder="0" scrolling="no" width="400" height="525"></iframe>
        </Row> -->
    </div>
</template>
<script>
    export default {
        data () {
            return {
                title_current: 'XX XX XXXX',
                current_time: '',
                suggest_fish: [],
                day:['(일)','(월)','(화)','(수)','(목)','(금)','(토)'],
                columns: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Location',
                        key: 'suggest'
                    },
                    {
                        title: 'KAONKAON',
                        key: 'address'
                    }
                ],
                fish_table: [],
                fish_data: [
                    {
                        name: 'KAON',
                        time_west_nt: ['1','2','3'],
                        time_west_st: ['1','2','3'],
                        time_east: ['4','5','6'],
                        time_south: ['7','8','9']
                    },
                    {
                        name: 'KAON',
                        time_west_nt: ['1','2','3'],
                        time_west_st: ['1','2','3'],
                        time_east: ['4','5','6'],
                        time_south: ['7','8','9']
                    }
                ],
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model: ''
            }
        },
        mounted() {
            this.fetchData()
        },
        methods: {
            fetchData(){
                this.getTime()
                this.getSuggest()
            },
            getTime(){
                let today = new Date()

                let year = today.getFullYear()
                let month = today.getMonth() + 1
                let date = today.getDate()
                let day = this.day[today.getDay()]

                this.current_time = year+'년 '+month+'월 '+date+'일'+day
            },
            getSuggest() {
                for(const key in Object.keys(this.fish_data)){
                    let request = {name:'', suggest: '', address: ''}

                    request.name = this.fish_data[key].name
                    request.suggest = 'KAON'
                    request.address = 'KAON'

                    this.fish_table.push(request)
                }
            },
            open_play_page() {
                window.open("https://www.play.pl/")
            },
        } 
    }
</script>

<style>
/* .card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
} */


/* .item {
  margin-bottom: 18px;
} */

/* .box-card {
  width: 200px;
} */
</style>
